var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTES } from './route/routes';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryButtonComponent } from './gallery/gallery-button/gallery-button.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';
import { GallerySliderComponent } from './gallery/gallery-slider/gallery-slider.component';
import { GallerySpecComponent } from './gallery/gallery-spec/spec-list.component';
import { enableProdMode } from '@angular/core';
enableProdMode();
import { ClipboardModule } from 'ngx-clipboard';
import { CrestronSdkModule } from './crestron-sdk/crestron-sdk.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            GalleryComponent,
            GalleryButtonComponent,
            GalleryListComponent,
            GallerySliderComponent,
            GallerySpecComponent,
        ],
        imports: [
            CrestronSdkModule,
            ClipboardModule,
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(ROUTES, { useHash: true })
        ],
        schemas: [NO_ERRORS_SCHEMA],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map