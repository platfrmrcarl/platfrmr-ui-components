import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemecontrollerComponent } from './themecontroller.component';

describe('ThemecontrollerComponent', () => {
  let component: ThemecontrollerComponent;
  let fixture: ComponentFixture<ThemecontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemecontrollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemecontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
