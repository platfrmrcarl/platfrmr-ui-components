import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogocloudComponent } from './logocloud.component';

describe('LogocloudComponent', () => {
  let component: LogocloudComponent;
  let fixture: ComponentFixture<LogocloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogocloudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogocloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
