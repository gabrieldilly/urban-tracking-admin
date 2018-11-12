import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLinhaComponent } from './criar-linha.component';

describe('CriarLinhaComponent', () => {
  let component: CriarLinhaComponent;
  let fixture: ComponentFixture<CriarLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
