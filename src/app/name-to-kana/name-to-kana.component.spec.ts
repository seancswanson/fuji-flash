import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameToKanaComponent } from './name-to-kana.component';

describe('NameToKanaComponent', () => {
  let component: NameToKanaComponent;
  let fixture: ComponentFixture<NameToKanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameToKanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameToKanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
