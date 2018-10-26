import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstacaoComponent } from './editar-estacao.component';

describe('EditarEstacaoComponent', () => {
  let component: EditarEstacaoComponent;
  let fixture: ComponentFixture<EditarEstacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEstacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
