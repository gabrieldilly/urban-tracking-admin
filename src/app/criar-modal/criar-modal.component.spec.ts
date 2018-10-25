import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarModalComponent } from './criar-modal.component';

describe('CriarModalComponent', () => {
  let component: CriarModalComponent;
  let fixture: ComponentFixture<CriarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
