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
import { JoinsService } from '../services/joins.service';
import { CommunicationService } from '../services/communication.service';
import { ComponentsCommunicationService } from '../services/components.communication.service';
import { Subscription } from "rxjs";
var ListController = (function () {
    function ListController(joinsService, communicationService, componetsCommunicationService) {
        this.joinsService = joinsService;
        this.communicationService = communicationService;
        this.componetsCommunicationService = componetsCommunicationService;
        this.numberOfItems = 15;
        this.onLoadJoinNumber = 1001;
        this.onLazyloadJoinNumber = 1020;
        this.firstLazyload = true;
        this.subscription = new Subscription();
    }
    ListController.prototype.ngOnInit = function () {
        this.loadData();
    };
    ListController.prototype.loadData = function () {
        if (this.onLoad) {
            this.communicationService.sendCodeSerial(this.onLoad, null);
            this.onLoadingSubscribe(this.onLoadJoinNumber);
        }
        if (this.onLazyload) {
            this.communicationService.sendCodeSerial(this.onLazyload, this.numberOfItems);
            this.onLoadingSubscribe(this.onLazyloadJoinNumber);
            this.onFetchMoreDataSubscribe(this.onLazyloadJoinNumber);
        }
    };
    ListController.prototype.onLoadingSubscribe = function (joinNumber) {
        var _this = this;
        this.subscription.add(this.joinsService.getSerialSubscribe(joinNumber, false).subscribe(function (data) {
            _this.publishData(data);
        }));
    };
    ListController.prototype.onFetchMoreDataSubscribe = function (joinNumber) {
        var _this = this;
        this.subscription.add(this.componetsCommunicationService.getControllerSubscribe(this.name).subscribe(function (data) {
            _this.communicationService.sendCodeSerial(_this.onLazyload, _this.numberOfItems);
        }));
    };
    ListController.prototype.publishData = function (data) {
        this.componetsCommunicationService.publishData(JSON.parse(data.value), this.name);
    };
    ListController.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Input('name'),
        __metadata("design:type", String)
    ], ListController.prototype, "name", void 0);
    __decorate([
        Input('onLoad'),
        __metadata("design:type", Number)
    ], ListController.prototype, "onLoad", void 0);
    __decorate([
        Input('onLazyload'),
        __metadata("design:type", Number)
    ], ListController.prototype, "onLazyload", void 0);
    ListController = __decorate([
        Component({
            selector: 'list-controller-component',
            template: '',
        }),
        __metadata("design:paramtypes", [JoinsService, CommunicationService, ComponentsCommunicationService])
    ], ListController);
    return ListController;
}());
export { ListController };
//# sourceMappingURL=list-controller.js.map