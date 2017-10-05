import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// App root
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// Feature components
import { PersonalComponent } from './form/personal/personal.component';
import { WorkComponent } from './form/work/work.component';
import { AddressComponent } from './form/address/address.component';
import { ResultComponent } from './form/result/result.component';

// Routing module
import { AppRoutingModule } from './app-routing.module';

// Services
import { FormDataService } from './form/data/form-data.service';
import { WorkflowService } from './workflow/workflow.service';

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
    AppRoutingModule
  ],
  providers: [FormDataService, WorkflowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
