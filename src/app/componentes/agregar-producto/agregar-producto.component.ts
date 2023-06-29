import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Productos }  from 'src/app/productos';


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})

export class AgregarProductoComponent  implements OnInit {

 

  producto: Productos = new Productos();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addData() {
    this.dataService.addData(this.producto).subscribe(res => {
      console.log(res);
      // Aquí puedes realizar acciones adicionales después de agregar el producto, como mostrar una notificación o redirigir a otra página.
    // Recargar la página
      window.location.href = 'listar';
    });
  }

  
}