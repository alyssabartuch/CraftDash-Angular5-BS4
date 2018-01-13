import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebResourceFormComponent } from './web-resource-form.component';

describe('WebResourceFormComponent', () => {
  let component: WebResourceFormComponent;
  let fixture: ComponentFixture<WebResourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebResourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
