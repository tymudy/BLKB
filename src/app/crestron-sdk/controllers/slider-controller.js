var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Subscription } from "rxjs";
import { JoinsService } from '../services/joins.service';
import { CommunicationService } from '../services/communication.service';
var SliderController = (function () {
    function SliderController(joinsService, communicationService) {
        this.joinsService = joinsService;
        this.communicationService = communicationService;
        this.subscription = new Subscription();
        this.lastRunClass = '';
    }
    SliderController.prototype.ngOnInit = function () {
        this.el = document.getElementsByName(this.name);
        if (this.el) {
            this.addListeners();
        }
    };
    SliderController.prototype.addListeners = function () {
        if (this.onSlide) {
            debugger;
            this.el[0].addEventListener("mousedown", this.sendOnSlide.bind(this));
        }
        if (this.onSlideEnd) {
            this.el[0].addEventListener("mouseup", this.sendOnSlideEnd.bind(this));
        }
        if (this.runClass) {
            this.subscription = this.joinsService.getSerialSubscribe(this.runClass, false).subscribe(this.onReceived.bind(this));
        }
        if (this.runEnabled) {
            this.subscription = this.joinsService.getSerialSubscribe(this.runEnabled, false).subscribe(this.onReceived.bind(this));
        }
        if (this.runShow) {
            this.subscription = this.joinsService.getSerialSubscribe(this.runShow, false).subscribe(this.onReceived.bind(this));
        }
        if (this.runValue) {
            this.subscription = this.joinsService.getSerialSubscribe(this.runValue, false).subscribe(this.onReceived.bind(this));
        }
        if (this.runValuePair) {
            this.subscription = this.joinsService.getSerialSubscribe(this.runValuePair, false).subscribe(this.onReceived.bind(this));
        }
    };
    SliderController.prototype.onReceived = function (data) {
        if (this.lastRunClass) {
            this.el[0].classList.remove(this.lastRunClass);
        }
        this.el[0].classList.add(data.value);
        this.lastRunClass = data.value;
    };
    ;
    SliderController.prototype.sendOnSlide = function () {
        console.log('onSlide');
        this.communicationService.sendCodeDigital(this.onSlide, 1);
    };
    SliderController.prototype.sendOnSlideEnd = function () {
        console.log('onSlideEnd');
        this.communicationService.sendCodeDigital(this.onSlideEnd, 0);
    };
    SliderController.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return SliderController;
}());
__decorate([
    Input('name'),
    __metadata("design:type", String)
], SliderController.prototype, "name", void 0);
__decorate([
    Input('onSlide'),
    __metadata("design:type", Number)
], SliderController.prototype, "onSlide", void 0);
__decorate([
    Input('onSlideEnd'),
    __metadata("design:type", Number)
], SliderController.prototype, "onSlideEnd", void 0);
__decorate([
    Input('runClass'),
    __metadata("design:type", Number)
], SliderController.prototype, "runClass", void 0);
__decorate([
    Input('runEnabled'),
    __metadata("design:type", Number)
], SliderController.prototype, "runEnabled", void 0);
__decorate([
    Input('runShow'),
    __metadata("design:type", Number)
], SliderController.prototype, "runShow", void 0);
__decorate([
    Input('runValue'),
    __metadata("design:type", Number)
], SliderController.prototype, "runValue", void 0);
__decorate([
    Input('runValuePair'),
    __metadata("design:type", Number)
], SliderController.prototype, "runValuePair", void 0);
SliderController = __decorate([
    Component({
        selector: 'slider-controller',
        template: ''
    }),
    __metadata("design:paramtypes", [JoinsService, CommunicationService])
], SliderController);
export { SliderController };
//# sourceMappingURL=slider-controller.js.map