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
import { JoinsService } from '../services/joins.service';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from "rxjs";
var ListController = (function () {
    function ListController(joinsService, communicationService) {
        this.joinsService = joinsService;
        this.communicationService = communicationService;
        this.subscription = new Subscription();
    }
    ListController.prototype.ngOnInit = function () {
        var me = this;
        setTimeout(function () {
            me.subscription.add(me.joinsService.getDigitalSubscribe(194, false).subscribe(function (data) {
                console.log('yess', data);
            }));
            me.communicationService.sendCodeDigital(111, 1);
            setTimeout(function () {
                me.communicationService.sendCodeDigital(115, 1);
                me.subscription.add(me.joinsService.getDigitalSubscribe(180, false).subscribe(function (data) {
                    console.log('115-180', data);
                }));
            }, 50);
        }, 100);
    };
    ListController.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ListController;
}());
ListController = __decorate([
    Component({
        selector: 'list-controller-component',
        template: '<span>list</span>',
    }),
    __metadata("design:paramtypes", [JoinsService, CommunicationService])
], ListController);
export { ListController };
//# sourceMappingURL=list-controller.js.map