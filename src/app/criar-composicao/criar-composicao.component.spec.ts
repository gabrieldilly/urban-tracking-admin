import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarComposicaoComponent } from './criar-composicao.component';

describe('CriarComposicaoComponent', () => {
  let component: CriarComposicaoComponent;
  let fixture: ComponentFixture<CriarComposicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarComposicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarComposicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
