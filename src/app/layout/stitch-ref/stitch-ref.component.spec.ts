import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchRefComponent } from './stitch-ref.component';

describe('StitchRefComponent', () => {
  let component: StitchRefComponent;
  let fixture: ComponentFixture<StitchRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StitchRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
