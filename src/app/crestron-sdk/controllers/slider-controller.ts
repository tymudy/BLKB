import { Component,
         Input,
         OnInit,
         OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { JoinsService } from '../services/joins.service';
import { CommunicationService } from '../services/communication.service';


@Component({
  selector: 'slider-controller',
  template: ''
})
export class SliderController implements OnInit, OnDestroy {

    @Input('name') name: string;

    @Input('onSlide') onSlide: number;
    @Input('onSlideEnd') onSlideEnd: number;

    @Input('runClass') runClass: number;
    @Input('runEnabled') runEnabled: string;
    @Input('runShow') runShow: string;
    @Input('runValue') runValue: number;
    @Input('runValuePair') runValuePair: number;

    private el: Element;

    private subscription: Subscription = new Subscription();

    private  lastRunClass: string = '';

    constructor(private joinsService: JoinsService, private communicationService: CommunicationService ){ 
    }

    ngOnInit(): void {
        this.el = document.getElementsByName(this.name)[0].children[0].children[1].children[0];

        if (this.el){
        this.addListeners();
        }  
    }

    private addListeners(): void {
        console.log(this.el);

      if (this.onSlide) {
        this.el.addEventListener("mousedown", this.sendOnSlide.bind(this));
      }

      if (this.onSlideEnd) {
        this.el.addEventListener("mouseup", this.sendOnSlideEnd.bind(this));
      }

      if (this.runClass){
        this.subscription = this.joinsService.getSerialSubscribe(this.runClass, false).subscribe(this.onReceived.bind(this)); 
      }
      if (this.runEnabled){
        this.subscription = this.joinsService.getSerialSubscribe(3, false).subscribe(this.onEnabled.bind(this));
      }else{
        this.subscription = this.joinsService.getSerialSubscribe(2, false).subscribe(this.onEnabled.bind(this));
      }
      if (this.runShow){
        this.subscription = this.joinsService.getSerialSubscribe(1, false).subscribe(this.onReceived.bind(this));
      }else{
        this.subscription = this.joinsService.getSerialSubscribe(0, false).subscribe(this.onReceived.bind(this));
      }
      if (this.runValue){
        this.subscription = this.joinsService.getSerialSubscribe(this.runValue, false).subscribe(this.onReceived.bind(this))
      }
      if (this.runValuePair){
        this.subscription = this.joinsService.getSerialSubscribe(this.runValuePair, false).subscribe(this.onReceived.bind(this))
      }
        
    }

    onReceived(data:any): void {
      if(this.lastRunClass){
        this.el.classList.remove(this.lastRunClass);
      }
       this.el.classList.add(data.value);
       this.lastRunClass = data.value;
    };

    onEnabled(data:any): void {
      if(this.lastRunClass){
        this.el.classList.remove(this.lastRunClass);
      }
       this.el.classList.add(data.value);
       this.lastRunClass = data.value;
    };

    sendOnSlide(): void {
        console.log('onSlide');
        this.communicationService.sendCodeDigital(this.onSlide, 1);
    }

    sendOnSlideEnd(): void {
        console.log('onSlideEnd');
        this.communicationService.sendCodeDigital(this.onSlideEnd, 0);
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}