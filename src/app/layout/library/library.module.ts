import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { PageHeaderModule } from './../../shared';

import {ModalComponent} from './components';
import { LibraryFormComponent } from './components/library-form/library-form.component';

@NgModule({
    imports: [CommonModule, FormsModule, NgbModule.forRoot(), LibraryRoutingModule, PageHeaderModule],
    declarations: [LibraryComponent, ModalComponent, LibraryFormComponent]
})
export class LibraryModule {}
