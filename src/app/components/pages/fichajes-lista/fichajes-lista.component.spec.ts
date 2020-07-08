import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichajesListaComponent } from './fichajes-lista.component';

describe('FichajesListaComponent', () => {
  let component: FichajesListaComponent;
  let fixture: ComponentFixture<FichajesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichajesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichajesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
