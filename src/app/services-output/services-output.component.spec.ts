import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOutputComponent } from './services-output.component';

describe('ServicesOutputComponent', () => {
  let component: ServicesOutputComponent;
  let fixture: ComponentFixture<ServicesOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
