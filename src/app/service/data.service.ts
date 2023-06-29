import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  uploadFile(archivo: { nombreArchivo: null; base64textString: null; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private HttpClient:HttpClient) { 

  }
// Listar
  getData(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/productos');
  }
// Agregar
  addData(data:any){
    return this.HttpClient.post('http://127.0.0.1:8000/api/addProductos', data);
  }
  // Eliminar

  deleteData(id: string){
    return this.HttpClient.delete('http://127.0.0.1:8000/api/deleteProductos/'+id);
  }

  getProductosById(id: string){
    return this.HttpClient.get('http://127.0.0.1:8000/api/productos/'+id);
  }

  updateProductos(id: any, data: any){
    return this.HttpClient.put('http://127.0.0.1:8000/api/updateProductos'+id, data);
  }
  

}
