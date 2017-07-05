var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';
import { LoggerService } from './log.service';
import { Subject } from 'rxjs/Subject';
var JoinsService = (function () {
    function JoinsService(communicationService, loggerService) {
        this.communicationService = communicationService;
        this.loggerService = loggerService;
        this.joins = {
            analog: {},
            serial: {},
            digital: {}
        };
        this.joinSubject = {
            analog: {},
            serial: {},
            digital: {}
        };
    }
    JoinsService.prototype.getDigitalSubscribe = function (id, cache) {
        return this.subscribeSignalDigital(id).asObservable();
    };
    JoinsService.prototype.getAnalogSubscribe = function (id, cache) {
        return this.subscribeSignalAnalog(id).asObservable();
    };
    JoinsService.prototype.getSerialSubscribe = function (id, cache) {
        return this.subscribeSignalSerial(id).asObservable();
    };
    JoinsService.prototype.subscribeSignalDigital = function (id) {
        var me = this;
        if (!me.joins.digital[id]) {
            me.joinSubject.digital[id] = new Subject();
            this.communicationService.subscribeCodeDigital(id, function (id, value) {
                me.joins.digital[id] = Object.assign({}, { id: id, value: value });
                me.joinSubject.digital[id].next(me.joins.digital[id]);
                me.loggerService.debug('Dig Com Rx - ' + id + ' - ' + value);
            });
        }
        return me.joinSubject.digital[id];
    };
    JoinsService.prototype.subscribeSignalAnalog = function (id) {
        var me = this;
        if (!me.joins.analog[id]) {
            me.joinSubject.analog[id] = new Subject();
            this.communicationService.subscribeCodeAnalog(id, function (id, value) {
                me.joins.analog[id] = Object.assign({}, { id: id, value: value });
                me.joinSubject.analog[id].next(me.joins.analog[id]);
                me.loggerService.debug('Anlg Com Rx - ' + id + ' - ' + value);
            });
        }
        return me.joinSubject.analog[id];
    };
    JoinsService.prototype.subscribeSignalSerial = function (id) {
        var me = this;
        if (!me.joins.serial[id]) {
            me.joinSubject.serial[id] = new Subject();
            this.communicationService.subscribeCodeSerial(id, function (id, value) {
                me.joins.serial[id] = Object.assign({}, { id: id, value: value });
                me.joinSubject.serial[id].next(me.joins.serial[id]);
                me.loggerService.debug('Ser Com Rx - ' + id + ' - ' + value);
            });
        }
        return me.joinSubject.serial[id];
    };
    return JoinsService;
}());
JoinsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CommunicationService, LoggerService])
], JoinsService);
export { JoinsService };
//# sourceMappingURL=joins.service.js.map