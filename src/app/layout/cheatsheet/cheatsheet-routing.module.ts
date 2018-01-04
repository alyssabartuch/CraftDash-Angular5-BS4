import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheatsheetComponent } from './cheatsheets.component';

const routes: Routes = [
    {
        path: '', component: CheatsheetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CheatsheetRoutingModule {
}
