import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoDetailComponent } from './chamado-detail.component';

describe('ChamadoDetailComponent', () => {
  let component: ChamadoDetailComponent;
  let fixture: ComponentFixture<ChamadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
