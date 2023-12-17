import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanishqComponent } from './tanishq.component';

describe('TanishqComponent', () => {
  let component: TanishqComponent;
  let fixture: ComponentFixture<TanishqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanishqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanishqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
