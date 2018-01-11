import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebResourcesRoutingModule } from './web-resources-routing.module';
import { WebResourcesComponent } from './web-resources.component';

import {ModalComponent} from './components';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        WebResourcesRoutingModule,
        PageHeaderModule
    ],
    declarations: [
        WebResourcesComponent,
        ModalComponent
    ]
})
export class WebResourcesModule {}
