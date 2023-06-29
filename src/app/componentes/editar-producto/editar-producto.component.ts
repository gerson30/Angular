import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/productos';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id: any;
  data: any;
  producto = new Productos();
  selectedFile: any;


  constructor(private route: ActivatedRoute, private dataservice: DataService) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    //  console.log(this.id);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataservice.getProductosById(this.id).subscribe(res => {
      this.data = res;
      // console.log(res);
      this.producto = this.data;
    })
  }




  updateProductos() {
    this.dataservice.updateProductos(this.id, this.producto).subscribe(res => {
        
    });
  }
}


