import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPagesLayoutComponent } from './auth-pages-layout.component';

describe('AuthPagesLayoutComponent', () => {
  let component: AuthPagesLayoutComponent;
  let fixture: ComponentFixture<AuthPagesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPagesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
