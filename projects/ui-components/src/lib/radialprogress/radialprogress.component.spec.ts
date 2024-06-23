import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialprogressComponent } from './radialprogress.component';

describe('RadialprogressComponent', () => {
  let component: RadialprogressComponent;
  let fixture: ComponentFixture<RadialprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadialprogressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadialprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
