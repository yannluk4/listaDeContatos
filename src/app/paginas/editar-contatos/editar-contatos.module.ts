import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarContatosPageRoutingModule } from './editar-contatos-routing.module';

import { EditarContatosPage } from './editar-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarContatosPageRoutingModule
  ],
  declarations: [EditarContatosPage]
})
export class EditarContatosPageModule {}
