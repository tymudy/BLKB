/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './slider.component.css.shim.ngstyle';
import * as i1 from './slider-range.component.css.shim.ngstyle';
import * as i2 from '@angular/core';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../app/crestron-sdk/components/slider/slider.component';
var styles_SliderComponent = [i0.styles, i1.styles];
export var RenderType_SliderComponent = i2.ɵcrt({ encapsulation: 0,
    styles: styles_SliderComponent, data: {} });
function View_SliderComponent_2(_l) {
    return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, null, null, 1, 'td', [['class',
                'text-center']], null, null, null, null, null)),
        (_l()(), i2.ɵeld(0, null, null, 0, 'i', [['class', 'fa fa-circle']], null, null, null, null, null))], null, null);
}
function View_SliderComponent_1(_l) {
    return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, null, null, 6, 'table', [['class',
                'tickmarks']], null, null, null, null, null)),
        (_l()(), i2.ɵted(null, ['\n      '])), (_l()(), i2.ɵeld(0, null, null, 4, 'tbody', [], null, null, null, null, null)), (_l()(), i2.ɵeld(0, null, null, 2, 'tr', [], null, null, null, null, null)), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_SliderComponent_2)), i2.ɵdid(802816, null, 0, i3.NgForOf, [i2.ViewContainerRef,
            i2.TemplateRef, i2.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null),
        (_l()(), i2.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.gradiant;
        _ck(_v, 5, 0, currVal_0);
    }, null);
}
function View_SliderComponent_3(_l) {
    return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, null, null, 0, 'input', [['type',
                'range']], [[8, 'id', 0], [8, 'className', 0], [1, 'valuePair', 0], [8, 'min', 0], [8, 'max',
                0], [8, 'step', 0], [1, 'valueLow', 0], [1, 'valueHigh', 0]], [[null, 'attr.valueLowChange'],
            [null, 'attr.valueHighChange'], [null, 'input']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('attr.valueLowChange' === en)) {
                var pd_0 = ((_co.valueLow = $event) !== false);
                ad = (pd_0 && ad);
            }
            if (('attr.valueHighChange' === en)) {
                var pd_1 = ((_co.valueHigh = $event) !== false);
                ad = (pd_1 && ad);
            }
            if (('input' === en)) {
                var pd_2 = (_co.update() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i2.ɵinlineInterpolate(1, '', _co.uniqueID, '_ghost');
        var currVal_1 = i2.ɵinlineInterpolate(1, 'common ', _co.handleShape, '');
        var currVal_2 = i2.ɵinlineInterpolate(1, '', _co.initValuePair, '');
        var currVal_3 = i2.ɵinlineInterpolate(1, '', _co.min, '');
        var currVal_4 = i2.ɵinlineInterpolate(1, '', _co.max, '');
        var currVal_5 = i2.ɵinlineInterpolate(1, '', _co.step, '');
        var currVal_6 = _co.valueLow;
        var currVal_7 = _co.valueHigh;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
export function View_SliderComponent_0(_l) {
    return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, null, null, 28, 'div', [], [[8, 'id', 0], [8, 'className', 0]], null, null, null, null)),
        (_l()(), i2.ɵted(null, ['\n  '])), (_l()(), i2.ɵeld(0, null, null, 6, 'div', [], [[8, 'className', 0]], null, null, null, null)), (_l()(), i2.ɵted(null, ['\n    '])), (_l()(), i2.ɵeld(0, null, null, 3, 'div', [['class', 'btn_addon_left']], null, null, null, null, null)), (_l()(), i2.ɵted(null, ['\n      '])), (_l()(), i2.ɵeld(0, null, null, 0, 'i', [], [[8, 'className', 0]], null, null, null, null)),
        (_l()(), i2.ɵted(null, ['\n    '])), (_l()(), i2.ɵted(null, ['\n  '])),
        (_l()(), i2.ɵted(null, ['\n\n  '])), (_l()(), i2.ɵeld(0, null, null, 9, 'div', [], [[8, 'className', 0]], null, null, null, null)), (_l()(), i2.ɵted(null, ['\n    '])), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_SliderComponent_1)), i2.ɵdid(16384, null, 0, i3.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i2.ɵted(null, ['\n    '])), (_l()(), i2.ɵeld(0, null, null, 0, 'input', [['type', 'range']], [[8, 'id', 0], [8,
                'className', 0], [1, 'valuePair', 0], [8, 'min', 0], [8, 'max', 0], [8, 'step', 0],
            [1, 'valueLow', 0], [1, 'valueHigh', 0]], [[null, 'attr.valueLowChange'],
            [null, 'attr.valueHighChange'], [null, 'input']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('attr.valueLowChange' === en)) {
                var pd_0 = ((_co.valueLow = $event) !== false);
                ad = (pd_0 && ad);
            }
            if (('attr.valueHighChange' === en)) {
                var pd_1 = ((_co.valueHigh = $event) !== false);
                ad = (pd_1 && ad);
            }
            if (('input' === en)) {
                var pd_2 = (_co.update() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i2.ɵted(null, ['\n    '])),
        (_l()(), i2.ɵand(16777216, null, null, 1, null, View_SliderComponent_3)),
        i2.ɵdid(16384, null, 0, i3.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i2.ɵted(null, ['\n  '])), (_l()(),
            i2.ɵted(null, ['\n\n  '])), (_l()(), i2.ɵeld(0, null, null, 6, 'div', [], [[8, 'className', 0]], null, null, null, null)), (_l()(), i2.ɵted(null, ['\n    '])), (_l()(), i2.ɵeld(0, null, null, 3, 'div', [['class', 'btn_addon_right']], null, null, null, null, null)), (_l()(), i2.ɵted(null, ['\n      '])), (_l()(), i2.ɵeld(0, null, null, 0, 'i', [], [[8, 'className', 0]], null, null, null, null)),
        (_l()(), i2.ɵted(null, ['\n    '])), (_l()(), i2.ɵted(null, ['\n  '])),
        (_l()(), i2.ɵted(null, ['\n'])), (_l()(), i2.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_5 = _co.isTick;
        _ck(_v, 13, 0, currVal_5);
        var currVal_14 = _co.isRange;
        _ck(_v, 18, 0, currVal_14);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i2.ɵinlineInterpolate(1, '', _co.name, '');
        var currVal_1 = i2.ɵinlineInterpolate(4, 'slider_default ', _co.customClass, ' ', _co.stretch, ' ', _co.orientation, ' ', _co.size, '');
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_2 = i2.ɵinlineInterpolate(1, 'custom_addon_', _co.icon_display_left, '');
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = i2.ɵinlineInterpolate(2, ' custom_icon_color ', _co.minIcon, ' ', _co.rotate_icon, '');
        _ck(_v, 6, 0, currVal_3);
        var currVal_4 = i2.ɵinlineInterpolate(1, 'custom_', _co.slider_display, '');
        _ck(_v, 10, 0, currVal_4);
        var currVal_6 = i2.ɵinlineInterpolate(1, '', _co.uniqueID, '');
        var currVal_7 = i2.ɵinlineInterpolate(2, 'common ', _co.handleShape, ' ', _co.singleRange, '');
        var currVal_8 = i2.ɵinlineInterpolate(1, '', _co.initValuePair, '');
        var currVal_9 = i2.ɵinlineInterpolate(1, '', _co.min, '');
        var currVal_10 = i2.ɵinlineInterpolate(1, '', _co.max, '');
        var currVal_11 = i2.ɵinlineInterpolate(1, '', _co.step, '');
        var currVal_12 = _co.valueLow;
        var currVal_13 = _co.valueHigh;
        _ck(_v, 15, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        var currVal_15 = i2.ɵinlineInterpolate(1, 'custom_addon_', _co.icon_display_right, '');
        _ck(_v, 21, 0, currVal_15);
        var currVal_16 = i2.ɵinlineInterpolate(2, 'custom_icon_color ', _co.maxIcon, ' ', _co.rotate_icon, '');
        _ck(_v, 25, 0, currVal_16);
    });
}
export function View_SliderComponent_Host_0(_l) {
    return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, null, null, 1, 'slider', [], null, null, null, View_SliderComponent_0, RenderType_SliderComponent)),
        i2.ɵdid(4308992, null, 0, i4.SliderComponent, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var SliderComponentNgFactory = i2.ɵccf('slider', i4.SliderComponent, View_SliderComponent_Host_0, { name: 'name', customClass: 'customClass',
    min: 'min', max: 'max', isRange: 'isRange', orientation: 'orientation', minIcon: 'minIcon',
    maxIcon: 'maxIcon', step: 'step', tick: 'tick', handleShape: 'handleShape', default_state: 'default_state',
    size: 'size', stretch: 'stretch', initValue: 'initValue', initValuePair: 'initValuePair',
    onSlide: 'onSlide', onSlideEnd: 'onSlideEnd' }, {}, []);
//# sourceMappingURL=slider.component.ngfactory.js.map