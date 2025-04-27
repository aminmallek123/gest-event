import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailEvenementComponent } from '../global/compoent/detail-evenement/detail-evenement.component';
import { JoinComponent } from '../global/compoent/join/join.component';
import { HerosComponent } from './compoent/heros/heros.component';

const routes: Routes = [
  { path: '', component: HerosComponent },
  { path: 'details/:id', component: DetailEvenementComponent },
  { path: 'inscription/:id', component: JoinComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
