import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
  petid:string
  pet:any
  errors:any
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService,
  ) { }

  ngOnInit() { this.setPetId() }

  toSinglePet=()=> this._router.navigate(['/pets/'+this.petid]);
  setPetId=()=>  this._route.params.subscribe(
    (params: Params) =>{
      this.petid=params['id'];
      this.getSinglePet();
     })

  getSinglePet=()=> this._http.getSinglePet(this.petid)
    .subscribe( data => (data['errors']) ?this.errors = data: this.pet = data  )

  editPet=()=> this._http.editPet(this.petid, this.pet)
     .subscribe( data => (data['errors']) ?this.errors = data: this.toSinglePet() )


}
