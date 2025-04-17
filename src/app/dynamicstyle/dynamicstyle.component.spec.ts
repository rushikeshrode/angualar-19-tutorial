import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicstyleComponent } from './dynamicstyle.component';

describe('DynamicstyleComponent', () => {
  let component: DynamicstyleComponent;
  let fixture: ComponentFixture<DynamicstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicstyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
