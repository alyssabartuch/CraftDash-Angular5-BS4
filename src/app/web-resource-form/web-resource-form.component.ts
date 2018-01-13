import { Component, OnInit } from '@angular/core';
import { WebResourceForm } from '../models/web-resource-form.component';

@Component({
  selector: 'app-web-resource-form',
  templateUrl: './web-resource-form.component.html',
  styleUrls: ['./web-resource-form.component.scss']
})
export class WebResourceFormComponent implements OnInit {
  constructor() { }

  defaultModel = {
      title: 'ravelry',
      subtitle: 'Ravelry is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.',
      webAddress: 'https://www.ravelry.com/',
      img: 'https://style-cdn.ravelrycache.com/images/splash/ravelry-logo-81r-300x.png'
  }

  model = {
      title: '',
      subtitle: '',
      webAddress: '',
      img: ''
  }

  submitted = false;

  onSubmit() { this.submitted = true;

  ngOnInit() {
  }

}
