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
var ButtonController = (function () {
    function ButtonController(joinsService, communicationService) {
        this.joinsService = joinsService;
        this.communicationService = communicationService;
        this.subscription = new Subscription();
        this.lastRunClass = '';
        this.checkEvent = false;
    }
    ButtonController.prototype.ngOnInit = function () {
        this.el = document.getElementsByName(this.name);
        if (this.el) {
            this.addListeners();
        }
    };
    ButtonController.prototype.addListeners = function () {
        var me = this;
        if (this.onPress) {
            this.el[0].addEventListener("click", this.sendOnPress.bind(this));
        }
        if (this.onTap) {
            this.el[0].addEventListener("touchstart", function () {
                me.checkEvent = true;
                me.sendOnTap();
            });
            this.el[0].addEventListener("mousedown", function () {
                if (!me.checkEvent) {
                    me.sendOnTap();
                }
            });
        }
        if (this.onRelease) {
            this.el[0].addEventListener("touchend", function () {
                me.checkEvent = true;
                me.sendOnRelease();
            });
            this.el[0].addEventListener("mouseup", function () {
                if (!me.checkEvent) {
                    me.sendOnRelease();
                }
            });
        }
        if (this.onFocus) {
            this.el[0].addEventListener("mouseenter", this.sendOnFocus.bind(this));
        }
        if (this.onBlur) {
            this.el[0].addEventListener("mouseleave", this.sendOnBlur.bind(this));
        }
        if (this.runClass) {
            this.subscription = this.joinsService.getSerialSubscribe(this.runClass, false).subscribe(this.onReceived.bind(this));
        }
        if (this.runPressed) {
            this.subscription = this.joinsService.getSerialSubscribe(this.runPressed, false).subscribe(this.onReceived.bind(this));
        }
        if (this.runShow) {
            if (this.runShow === "true") {
                this.subscription = this.joinsService.getSerialSubscribe(1, false).subscribe(this.onReceived.bind(this));
            }
            else {
                this.subscription = this.joinsService.getSerialSubscribe(0, false).subscribe(this.onReceived.bind(this));
            }
        }
        if (this.runFocused) {
            this.subscription = this.joinsService.getSerialSubscribe(this.runFocused, false).subscribe(this.onReceived.bind(this));
        }
    };
    ButtonController.prototype.onReceived = function (data) {
        if (this.lastRunClass) {
            this.el[0].classList.remove(this.lastRunClass);
        }
        this.el[0].classList.add(data.value);
        this.lastRunClass = data.value;
    };
    ButtonController.prototype.sendOnPress = function () {
        console.log('onPress');
        this.communicationService.sendCodeDigital(this.onPress, 1);
    };
    ButtonController.prototype.sendOnTap = function () {
        console.log('onTap');
        this.communicationService.sendCodeDigital(this.onTap, 1);
    };
    ButtonController.prototype.sendOnRelease = function () {
        console.log('onRelease');
        this.communicationService.sendCodeDigital(this.onRelease, 0);
    };
    ButtonController.prototype.sendOnFocus = function () {
        console.log('onFocus');
        this.communicationService.sendCodeDigital(this.onFocus, 1);
    };
    ButtonController.prototype.sendOnBlur = function () {
        console.log('onBlur');
        this.communicationService.sendCodeDigital(this.onBlur, 0);
    };
    ButtonController.prototype.ngOnDestroy = function () {
        /* this.el[0].removeEventListener ("click");
         this.el[0].removeEventListener ("touchstart");
         this.el[0].removeEventListener ("mousedown");
         this.el[0].removeEventListener ("touchend");
         this.el[0].removeEventListener ("mouseup");
         this.el[0].removeEventListener ("mouseenter");
         this.el[0].removeEventListener ("mouseleave");*/
        this.subscription.unsubscribe();
    };
    __decorate([
        Input('name'),
        __metadata("design:type", String)
    ], ButtonController.prototype, "name", void 0);
    __decorate([
        Input('onPress'),
        __metadata("design:type", Number)
    ], ButtonController.prototype, "onPress", void 0);
    __decorate([
        Input('onTap'),
        __metadata("design:type", Number)
    ], ButtonController.prototype, "onTap", void 0);
    __decorate([
        Input('onRelease'),
        __metadata("design:type", Number)
    ], ButtonController.prototype, "onRelease", void 0);
    __decorate([
        Input('onFocus'),
        __metadata("design:type", Number)
    ], ButtonController.prototype, "onFocus", void 0);
    __decorate([
        Input('onBlur'),
        __metadata("design:type", Number)
    ], ButtonController.prototype, "onBlur", void 0);
    __decorate([
        Input('runClass'),
        __metadata("design:type", Number)
    ], ButtonController.prototype, "runClass", void 0);
    __decorate([
        Input('runFocused'),
        __metadata("design:type", Number)
    ], ButtonController.prototype, "runFocused", void 0);
    __decorate([
        Input('runPressed'),
        __metadata("design:type", Number)
    ], ButtonController.prototype, "runPressed", void 0);
    __decorate([
        Input('runShow'),
        __metadata("design:type", String)
    ], ButtonController.prototype, "runShow", void 0);
    ButtonController = __decorate([
        Component({
            selector: 'btn-controller',
            template: ''
        }),
        __metadata("design:paramtypes", [JoinsService, CommunicationService])
    ], ButtonController);
    return ButtonController;
}());
export { ButtonController };
//# sourceMappingURL=button-controller.js.map