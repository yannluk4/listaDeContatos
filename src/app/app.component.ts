import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista de Contatos', url: '/lista-contatos', icon: 'list' },
    { title: 'Novo Contato', url: '/registrar-contatos', icon: 'person-add' },
  ];
  public labels = [];
  constructor() {}
}
