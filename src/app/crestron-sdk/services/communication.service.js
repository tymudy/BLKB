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
import { LoggerService } from './log.service';
var CommunicationService = (function () {
    function CommunicationService(logger) {
        this.logger = logger;
        this.CJS = Crestron.UI.JoinService;
        this.sygnalType = {
            analog: 'analogListener',
            serial: 'serialListener',
            digital: 'digitalListener'
        };
    }
    CommunicationService.prototype.sendCodeAnalog = function (code, value) {
        this.logger.debug('Anlg Tx - ' + code + ' - ' + value);
        this.CJS.analogListener.updateCS(code, value);
    };
    CommunicationService.prototype.sendCodeDigital = function (code, value) {
        this.logger.debug('Dig Tx - ' + code + ' - ' + value);
        this.CJS.digitalListener.updateCS(code, value);
    };
    CommunicationService.prototype.sendCodeSerial = function (code, value) {
        this.logger.debug('Ser Tx - ' + code + ' - ' + value);
        this.CJS.serialListener.updateCS(code, value);
    };
    CommunicationService.prototype.subscribeCodeAnalog = function (code, cb) {
        var analog = this.sygnalType['Analog'];
        this.CJS[this.sygnalType.analog].subscribe(code, cb);
    };
    CommunicationService.prototype.subscribeCodeDigital = function (code, cb) {
        this.CJS[this.sygnalType.digital].subscribe(code, cb);
    };
    CommunicationService.prototype.subscribeCodeSerial = function (code, cb) {
        this.CJS[this.sygnalType.serial].subscribe(code, cb);
    };
    CommunicationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoggerService])
    ], CommunicationService);
    return CommunicationService;
}());
export { CommunicationService };
//# sourceMappingURL=communication.service.js.map