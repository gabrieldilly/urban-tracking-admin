import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEstacaoComponent } from './criar-estacao.component';

describe('CriarEstacaoComponent', () => {
  let component: CriarEstacaoComponent;
  let fixture: ComponentFixture<CriarEstacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarEstacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
