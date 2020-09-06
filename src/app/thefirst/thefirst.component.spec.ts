import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThefirstComponent } from './thefirst.component';

describe('ThefirstComponent', () => {
  let component: ThefirstComponent;
  let fixture: ComponentFixture<ThefirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThefirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
