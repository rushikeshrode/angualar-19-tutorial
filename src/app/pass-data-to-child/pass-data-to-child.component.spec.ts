import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataToChildComponent } from './pass-data-to-child.component';

describe('PassDataToChildComponent', () => {
  let component: PassDataToChildComponent;
  let fixture: ComponentFixture<PassDataToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassDataToChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDataToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
