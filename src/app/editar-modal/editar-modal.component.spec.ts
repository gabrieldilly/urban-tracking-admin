import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModalComponent } from './editar-modal.component';

describe('EditarModalComponent', () => {
  let component: EditarModalComponent;
  let fixture: ComponentFixture<EditarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
