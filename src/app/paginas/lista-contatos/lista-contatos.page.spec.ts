import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaContatosPage } from './lista-contatos.page';

describe('ListaContatosPage', () => {
  let component: ListaContatosPage;
  let fixture: ComponentFixture<ListaContatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
