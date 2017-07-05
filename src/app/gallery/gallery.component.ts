import {Component, Input, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import {Http} from '@angular/http';
import {LoggerService} from '../crestron-sdk/services/log.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  menuItems: any[] = [];
  selectedMenuItemIndex: any = -1;
  menuClosed: boolean = true;
  hideDebugger: boolean = true;
  logs: any[] = [];

  private subscription: Subscription = new Subscription();

  constructor( private http: Http, private loggerService: LoggerService ){}

  ngOnInit ( ): void {
    this.loadItemsForGalleryMenu();
    this.subscription.add( this.loggerService.getLoggerSubscribe('debug').subscribe(( data: any ) => {
      console.log(data.time);
      this.logs.push( data );
    }));
  }

  loadItemsForGalleryMenu( ): void {
    this.http.get( 'assets/gallery_items.json' )
      .map(response => response.json())
      .subscribe( (data: any ) => {
        this.menuItems = data;
      });
  }

  toggleMenuItem( item: number ): void {
    this.selectedMenuItemIndex = this.selectedMenuItemIndex === item ? -1 : item;
  }

  toggleMenu( ): void {
    this.menuClosed = !this.menuClosed;
  }

  toggleDebugger( ):void {
    this.hideDebugger = !this.hideDebugger;
  }

  trackByFn( index: any) {
    return index;
  }

}
