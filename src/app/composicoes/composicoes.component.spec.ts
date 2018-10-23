import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposicoesComponent } from './composicoes.component';

describe('ComposicoesComponent', () => {
  let component: ComposicoesComponent;
  let fixture: ComponentFixture<ComposicoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposicoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
