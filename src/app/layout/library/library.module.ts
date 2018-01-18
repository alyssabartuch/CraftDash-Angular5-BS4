import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, LibraryRoutingModule, PageHeaderModule],
    declarations: [LibraryComponent]
})
export class LibraryModule {}
