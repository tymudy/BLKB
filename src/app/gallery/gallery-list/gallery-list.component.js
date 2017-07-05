var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
/*import { ShareService } from '../../share/shareService';*/
var GalleryListComponent = (function () {
    function GalleryListComponent() {
        this.secondListAttributes = [];
        this.items = [];
    }
    /* constructor(private http: Http, private shareService: ShareService) {}
   
     getItemsForTheFirstScrollableList() {
       this.shareService.getData('assets/slider_list.json').subscribe((data: any) => {
         this.items = data.attributes;
         this.type = data.type;
       });
     }
   
     getItemsForTheSecondScrollableList() {
       this.shareService.getData('assets/slider_button_list.json').subscribe((data: any) => {
         this.secondListAttributes = data.items;
       });
     }*/
    GalleryListComponent.prototype.ngOnInit = function () {
        //this.getItemsForTheFirstScrollableList();
        // this.getItemsForTheSecondScrollableList();
    };
    return GalleryListComponent;
}());
GalleryListComponent = __decorate([
    Component({
        selector: 'gallery-list',
        templateUrl: './gallery-list.component.html',
        styleUrls: ['./gallery-list.component.css']
    })
], GalleryListComponent);
export { GalleryListComponent };
//# sourceMappingURL=gallery-list.component.js.map