var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewEncapsulation } from '@angular/core';
var GalleryButtonComponent = (function () {
    function GalleryButtonComponent() {
    }
    GalleryButtonComponent.prototype.ngOnInit = function () {
    };
    GalleryButtonComponent = __decorate([
        Component({
            selector: 'gallery-button',
            templateUrl: './gallery-button.component.html',
            styleUrls: ['./gallery-button.component.css'],
            encapsulation: ViewEncapsulation.None
        })
    ], GalleryButtonComponent);
    return GalleryButtonComponent;
}());
export { GalleryButtonComponent };
//# sourceMappingURL=gallery-button.component.js.map