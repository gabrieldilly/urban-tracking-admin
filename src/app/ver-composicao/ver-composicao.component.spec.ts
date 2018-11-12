import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComposicaoComponent } from './ver-composicao.component';

describe('VerComposicaoComponent', () => {
  let component: VerComposicaoComponent;
  let fixture: ComponentFixture<VerComposicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerComposicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerComposicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
