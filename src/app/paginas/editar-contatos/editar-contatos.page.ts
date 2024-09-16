import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-contatos',
  templateUrl: './editar-contatos.page.html',
  styleUrls: ['./editar-contatos.page.scss'],
})
export class EditarContatosPage implements OnInit {

  protected idSave = '';
  protected nomeSave = '';
  protected numeroSave = '';
  protected emailSave = '';

  constructor(private nav: NavController, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadContact(id);
      }
    });
  }

  loadContact(id: string) {
    let contatos = JSON.parse(window.localStorage.getItem('Contatos') || '[]');
    let contato = contatos.find((contato: any) => contato.id === id);
    if (contato) {
      this.idSave = contato.id;
      this.nomeSave = contato.nome;
      this.numeroSave = contato.numero;
      this.emailSave = contato.email;
    }
  }

  updateContact() {
    let contatos = JSON.parse(window.localStorage.getItem('Contatos') || '[]');
    let index = contatos.findIndex((contato: any) => contato.id === this.idSave);
    if (index !== -1) {
      contatos[index] = { id: this.idSave, nome: this.nomeSave, numero: this.numeroSave, email: this.emailSave };
      window.localStorage.setItem('Contatos', JSON.stringify(contatos));
      console.log('Atualizando dados na lista de contatos');
      this.router.navigate(['lista-contatos'], { queryParams: { updated: true } });
    }
  }

  public navigateToContactData() {
    this.nav.navigateForward('contact-data');
    console.log('Lendo dados da lista de contatos (armazenados localmente)');
  }
}