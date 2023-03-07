import { Injectable, OnInit } from '@angular/core';

import { collectionData, Firestore, collection,addDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Gastos } from '../interface/gastos';



@Injectable({
  providedIn: 'root'
})
export class GastosService implements OnInit {

  constructor( private firestore: Firestore ) { }


ngOnInit(): void {
  
}

addGastos(gastos: Gastos){
  const newGastos = collection(this.firestore, 'gastos');
  return addDoc(newGastos, gastos)

}

getGastos():Observable<Gastos[]>{
  const newGastos = collection(this.firestore, 'gastos');
  return collectionData(newGastos, {idField:'id'}) as Observable<Gastos[]>

}

}
