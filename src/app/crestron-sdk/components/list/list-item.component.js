var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import * as component_type from '../../constants/component_type';
var ListItemComponent = (function () {
    function ListItemComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ListItemComponent.prototype.ngOnInit = function () {
        this.createItem(component_type.types[this.type], this.item);
    };
    ListItemComponent.prototype.createItem = function (component, attributes) {
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(component);
        var componentRef = this.itemContainer.createComponent(childComponent);
        attributes.forEach(function (element, index) {
            componentRef.instance[element['key']] = element['value'];
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ListItemComponent.prototype, "item", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ListItemComponent.prototype, "type", void 0);
    __decorate([
        ViewChild('itemContainer', { read: ViewContainerRef }),
        __metadata("design:type", ViewContainerRef)
    ], ListItemComponent.prototype, "itemContainer", void 0);
    ListItemComponent = __decorate([
        Component({
            selector: 'list-item-component',
            template: "\n    <div #itemContainer></div>\n  "
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver])
    ], ListItemComponent);
    return ListItemComponent;
}());
export { ListItemComponent };
//# sourceMappingURL=list-item.component.js.map