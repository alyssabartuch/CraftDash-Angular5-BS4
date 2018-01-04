import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheatsheetRoutingModule } from './cheatsheet-routing.module';
import { CheatsheetComponent } from './cheatsheet.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, CheatsheetRoutingModule, PageHeaderModule],
    declarations: [CheatsheetComponent]
})
export class CheatsheetModule {}
