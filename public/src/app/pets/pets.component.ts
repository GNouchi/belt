import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import { Router } from '@angular/router';

// import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  
  pets:any
  constructor(
    private _router: Router,
    private _http:HttpService) { }
  ngOnInit() { this.getPets() }
  
  getPets=()=> this._http.getPets()
    .subscribe(data=> this.pets = data)

  showPet=(petid)=> this._router.navigate(['/pets/'+petid])
  editPet=(petid)=> this._router.navigate(['/pets/'+petid+'/edit/'])




}
