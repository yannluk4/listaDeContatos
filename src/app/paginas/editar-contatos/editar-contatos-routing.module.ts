import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarContatosPage } from './editar-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: EditarContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarContatosPageRoutingModule {}
