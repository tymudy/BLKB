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
var SliderComponent = (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
        this.setPropertiesValueIfUndefined();
        this.uniqueID = this.name + Date.now();
        this.setTick();
        this.setSliderSizeIfStretchIsDefined();
        this.setIconsIfUndefined();
        this.setIconRotation();
        this.setMinMaxValues();
        this.setInputValues();
        this.setDefaultState();
        this.setTick();
        if (this.onSlide) {
            this.printActionId(this.onSlide);
        }
        if (this.onSlideEnd) {
            this.printActionId(this.onSlideEnd);
        }
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        this.input = document.getElementById(this.uniqueID);
        this.ghost = document.getElementById(this.uniqueID + "_ghost");
        this.initializeRangeIfRangeIsRequired();
    };
    SliderComponent.prototype.setPropertiesValueIfUndefined = function () {
        if (!this.name) {
            this.name = '';
        }
        if (!this.customClass) {
            this.customClass = '';
        }
        if (!this.orientation) {
            this.orientation = '';
        }
        if (!this.step) {
            this.step = 1;
        }
        if (!this.handleShape) {
            this.handleShape = 'circle';
        }
        if (!this.isRange) {
            this.isRange = false;
            this.singleRange = "singlerange";
        }
        if (!this.default_state) {
            this.default_state = 'enabled';
        }
    };
    SliderComponent.prototype.setSliderSizeIfStretchIsDefined = function () {
        if (this.stretch) {
            this.size = 'size-small';
            this.stretch = 'stretch_' + this.stretch;
        }
        else {
            this.stretch = '';
            if (!this.size) {
                this.size = 'size-small';
            }
        }
    };
    SliderComponent.prototype.setIconRotation = function () {
        if (this.orientation.match(/^vertical$/) != null) {
            this.rotate_icon = 'rotate';
        }
    };
    SliderComponent.prototype.setIconsIfUndefined = function () {
        if (this.minIcon && this.maxIcon) {
            this.icon_display_left = 'left';
            this.icon_display_right = 'right';
            this.slider_display = 'range';
            return;
        }
        if (!this.minIcon && !this.maxIcon) {
            this.icon_display_left = 'display_none';
            this.icon_display_right = 'display_none';
            this.slider_display = 'default';
        }
        else {
            if (this.minIcon && !this.maxIcon) {
                this.icon_display_left = 'left';
                this.icon_display_right = 'display_none';
                this.slider_display = 'right';
            }
            else {
                if (this.maxIcon && !this.minIcon) {
                    this.icon_display_right = 'right';
                    this.icon_display_left = 'display_none';
                    this.slider_display = 'left';
                }
            }
        }
    };
    SliderComponent.prototype.setDefaultState = function () {
        if ((this.default_state.match(/^enabled$/) == null) &&
            (this.default_state.match(/^disabled$/) == null)) {
            this.default_state = 'enabled';
        }
    };
    SliderComponent.prototype.setTick = function () {
        this.gradiant = [];
        if (!this.tick) {
            this.tick = 0;
            this.isTick = false;
        }
        else {
            this.isTick = true;
            this.populateGradiant();
        }
    };
    SliderComponent.prototype.populateGradiant = function () {
        var g = this.min;
        while (g < this.max) {
            this.gradiant.push(g);
            g += this.tick;
        }
        // this.gradiant.pop();
        // this.gradiant.pop();
    };
    SliderComponent.prototype.setInputValues = function () {
        if (this.isRange) {
            if (!this.initValuePair) {
                this.initValuePair = this.min + " " + this.max;
            }
        }
        else {
            if (!this.initValue || this.initValue < this.min) {
                this.initValue = this.min;
            }
        }
    };
    SliderComponent.prototype.setMinMaxValues = function () {
        if (this.min && this.max) {
            return;
        }
        if (!this.min && !this.max) {
            this.min = 0;
            this.max = 100;
        }
        else {
            if (this.min) {
                this.max = this.min + 100;
            }
            else {
                if (this.max) {
                    this.min = 0;
                }
            }
        }
    };
    SliderComponent.prototype.initializeRangeIfRangeIsRequired = function () {
        if (this.isRange) {
            this.multirange();
            this.updateRange();
        }
        else {
            this.updateSingleRange();
        }
    };
    SliderComponent.prototype.multirange = function () {
        var values = this.initValuePair.split(" ");
        this.input.classList.add("multirange", "original");
        this.ghost.classList.add("multirange", "ghost");
        this.input.setAttribute("value", values[0] || (this.min + (this.max - this.min) / 2).toString());
        this.ghost.setAttribute("value", values[1] || (this.min + (this.max - this.min) / 2).toString());
        this.input.parentNode.insertBefore(this.ghost, this.input.nextSibling);
    };
    SliderComponent.prototype.updateRange = function () {
        var v1 = document.getElementById(this.uniqueID).value;
        var v2 = document.getElementById(this.uniqueID + "_ghost").value;
        this.valueLow = Math.min(Number(v1), Number(v2));
        this.valueHigh = Math.max(Number(v1), Number(v2));
        this.ghost.style.setProperty("--low", (100 * ((Number(this.valueLow) - this.min) / (this.max - this.min)) + 1).toString() + "%");
        this.ghost.style.setProperty("--high", (100 * ((Number(this.valueHigh) - this.min) / (this.max - this.min)) - 1).toString() + "%");
    };
    SliderComponent.prototype.updateSingleRange = function () {
        var v = document.getElementById(this.uniqueID).value;
        this.singleValue = Number(v);
        this.input.style.setProperty("--handle", (100 * ((Number(this.singleValue) - this.min) / (this.max - this.min)) + 1).toString() + "%");
    };
    SliderComponent.prototype.update = function () {
        if (this.isRange) {
            this.updateRange();
        }
        else {
            this.updateSingleRange();
        }
    };
    SliderComponent.prototype.printActionId = function (id) {
        console.log(id);
    };
    return SliderComponent;
}());
__decorate([
    Input('name'),
    __metadata("design:type", String)
], SliderComponent.prototype, "name", void 0);
__decorate([
    Input('customClass'),
    __metadata("design:type", String)
], SliderComponent.prototype, "customClass", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "min", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "max", void 0);
__decorate([
    Input('isRange'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "isRange", void 0);
__decorate([
    Input('orientation'),
    __metadata("design:type", String)
], SliderComponent.prototype, "orientation", void 0);
__decorate([
    Input('minIcon'),
    __metadata("design:type", String)
], SliderComponent.prototype, "minIcon", void 0);
__decorate([
    Input('maxIcon'),
    __metadata("design:type", String)
], SliderComponent.prototype, "maxIcon", void 0);
__decorate([
    Input('step'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "step", void 0);
__decorate([
    Input('tick'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "tick", void 0);
__decorate([
    Input('handleShape'),
    __metadata("design:type", String)
], SliderComponent.prototype, "handleShape", void 0);
__decorate([
    Input('default_state'),
    __metadata("design:type", String)
], SliderComponent.prototype, "default_state", void 0);
__decorate([
    Input('size'),
    __metadata("design:type", String)
], SliderComponent.prototype, "size", void 0);
__decorate([
    Input('stretch'),
    __metadata("design:type", String)
], SliderComponent.prototype, "stretch", void 0);
__decorate([
    Input('initValue'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "initValue", void 0);
__decorate([
    Input('initValuePair'),
    __metadata("design:type", String)
], SliderComponent.prototype, "initValuePair", void 0);
__decorate([
    Input('onSlide'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "onSlide", void 0);
__decorate([
    Input('onSlideEnd'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "onSlideEnd", void 0);
SliderComponent = __decorate([
    Component({
        selector: 'slider',
        templateUrl: './slider.component.html',
        styleUrls: [
            './slider.component.css',
            './slider-range.component.css'
        ]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);
export { SliderComponent };
//# sourceMappingURL=slider.component.js.map