var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { LoggerService } from '../crestron-sdk/services/log.service';
import { Subscription } from 'rxjs';
var GalleryComponent = (function () {
    function GalleryComponent(http, loggerService) {
        this.http = http;
        this.loggerService = loggerService;
        this.menuItems = [];
        this.selectedMenuItemIndex = -1;
        this.menuClosed = true;
        this.hideDebugger = true;
        this.logs = [];
        this.subscription = new Subscription();
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadItemsForGalleryMenu();
        this.subscription.add(this.loggerService.getLoggerSubscribe('debug').subscribe(function (data) {
            console.log(data.time);
            _this.logs.push(data);
        }));
    };
    GalleryComponent.prototype.loadItemsForGalleryMenu = function () {
        var _this = this;
        this.http.get('assets/gallery_items.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.menuItems = data;
        });
    };
    GalleryComponent.prototype.toggleMenuItem = function (item) {
        this.selectedMenuItemIndex = this.selectedMenuItemIndex === item ? -1 : item;
    };
    GalleryComponent.prototype.toggleMenu = function () {
        this.menuClosed = !this.menuClosed;
    };
    GalleryComponent.prototype.toggleDebugger = function () {
        this.hideDebugger = !this.hideDebugger;
    };
    GalleryComponent.prototype.trackByFn = function (index) {
        return index;
    };
    GalleryComponent = __decorate([
        Component({
            selector: 'gallery-component',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.css']
        }),
        __metadata("design:paramtypes", [Http, LoggerService])
    ], GalleryComponent);
    return GalleryComponent;
}());
export { GalleryComponent };
//# sourceMappingURL=gallery.component.js.map