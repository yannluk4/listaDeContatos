import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarContatosPage } from './registrar-contatos.page';

describe('RegistrarContatosPage', () => {
  let component: RegistrarContatosPage;
  let fixture: ComponentFixture<RegistrarContatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarContatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
