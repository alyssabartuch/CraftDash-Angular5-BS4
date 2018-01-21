import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-stitch-ref',
    templateUrl: './stitch-ref.component.html',
    styleUrls: ['./stitch-ref.component.scss'],
    animations: [routerTransition()]
})
export class StitchRefComponent implements OnInit {
    constructor() {}

    stitchRefs = [
      {
        title: 'slip knot',
        embed: 'https://www.youtube.com/embed/fFzWoXPAzFM'
      },
      {
        title: 'long tail cast-on',
        embed: 'https://www.youtube.com/embed/sN9cNEozOLc'
      }
    ]

    ngOnInit() {}




}
