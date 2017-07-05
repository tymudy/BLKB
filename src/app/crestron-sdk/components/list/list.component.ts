import { Component,
         Input,
         OnInit,
         SimpleChanges,
         OnChanges,
         OnDestroy } from '@angular/core';

import { Http } from '@angular/http';
import { ShareService } from '../../services/share/shareService';
import { ComponentsCommunicationService } from '../../services/components.communication.service';
import { ChangeEvent } from '../virtual-scroll';
import { Subscription } from 'rxjs';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit, OnChanges, OnDestroy {
  @Input('name') name: string;
  @Input('load_type') load_type:string;
  @Input('page_size') page_size: number;
  @Input('loading_indicator') loading_indicator: boolean;
  @Input('min_width') min_width: number;
  @Input('min_height') min_height: number;
  @Input('max_height') max_height: number;
  @Input('max_width') max_width: number;
  @Input('header') header: string;
  @Input('footer') footer: string;

  listType: string;
  listAttributes: any[] = [];
  listItems: any[] = [];
  indices: ChangeEvent;
  bufferSize: number;
  subscription: Subscription = new Subscription();

  constructor(private http: Http, private shareService: ShareService, private componentsCommunicationService: ComponentsCommunicationService) {}

  ngOnInit (): void {
    this.setBufferSize();
    this.getListData();
  }

  getListData(): void {
    this.subscription.add( this.componentsCommunicationService.getComponentSubscribe( this.name ).subscribe((data: any) => {

      if( data.attributes.length > 0 ) {
        this.listItems = this.listItems.concat( data.attributes );
        this.listType = data.type;
        this.listAttributes = this.getAttributesData();
      }

    }));
  }

  getAttributesData(): any[] {

    if( this.load_type === 'none' ) {
      return this.listItems;
    }

    return this.listItems.slice(this.listAttributes.length, this.listAttributes.length + this.bufferSize);
  }

  setBufferSize(): void {

    if( !this.load_type ) {
      this.load_type = 'none';
      this.bufferSize = this.listItems.length;
    } else if( this.load_type.match(/^paged$/) != null ) {
       this.bufferSize = this.page_size;
    } else if( this.load_type.match(/^scroll$/) != null ) {
      this.bufferSize = 12;
    }
    
  }

  fetchMore( event: ChangeEvent ): void {

    this.indices = event;

    if (event.end === this.listAttributes.length) {
      if (this.listAttributes.length < this.listItems.length) {
        this.listAttributes = this.listAttributes.concat(this.getAttributesData());
      } else {
        this.componentsCommunicationService.createDataRequest( this.name );
      }
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.reset();
  }

  reset(): void {
    this.listAttributes = this.listItems.slice(0, this.bufferSize);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
