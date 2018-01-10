import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-web-resources',
    templateUrl: './web-resources.component.html',
    styleUrls: ['./web-resources.component.scss'],
    animations: [routerTransition()]
})
export class WebResourcesComponent implements OnInit {
    constructor() {}

    webResources = [
      {
        title: 'ravelry',
        craft: 'All',
        webAddress: 'https://www.ravelry.com/',
        img: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj8mOrhr8vYAhXrRN8KHY4fCe0QjRwIBw&url=https%3A%2F%2Fwww.ravelry.com%2F&psig=AOvVaw3mZGq0jQ9_mWbSLnXrY-Pm&ust=1515604200084707'
      }
    ];


    ngOnInit() {}
}
