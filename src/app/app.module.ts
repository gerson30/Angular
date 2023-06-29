import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { AppRoutingModule } from './app-routing.module';

import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  { path: '', redirectTo: '/listar', pathMatch: 'full' }, // Default route
  { path: 'listar', component: ListarProductoComponent },
  { path: 'agregar', component: AgregarProductoComponent },
  { path: 'editar/:id', component: EditarProductoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
