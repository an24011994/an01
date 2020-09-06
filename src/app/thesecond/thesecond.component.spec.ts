import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesecondComponent } from './thesecond.component';

describe('ThesecondComponent', () => {
  let component: ThesecondComponent;
  let fixture: ComponentFixture<ThesecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
