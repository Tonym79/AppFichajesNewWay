import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichajesRevisionComponent } from './fichajes-revision.component';

describe('FichajesRevisionComponent', () => {
  let component: FichajesRevisionComponent;
  let fixture: ComponentFixture<FichajesRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichajesRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichajesRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
