import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { PageHeaderModule } from './../../shared';

import {ModalComponent} from './components';
import { LibraryFormComponent } from './components/library-form/library-form.component';

@NgModule({
    imports: [CommonModule, LibraryRoutingModule, PageHeaderModule],
    declarations: [LibraryComponent, ModalComponent, LibraryFormComponent]
})
export class LibraryModule {}
