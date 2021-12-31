import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanaTablesComponent } from './kana-tables.component';

describe('KanaTablesComponent', () => {
  let component: KanaTablesComponent;
  let fixture: ComponentFixture<KanaTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanaTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanaTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
