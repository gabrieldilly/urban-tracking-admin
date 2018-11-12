import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerLinhaComponent } from './ver-linha.component';

describe('VerLinhaComponent', () => {
  let component: VerLinhaComponent;
  let fixture: ComponentFixture<VerLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
