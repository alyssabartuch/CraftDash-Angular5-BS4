import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebResourcesComponent } from './web-resources.component';

const routes: Routes = [
    {
        path: '', component: WebResourcesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebResourcesRoutingModule { }
