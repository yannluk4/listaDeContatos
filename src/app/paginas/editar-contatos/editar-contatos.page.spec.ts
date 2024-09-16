import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarContatosPage } from './editar-contatos.page';

describe('EditarContatosPage', () => {
  let component: EditarContatosPage;
  let fixture: ComponentFixture<EditarContatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarContatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
