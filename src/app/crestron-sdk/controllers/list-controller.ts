import { Component,
  OnInit, OnDestroy, Input, ElementRef} from '@angular/core';
import {JoinsService} from '../services/joins.service';
import {CommunicationService} from '../services/communication.service';
import {ComponentsCommunicationService} from '../services/components.communication.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'list-controller-component',
  template: '',
})
export class ListController implements OnInit, OnDestroy{
  @Input('name') name: string;
  @Input('onLoad') onLoad: number;
  @Input('onLazyload') onLazyload: number;

  numberOfItems: number = 15;
  onLoadJoinNumber: number = 1001;
  onLazyloadJoinNumber: number = 1020;
  firstLazyload: boolean = true;


  private subscription: Subscription = new Subscription();

  constructor(private joinsService: JoinsService, private communicationService: CommunicationService, private componetsCommunicationService: ComponentsCommunicationService ){ }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    
    if( this.onLoad ) {
      this.communicationService.sendCodeSerial( this.onLoad, null );
      this.onLoadingSubscribe( this.onLoadJoinNumber );
    }
    if( this.onLazyload ) {
      this.communicationService.sendCodeSerial( this.onLazyload, this.numberOfItems );
      this.onLoadingSubscribe( this.onLazyloadJoinNumber );
      this.onFetchMoreDataSubscribe( this.onLazyloadJoinNumber );
    }

  }

  onLoadingSubscribe( joinNumber: number ): void {
    this.subscription.add( this.joinsService.getSerialSubscribe( joinNumber , false ).subscribe( ( data: any) => {
      this.publishData( data );
    }));
  }

  onFetchMoreDataSubscribe( joinNumber: number ): void {
    this.subscription.add( this.componetsCommunicationService.getControllerSubscribe( this.name ).subscribe( ( data: any ) => {
      this.communicationService.sendCodeSerial( this.onLazyload, this.numberOfItems );
    }));
  }

  publishData( data: any ): void {
    this.componetsCommunicationService.publishData( JSON.parse( data.value ), this.name );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
