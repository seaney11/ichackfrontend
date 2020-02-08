import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionViewComponent } from './lession-view.component';

describe('LessionViewComponent', () => {
  let component: LessionViewComponent;
  let fixture: ComponentFixture<LessionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
