import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidentifierComponent } from './sidentifier.component';

describe('SidentifierComponent', () => {
  let component: SidentifierComponent;
  let fixture: ComponentFixture<SidentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidentifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
