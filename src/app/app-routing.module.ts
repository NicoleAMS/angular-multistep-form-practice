import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './form/personal/personal.component';
import { WorkComponent } from './form/work/work.component';
import { AddressComponent } from './form/address/address.component';
import { ResultComponent } from './form/result/result.component';

import { WorkflowGuard } from './workflow/workflow-guard.service';
import { WorkflowService } from './workflow/workflow.service';


const appRoutes: Routes = [
    { path: 'personal',  component: PersonalComponent },
    { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
    { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
    { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    { path: '',   redirectTo: '/personal', pathMatch: 'full' },
    { path: '**', component: PersonalComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
    exports: [RouterModule],
    providers: [WorkflowGuard]
})

export class AppRoutingModule {}
