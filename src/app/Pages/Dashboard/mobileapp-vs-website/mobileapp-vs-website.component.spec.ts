import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappVsWebsiteComponent } from './mobileapp-vs-website.component';

describe('MobileappVsWebsiteComponent', () => {
  let component: MobileappVsWebsiteComponent;
  let fixture: ComponentFixture<MobileappVsWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileappVsWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileappVsWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
