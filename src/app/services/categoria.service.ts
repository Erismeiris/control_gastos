import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Categoria } from '../interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

constructor( private firestore: Firestore) { }



addCategoria(categoria: Categoria){
  const newCategoria = collection(this.firestore, 'categoria');
  return addDoc(newCategoria, categoria)

}

getCategoria():Observable<Categoria[]>{
  const newCategoria = collection(this.firestore, 'categoria');
  return collectionData(newCategoria, {idField:'id'}) as Observable<Categoria[]>

}

}
