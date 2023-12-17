import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShravyaComponent } from './shravya.component';

describe('ShravyaComponent', () => {
  let component: ShravyaComponent;
  let fixture: ComponentFixture<ShravyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShravyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShravyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
