import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoListComponent } from './equipamento-list.component';

describe('EquipamentoListComponent', () => {
  let component: EquipamentoListComponent;
  let fixture: ComponentFixture<EquipamentoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
