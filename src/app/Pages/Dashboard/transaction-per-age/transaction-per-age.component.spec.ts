import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPerAgeComponent } from './transaction-per-age.component';

describe('TransactionPerAgeComponent', () => {
  let component: TransactionPerAgeComponent;
  let fixture: ComponentFixture<TransactionPerAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPerAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPerAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
