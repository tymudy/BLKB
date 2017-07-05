var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.setPropertiesValueIfUndefined();
        this.setIconAndLabelAlignPosition();
        this.setIconRotation();
        this.setButtonSize();
    };
    ButtonComponent.prototype.setPropertiesValueIfUndefined = function () {
        if (!this.name) {
            this.name = '';
        }
        if (!this.customClass) {
            this.customClass = '';
        }
        if (!this.orientation) {
            this.orientation = '';
        }
        if (!this.label) {
            this.label = 'Button';
        }
        if (!this.icon_align) {
            this.icon_align = 'right';
        }
        if (!this.shape) {
            this.shape = 'rounded-rectangle';
        }
        if (!this.type) {
            this.type = '';
        }
    };
    ButtonComponent.prototype.setIconAndLabelAlignPosition = function () {
        if (this.icon) {
            if ((this.icon_align.match(/^right$/) == null) &&
                (this.icon_align.match(/^left$/) == null)) {
                this.isDisplayIconRight = true;
                this.isDisplayIconLeft = false;
            }
            else {
                if (this.icon_align.indexOf('right') >= 0) {
                    this.isDisplayIconRight = true;
                    this.isDisplayIconLeft = false;
                }
                else if (this.icon_align.indexOf('left') >= 0) {
                    this.isDisplayIconLeft = true;
                    this.isDisplayIconRight = false;
                }
            }
        }
    };
    ButtonComponent.prototype.setIconRotation = function () {
        if (this.orientation.match(/^vertical$/) != null) {
            this.rotate_icon = 'rotate';
        }
    };
    //if stretch and size are set, size will be deprecated
    //if stretch is set, it will be deprecated for circle and oval shapes
    ButtonComponent.prototype.setButtonSize = function () {
        if (this.stretch) {
            if ((this.shape.match(/^circle$/) != null) &&
                (this.shape.match(/^oval$/) != null)) {
                this.stretch = '';
            }
            else {
                this.size = '';
                this.stretch = "stretch_" + this.stretch;
            }
        }
        else {
            switch (this.size) {
                case "x-small": {
                    this.size = "btn-xs";
                    break;
                }
                case "small": {
                    this.size = "btn-sm";
                    break;
                }
                case "regular": {
                    this.size = "btn-sm";
                    break;
                }
                case "large" || "x-large": {
                    this.size = "btn-lg";
                    break;
                }
                default: this.size = '';
            }
            this.stretch = '';
        }
    };
    __decorate([
        Input('name'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "name", void 0);
    __decorate([
        Input('customClass'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "customClass", void 0);
    __decorate([
        Input('label'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        Input('icon'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "icon", void 0);
    __decorate([
        Input('icon_align'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "icon_align", void 0);
    __decorate([
        Input('shape'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "shape", void 0);
    __decorate([
        Input('type'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        Input('size'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "size", void 0);
    __decorate([
        Input('stretch'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "stretch", void 0);
    __decorate([
        Input('orientation'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "orientation", void 0);
    ButtonComponent = __decorate([
        Component({
            selector: 'btn',
            templateUrl: './button.component.html',
            styleUrls: ['./button.component.css'],
            encapsulation: ViewEncapsulation.None
        })
    ], ButtonComponent);
    return ButtonComponent;
}());
export { ButtonComponent };
//# sourceMappingURL=button.component.js.map