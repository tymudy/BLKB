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
import { Http } from '@angular/http';
import { ShareService } from '../../services/share/shareService';
import { ComponentsCommunicationService } from '../../services/components.communication.service';
import { Subscription } from 'rxjs';
var ListComponent = (function () {
    function ListComponent(http, shareService, componentsCommunicationService) {
        this.http = http;
        this.shareService = shareService;
        this.componentsCommunicationService = componentsCommunicationService;
        this.listAttributes = [];
        this.listItems = [];
        this.subscription = new Subscription();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.setBufferSize();
        this.getListData();
    };
    ListComponent.prototype.getListData = function () {
        var _this = this;
        this.subscription.add(this.componentsCommunicationService.getComponentSubscribe(this.name).subscribe(function (data) {
            if (data.attributes.length > 0) {
                _this.listItems = _this.listItems.concat(data.attributes);
                _this.listType = data.type;
                _this.listAttributes = _this.getAttributesData();
            }
        }));
    };
    ListComponent.prototype.getAttributesData = function () {
        if (this.load_type === 'none') {
            return this.listItems;
        }
        return this.listItems.slice(this.listAttributes.length, this.listAttributes.length + this.bufferSize);
    };
    ListComponent.prototype.setBufferSize = function () {
        if (!this.load_type) {
            this.load_type = 'none';
            this.bufferSize = this.listItems.length;
        }
        else if (this.load_type.match(/^paged$/) != null) {
            this.bufferSize = this.page_size;
        }
        else if (this.load_type.match(/^scroll$/) != null) {
            this.bufferSize = 12;
        }
    };
    ListComponent.prototype.fetchMore = function (event) {
        this.indices = event;
        if (event.end === this.listAttributes.length) {
            if (this.listAttributes.length < this.listItems.length) {
                this.listAttributes = this.listAttributes.concat(this.getAttributesData());
            }
            else {
                this.componentsCommunicationService.createDataRequest(this.name);
            }
        }
    };
    ListComponent.prototype.ngOnChanges = function (changes) {
        this.reset();
    };
    ListComponent.prototype.reset = function () {
        this.listAttributes = this.listItems.slice(0, this.bufferSize);
    };
    ListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Input('name'),
        __metadata("design:type", String)
    ], ListComponent.prototype, "name", void 0);
    __decorate([
        Input('load_type'),
        __metadata("design:type", String)
    ], ListComponent.prototype, "load_type", void 0);
    __decorate([
        Input('page_size'),
        __metadata("design:type", Number)
    ], ListComponent.prototype, "page_size", void 0);
    __decorate([
        Input('loading_indicator'),
        __metadata("design:type", Boolean)
    ], ListComponent.prototype, "loading_indicator", void 0);
    __decorate([
        Input('min_width'),
        __metadata("design:type", Number)
    ], ListComponent.prototype, "min_width", void 0);
    __decorate([
        Input('min_height'),
        __metadata("design:type", Number)
    ], ListComponent.prototype, "min_height", void 0);
    __decorate([
        Input('max_height'),
        __metadata("design:type", Number)
    ], ListComponent.prototype, "max_height", void 0);
    __decorate([
        Input('max_width'),
        __metadata("design:type", Number)
    ], ListComponent.prototype, "max_width", void 0);
    __decorate([
        Input('header'),
        __metadata("design:type", String)
    ], ListComponent.prototype, "header", void 0);
    __decorate([
        Input('footer'),
        __metadata("design:type", String)
    ], ListComponent.prototype, "footer", void 0);
    ListComponent = __decorate([
        Component({
            selector: 'list-component',
            templateUrl: './list.component.html',
            styleUrls: ['list.component.css']
        }),
        __metadata("design:paramtypes", [Http, ShareService, ComponentsCommunicationService])
    ], ListComponent);
    return ListComponent;
}());
export { ListComponent };
//# sourceMappingURL=list.component.js.map