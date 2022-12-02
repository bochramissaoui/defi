import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarcasmeComponent } from './sarcasme.component';

describe('SarcasmeComponent', () => {
  let component: SarcasmeComponent;
  let fixture: ComponentFixture<SarcasmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarcasmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarcasmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
