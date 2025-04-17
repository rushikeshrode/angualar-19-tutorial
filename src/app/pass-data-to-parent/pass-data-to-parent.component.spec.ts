import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataToParentComponent } from './pass-data-to-parent.component';

describe('PassDataToParentComponent', () => {
  let component: PassDataToParentComponent;
  let fixture: ComponentFixture<PassDataToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassDataToParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDataToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
