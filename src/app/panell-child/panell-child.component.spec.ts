import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanellChildComponent } from './panell-child.component';

describe('PanellChildComponent', () => {
  let component: PanellChildComponent;
  let fixture: ComponentFixture<PanellChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanellChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanellChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
