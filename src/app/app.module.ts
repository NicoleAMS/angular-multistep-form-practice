import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalComponent } from './form/personal/personal.component';
import { WorkComponent } from './form/work/work.component';
import { AddressComponent } from './form/address/address.component';
import { ResultComponent } from './form/result/result.component';

import { FormDataService } from './form-data.service';

const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'personal', component: PersonalComponent },
  { path: 'work', component: WorkComponent },
  { path: 'address', component: AddressComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
