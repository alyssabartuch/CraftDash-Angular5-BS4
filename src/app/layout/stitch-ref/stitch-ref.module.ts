import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { StitchRefRoutingModule } from './stitch-ref-routing.module';
import { StitchRefComponent } from './stitch-ref.component';

import {ModalComponent} from './components';

import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        StitchRefRoutingModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        FormsModule
    ],
    declarations: [
        StitchRefComponent,
        ModalComponent

    ]
})
export class StitchRefModule {}
