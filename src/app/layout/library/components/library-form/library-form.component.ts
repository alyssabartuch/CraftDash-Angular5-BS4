import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit {
  constructor() { }

  defaultModel = {
      title: 'toe up socks',
      description: 'This is a toe up sock pattern knit in fingering weight yarn.',
      craftType: ['knitting', 'crochet', 'spinning'],
      file: ''
  };

  model = {
      title: '',
      description: '',
      craftType: '',
      file: ''
  };

  submitted = false;

  onSubmit() {
       this.submitted = true;
   }

  ngOnInit() {
  }

}
