import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpperationByMonthComponent } from './opperation-by-month.component';

describe('OpperationByMonthComponent', () => {
  let component: OpperationByMonthComponent;
  let fixture: ComponentFixture<OpperationByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpperationByMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpperationByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
