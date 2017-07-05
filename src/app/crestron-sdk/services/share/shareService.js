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
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
var ShareService = (function () {
    function ShareService(http) {
        this.http = http;
    }
    ShareService.prototype.getData = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    return ShareService;
}());
ShareService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ShareService);
export { ShareService };
//# sourceMappingURL=shareService.js.map