import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShradhaComponent } from './shradha.component';

describe('ShradhaComponent', () => {
  let component: ShradhaComponent;
  let fixture: ComponentFixture<ShradhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShradhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShradhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
