import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyHomeComponent } from './study-home.component';

describe('StudyHomeComponent', () => {
  let component: StudyHomeComponent;
  let fixture: ComponentFixture<StudyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
