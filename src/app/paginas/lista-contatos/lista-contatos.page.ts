import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.page.html',
  styleUrls: ['./lista-contatos.page.scss'],
})
export class ListaContatosPage implements OnInit {
  public contatos: any[] = [];
  public filteredContatos: any[] = [];
  public searchTerm: string = '';

  constructor(private nav: NavController, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['updated']) {
        this.loadContatos();
      }
    });
    this.loadContatos();
  }

  loadContatos() {
    this.contatos = JSON.parse(window.localStorage.getItem('Contatos') || '[]');
    this.filteredContatos = this.contatos;
  }

  filterContacts(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredContatos = this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(searchTerm) || 
             contato.numero.includes(searchTerm) || 
             contato.email.toLowerCase().includes(searchTerm);
    });
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredContatos = this.contatos;
  }

  editContato(id: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: { id: id }
    };
    this.router.navigate(['editar-contatos'], navigationExtras);
  }

  deleteContato(id: string) {
    let contatos = JSON.parse(window.localStorage.getItem('Contatos') || '[]');
    contatos = contatos.filter((contato: any) => contato.id !== id);
    window.localStorage.setItem('Contatos', JSON.stringify(contatos));
    this.loadContatos();
  }
}