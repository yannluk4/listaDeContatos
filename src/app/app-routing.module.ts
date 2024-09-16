import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-contatos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lista-contatos',
    loadChildren: () => import('./paginas/lista-contatos/lista-contatos.module').then( m => m.ListaContatosPageModule)
  },
  {
    path: 'registrar-contatos',
    loadChildren: () => import('./paginas/registrar-contatos/registrar-contatos.module').then( m => m.RegistrarContatosPageModule)
  },
  {
    path: 'editar-contatos',
    loadChildren: () => import('./paginas/editar-contatos/editar-contatos.module').then( m => m.EditarContatosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}