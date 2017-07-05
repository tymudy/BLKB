var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { VirtualScrollModule } from './components/virtual-scroll';
import { SnippetComponent } from './components/snippet/snippet.component';
import { ButtonComponent } from './components/button/button.component';
import { SliderComponent } from './components/slider/slider.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item.component';
import { VideoComponent } from './components/video/video.component';
import { WindowRefService } from './components/video/WindowRefService';
import { ShareService } from './services/share/shareService';
import { JoinsService } from './services/joins.service';
import { CommunicationService } from './services/communication.service';
import { ListController } from './controllers/list-controller';
import { ButtonController } from './controllers/button-controller';
import { LoggerService } from './services/log.service';
var CrestronSdkModule = (function () {
    function CrestronSdkModule() {
    }
    CrestronSdkModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                VirtualScrollModule,
                ClipboardModule
            ],
            declarations: [
                SnippetComponent,
                ButtonComponent,
                SliderComponent,
                ListComponent,
                ListItemComponent,
                VideoComponent,
                ListController,
                ButtonController
            ],
            providers: [
                WindowRefService,
                ShareService,
                JoinsService,
                CommunicationService,
                LoggerService
            ],
            exports: [
                SnippetComponent,
                ButtonComponent,
                SliderComponent,
                ListComponent,
                VideoComponent,
                ButtonController,
                ListController
            ],
            entryComponents: [ButtonComponent, SliderComponent]
        })
    ], CrestronSdkModule);
    return CrestronSdkModule;
}());
export { CrestronSdkModule };
//# sourceMappingURL=crestron-sdk.module.js.map