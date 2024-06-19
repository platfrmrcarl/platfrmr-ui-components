import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemecontrolllerComponent } from './themecontrolller.component';

describe('ThemecontrolllerComponent', () => {
  let component: ThemecontrolllerComponent;
  let fixture: ComponentFixture<ThemecontrolllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemecontrolllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemecontrolllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
