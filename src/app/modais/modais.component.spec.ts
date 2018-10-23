import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaisComponent } from './modais.component';

describe('ModaisComponent', () => {
  let component: ModaisComponent;
  let fixture: ComponentFixture<ModaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
