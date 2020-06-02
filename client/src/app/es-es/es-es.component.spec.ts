import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsEsComponent } from './es-es.component';

describe('EsEsComponent', () => {
  let component: EsEsComponent;
  let fixture: ComponentFixture<EsEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
