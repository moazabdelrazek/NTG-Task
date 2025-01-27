import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceValueIconComponent } from './service-value-icon.component';

describe('ServiceValueIconComponent', () => {
  let component: ServiceValueIconComponent;
  let fixture: ComponentFixture<ServiceValueIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceValueIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceValueIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
