import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'cheatsheet', loadChildren: './cheatsheet/cheatsheet.module#CheatsheetModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'library', loadChildren: './library/library.module#LibraryModule' },
            { path: 'web-resources', loadChildren: './web-resources/web-resources.module#WebResourcesModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'vocabulary', loadChildren: './vocabulary/vocabulary.module#VocabularyModule' },
            { path: 'stitch-ref', loadChildren: './stitch-ref/stitch-ref.module#StitchRefModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
