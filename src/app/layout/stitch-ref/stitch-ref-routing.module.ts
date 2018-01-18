import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StitchRefComponent } from './stitch-ref.component';

const routes: Routes = [
    {
        path: '', component: StitchRefComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StitchRefRoutingModule { }
