import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarContatosPageRoutingModule } from './registrar-contatos-routing.module';

import { RegistrarContatosPage } from './registrar-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarContatosPageRoutingModule
  ],
  declarations: [RegistrarContatosPage]
})
export class RegistrarContatosPageModule {}
