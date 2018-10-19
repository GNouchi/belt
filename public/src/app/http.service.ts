import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({  providedIn: 'root'})

export class HttpService {

  constructor(private _http:HttpClient) { }

  // api service 

  getPets=()=> 
    this._http.get('/api/pets');

  getSinglePet=(petid)=> 
    this._http.get('/api/pets/'+petid);

  createPet=(Pet)=>
    this._http.post('/api/pets', Pet);

  deletePet=(petid)=>
    this._http.delete('/api/pets/'+ petid);

  editPet=( petid, editablePet )=>
    this._http.put( '/api/pets/'+petid, editablePet );  

  vote=(petid,counter)=> 
    this._http.patch('/api/quotes/'+petid, {'votes':counter});


}
