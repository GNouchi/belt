import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PetsComponent } from './pets/pets.component';
import { NetpetComponent } from './netpet/netpet.component';
import { SinglepetComponent } from './singlepet/singlepet.component';
import { EditpetComponent } from './editpet/editpet.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PagenotfoundComponent,
    PetsComponent,
    NetpetComponent,
    SinglepetComponent,
    EditpetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
