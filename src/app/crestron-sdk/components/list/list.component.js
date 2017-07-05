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
var ListComponent = (function () {
    function ListComponent(http, shareService) {
        this.http = http;
        this.shareService = shareService;
        this.firstListAttributes = [];
        this.secondListAttributes = [];
        this.firstListItems = [];
        this.bufferSize = 12;
    }
    ListComponent.prototype.getItemsForTheFirstScrollableList = function () {
        var _this = this;
        this.shareService.getData('assets/slider_list.json').subscribe(function (data) {
            _this.firstListItems = data.attributes;
            _this.firstListType = data.type;
            _this.firstListAttributes = _this.firstListItems.slice(0, _this.bufferSize);
        });
    };
    ListComponent.prototype.getItemsForTheSecondScrollableList = function () {
        var _this = this;
        this.shareService.getData('assets/slider_button_list.json').subscribe(function (data) {
            _this.secondListAttributes = data.items;
        });
    };
    ListComponent.prototype.fetchMore = function (event) {
        this.indices = event;
        if (event.end === this.firstListAttributes.length) {
            if (this.firstListAttributes.length < this.firstListItems.length) {
                this.firstListAttributes = this.firstListAttributes.concat(this.firstListItems.slice(this.firstListAttributes.length, this.firstListAttributes.length + this.bufferSize));
            }
        }
    };
    ListComponent.prototype.ngOnChanges = function (changes) {
        this.reset();
    };
    ListComponent.prototype.reset = function () {
        this.firstListAttributes = this.firstListItems.slice(0, this.bufferSize);
    };
    ListComponent.prototype.ngOnInit = function () {
        this.getItemsForTheFirstScrollableList();
        this.getItemsForTheSecondScrollableList();
    };
    return ListComponent;
}());
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
    __metadata("design:paramtypes", [Http, ShareService])
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map