import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollModule } from './components/virtual-scroll';

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
import { SliderController } from './controllers/slider-controller';

import {LoggerService} from './services/log.service';


@NgModule({
    imports: [
        CommonModule,
        VirtualScrollModule
    ],
    declarations: [
        ButtonComponent,
        SliderComponent,
        ListComponent,
        ListItemComponent,
        VideoComponent,
        ListController,
        ButtonController,
        SliderController
    ],
    providers: [
        WindowRefService,
        ShareService,
        JoinsService,
        CommunicationService,
        LoggerService
    ],
    exports: [
        ButtonComponent,
        SliderComponent,
        ListComponent,
        VideoComponent,
        ButtonController,
        ListController,
        SliderController
    ],
    entryComponents:[ ButtonComponent, SliderComponent, ListController ]
})
export class CrestronSdkModule{}
