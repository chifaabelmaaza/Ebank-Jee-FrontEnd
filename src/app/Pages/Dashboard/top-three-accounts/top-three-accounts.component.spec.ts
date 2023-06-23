import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeAccountsComponent } from './top-three-accounts.component';

describe('TopThreeAccountsComponent', () => {
  let component: TopThreeAccountsComponent;
  let fixture: ComponentFixture<TopThreeAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopThreeAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopThreeAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
