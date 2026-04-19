import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionComponent } from './formacion.component';

describe('FormacionComponent', () => {
  let component: FormacionComponent;
  let fixture: ComponentFixture<FormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormacionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
