import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WebResourcesRoutingModule } from './web-resources-routing.module';
import { WebResourcesComponent } from './web-resources.component';

import {ModalComponent} from './components';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        WebResourcesRoutingModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [
        WebResourcesComponent,
        ModalComponent,


    ]
})
export class WebResourcesModule {}
