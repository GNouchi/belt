import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



// import { IndexComponent } from './index/index.component';
import { PetsComponent } from './pets/pets.component';
import { NetpetComponent } from './netpet/netpet.component';
import { SinglepetComponent } from './singlepet/singlepet.component';
import { EditpetComponent } from './editpet/editpet.component';


const routes: Routes = [
  // { path: 'index',component: IndexComponent },
  { path: 'pets',component: PetsComponent },
  { path: 'pets/new',component: NetpetComponent },
  { path: 'pets/:id',component: SinglepetComponent },
  { path: 'pets/:id/edit',component: EditpetComponent },
  { path: '',  pathMatch: 'full', redirectTo: '/pets' },
  { path: '**',component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
