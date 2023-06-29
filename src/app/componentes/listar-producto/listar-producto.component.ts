import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  constructor(private dataService: DataService) { }
  productos: any;


  ngOnInit(): void {
    this.getProductosData();
  }

  getProductosData() {
      this.dataService.getData().subscribe(res => {
        this.productos = res;
      });
      
  }

  deleteData(id: any){
    this.dataService.deleteData(id).subscribe(res =>{
      this.getProductosData();
    })

  }

}
