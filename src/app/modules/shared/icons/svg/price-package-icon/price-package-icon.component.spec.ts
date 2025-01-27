import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePackageIconComponent } from './price-package-icon.component';

describe('PricePackageIconComponent', () => {
  let component: PricePackageIconComponent;
  let fixture: ComponentFixture<PricePackageIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricePackageIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricePackageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
