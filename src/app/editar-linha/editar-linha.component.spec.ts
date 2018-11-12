import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLinhaComponent } from './editar-linha.component';

describe('EditarLinhaComponent', () => {
  let component: EditarLinhaComponent;
  let fixture: ComponentFixture<EditarLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
