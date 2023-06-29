
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'agregar-producto'},
  {path:'agregar',component:AgregarProductoComponent},
  {path:'listar', component:ListarProductoComponent},
  {path:'editar/:id', component:EditarProductoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })


export class AppRoutingModule { }
