import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheatsheetRoutingModule } from './cheatsheets-routing.module';
import { CheatsheetComponent } from './cheatsheets.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, CheatsheetRoutingModule, PageHeaderModule],
    declarations: [CheatsheetComponent]
})
export class CheatsheetModule {}
