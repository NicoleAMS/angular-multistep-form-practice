import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './form/personal/personal.component';
import { WorkComponent } from './form/work/work.component';
import { AddressComponent } from './form/address/address.component';
import { ResultComponent } from './form/result/result.component';

const appRoutes: Routes = [
    { path: 'personal',  component: PersonalComponent },
    { path: 'work',  component: WorkComponent },
    { path: 'address',  component: AddressComponent },
    { path: 'result',  component: ResultComponent },
    { path: '',   redirectTo: '/personal', pathMatch: 'full' },
    { path: '**', component: PersonalComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
    exports: [RouterModule]
})

export class AppRoutingModule {}
