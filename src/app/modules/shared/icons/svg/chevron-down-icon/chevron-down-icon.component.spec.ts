import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronDownIconComponent } from './chevron-down-icon.component';

describe('ChevronDownIconComponent', () => {
  let component: ChevronDownIconComponent;
  let fixture: ComponentFixture<ChevronDownIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevronDownIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChevronDownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
