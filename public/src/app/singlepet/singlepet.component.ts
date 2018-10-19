import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-singlepet',
  templateUrl: './singlepet.component.html',
  styleUrls: ['./singlepet.component.css']
})
export class SinglepetComponent implements OnInit {
  petid:string
  pet:any
  errors:any
  voted:boolean
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService,
  ) { }

  ngOnInit() { this.setPetId() }
  toAllPets=()=> this._router.navigate(['/pets']);

  setPetId=()=>  this._route.params.subscribe(
    (params: Params) =>{
      this.petid=params['id'];
      this.getSinglePet();
     })

  getSinglePet=()=> this._http.getSinglePet(this.petid)
     .subscribe( data => (data['errors']) ?this.errors = data: this.pet = data  )

  deletePet=()=> this._http.deletePet(this.petid)
     .subscribe( () => this.toAllPets() )

  vote=()=> this._http.vote( this.petid, 1 )
     .subscribe( ()=>{
        this.voted = true;
        this.getSinglePet();
     })

}
