import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptystateComponent } from './emptystate.component';

describe('EmptystateComponent', () => {
  let component: EmptystateComponent;
  let fixture: ComponentFixture<EmptystateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptystateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptystateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
