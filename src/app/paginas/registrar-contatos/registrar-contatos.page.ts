import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-contatos',
  templateUrl: './registrar-contatos.page.html',
  styleUrls: ['./registrar-contatos.page.scss'],
})
export class RegistrarContatosPage implements OnInit {

  protected idSave = '';
  protected nomeSave = '';
  protected numeroSave = '';
  protected emailSave = '';

  constructor(private nav: NavController, private router: Router) { }

  public saveContact(idSave: string, nomeSave: string, numeroSave: string, emailSave: string) {
    let contatos = JSON.parse(window.localStorage.getItem('Contatos') || '[]');

    contatos.push({ id: idSave, nome: nomeSave, numero: numeroSave, email: emailSave });

    window.localStorage.setItem('Contatos', JSON.stringify(contatos));

    console.log('Salvando dados na lista de contatos (armazenados localmente)');
    this.idSave = '';
    this.nomeSave = '';
    this.numeroSave = '';
    this.emailSave = '';

    this.router.navigate(['lista-contatos'], { queryParams: { updated: true } });
  }

  public navigateToContactData() {
    this.nav.navigateForward('contact-data');
    console.log('Lendo dados da lista de contatos');
  }

  ngOnInit() { }
}