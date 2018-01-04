import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-cheatsheet',
    templateUrl: './cheatsheet.component.html',
    styleUrls: ['./cheatsheet.component.scss'],
    animations: [routerTransition()]
})
export class CheatsheetComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
