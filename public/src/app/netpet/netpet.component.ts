import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-netpet',
  templateUrl: './netpet.component.html',
  styleUrls: ['./netpet.component.css']
})
export class NetpetComponent implements OnInit {
  newpet:any
  errors:any
  
  constructor(
    private _router: Router,
    private _http: HttpService,
  ) { }
  ngOnInit() 
  { this.resetForm() }

  toAllPets=()=> this._router.navigate(['/pets']);

  resetForm=()=> 
    this.newpet={
      'name':'',
      'type':'',
      'description':'',
      'skillone':'',
      'skilltwo':'',
      'skillthree':''
    }

  createPet=()=> this._http.createPet(this.newpet)
    .subscribe( data => (data['errors'])? this.errors = data:this.toAllPets() )

}

