var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewEncapsulation } from '@angular/core';
var GalleryButtonComponent = (function () {
    function GalleryButtonComponent() {
    }
    GalleryButtonComponent.prototype.ngOnInit = function () {
        this.rectangleButton = '<div class=\"button_container\">\r\n        <h5>Rectangle Button<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonRectangle\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"rectangular\">\r\n' +
            '          <\/btn>\r\n          <btn-controller name=\"buttonRectangle\"\r\n                          ' +
            'onTap=\"80000\"\r\n                          onRelease=\"80001\"\r\n                          ' +
            'runClass=\"180\">\r\n          <\/btn-controller>\r\n        <\/div>\r\n      <\/div>';
        this.roundedRectangleButton = '  <div class=\"button_container\">\r\n        <h5>Rounded Rectangle Button<\/h5>' +
            '\r\n        <div class=\"crestron_button_container\">\r\n          <btn name=\"buttonRoundedRectangle\"\r\n' +
            '               label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               ' +
            'shape=\"rounded-rectangle\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.tabButton = '  <div class=\"button_container\">\r\n        <h5>Tab Button<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonTab\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"tab\">\r\n          ' +
            '<\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.circleButton = ' <div class=\"button_container\">\r\n        <h5>Circle Button<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonCircle\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"circle\">\r\n' +
            '          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.ovalButton = ' <div class=\"button_container\">\r\n        <h5>Oval Button<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonOval\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"oval\">\r\n          ' +
            '<\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.iconRightButton = '  <div class=\"button_container\">\r\n        <h5>Button with Icon<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonIconRight\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               icon=\"fa fa-plus\"\r\n' +
            '               icon_align=\"right\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.iconLeftButton = ' <div class=\"button_container\">\r\n        <h5>Button with Icon<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonIconLeft\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               icon=\"fa fa-plus\"\r\n' +
            '               icon_align=\"left\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.primaryButton = ' <div class=\"button_container\">\r\n        <h5>Primary Button Type<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonPrimary\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"rounded-rectangle\"' +
            '\r\n               type=\"primary\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.secondaryButton = ' <div class=\"button_container\">\r\n        <h5>Secondary Button Type<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonSecondary\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"rounded-rectangle\"\r\n' +
            '               type=\"secondary\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.infoButton = '<div class=\"button_container\">\r\n        <h5>Info Button Type<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonInfo\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"rounded-rectangle\"\r\n' +
            '               type=\"info\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.warningButton = ' <div class=\"button_container\">\r\n        <h5>Warning Button Type<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonWarning\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"rounded-rectangle\"\r\n' +
            '               type=\"warning\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.dangerButton = '<div class=\"button_container\">\r\n        <h5>Danger Button Type<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonDanger\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"rounded-rectangle\"\r\n' +
            '               type=\"danger\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.successButton = ' <div class=\"button_container\">\r\n        <h5>Success Button Type<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonSuccess\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"rounded-rectangle\"\r\n' +
            '               type=\"success\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.textButton = '<div class=\"button_container\">\r\n        <h5>Text Button Type<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonText\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               shape=\"rounded-rectangle\"\r\n' +
            '               type=\"text\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.verticalButton = '<div class=\"button_container\">\r\n        <h5>Vertical Button<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonVertical\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               icon=\"fa fa-minus\"\r\n' +
            '               orientation=\"vertical\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.xSmallButton = '<div class=\"button_container\">\r\n        <h5>X-Small Button<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonXSmall\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               icon=\"fa fa-plus\"\r\n' +
            '               size=\"x-small\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.smallButton = ' <div class=\"button_container\">\r\n        <h5>Small Button<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonSmall\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               icon=\"fa fa-plus\"\r\n' +
            '               size=\"small\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.largeButton = '<div class=\"button_container\">\r\n        <h5>Large Button<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonLarge\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               icon=\"fa fa-plus\"\r\n' +
            '               size=\"large\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.stretchWidthButton = '<div class=\"button_container\">\r\n        <h5>Stretch Button Width<\/h5>\r\n        ' +
            '<div class=\"crestron_button_container\">\r\n          <btn name=\"buttonStretchWidth\"\r\n               ' +
            'label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               icon=\"fa fa-plus\"\r\n' +
            '               stretch=\"width\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.stretchHeightButton = ' <div class=\"button_container\">\r\n        <h5>Stretch Button Height<\/h5>\r\n' +
            '        <div class=\"crestron_button_container\">\r\n          <btn name=\"buttonStretchHeight\"\r\n' +
            '               label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               ' +
            'icon=\"fa fa-plus\"\r\n               stretch=\"height\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
        this.stretchWidthHeightButton = ' <div class=\"button_container\">\r\n        <h5>Stretch Button Width and Height' +
            '<\/h5>\r\n        <div class=\"crestron_button_container\">\r\n          <btn name=\"buttonStretchBoth\"\r\n' +
            '               label=\"Button\"\r\n               class=\"common_btn_style\"\r\n               ' +
            'icon=\"fa fa-plus\"\r\n               stretch=\"both\">\r\n          <\/btn>\r\n        <\/div>\r\n      <\/div>';
    };
    return GalleryButtonComponent;
}());
GalleryButtonComponent = __decorate([
    Component({
        selector: 'gallery-button',
        templateUrl: './gallery-button.component.html',
        styleUrls: ['./gallery-button.component.css'],
        encapsulation: ViewEncapsulation.None
    })
], GalleryButtonComponent);
export { GalleryButtonComponent };
//# sourceMappingURL=gallery-button.component.js.map