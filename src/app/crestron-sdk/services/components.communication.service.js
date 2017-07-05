var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var ComponentsCommunicationService = (function () {
    function ComponentsCommunicationService() {
        this.componentsSubject = {};
        this.controllersSubject = {};
    }
    ComponentsCommunicationService.prototype.getComponentSubscribe = function (id) {
        return this.getComponentSubject(id).asObservable();
    };
    ComponentsCommunicationService.prototype.getControllerSubscribe = function (id) {
        return this.getControllerSubject(id).asObservable();
    };
    ComponentsCommunicationService.prototype.getComponentSubject = function (id) {
        if (!this.componentsSubject[id]) {
            this.componentsSubject[id] = new Subject();
        }
        return this.componentsSubject[id];
    };
    ComponentsCommunicationService.prototype.getControllerSubject = function (id) {
        if (!this.controllersSubject[id]) {
            this.controllersSubject[id] = new Subject();
        }
        return this.controllersSubject[id];
    };
    ComponentsCommunicationService.prototype.publishData = function (data, id) {
        this.getComponentSubject(id).next(data);
    };
    ComponentsCommunicationService.prototype.createDataRequest = function (id) {
        this.getControllerSubject(id).next(true);
    };
    ComponentsCommunicationService = __decorate([
        Injectable()
    ], ComponentsCommunicationService);
    return ComponentsCommunicationService;
}());
export { ComponentsCommunicationService };
//# sourceMappingURL=components.communication.service.js.map