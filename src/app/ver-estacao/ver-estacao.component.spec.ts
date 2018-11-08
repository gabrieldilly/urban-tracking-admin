import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstacaoComponent } from './ver-estacao.component';

describe('VerEstacaoComponent', () => {
  let component: VerEstacaoComponent;
  let fixture: ComponentFixture<VerEstacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEstacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
