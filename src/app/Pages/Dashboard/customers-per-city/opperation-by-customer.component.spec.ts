import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpperationByCustomerComponent } from './opperation-by-customer.component';

describe('OpperationByCustomerComponent', () => {
  let component: OpperationByCustomerComponent;
  let fixture: ComponentFixture<OpperationByCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpperationByCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpperationByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
