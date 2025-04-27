import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './compoent/evenement/evenement.component';
import { PersonnelComponent } from './compoent/personnel/personnel.component';
import { RepportComponent } from './compoent/repport/repport.component';
import { CategoryComponent } from './compoent/category/category.component';

const routes: Routes = [
  { path: 'evenement', component: EvenementComponent },
  { path: 'personnel', component: PersonnelComponent },
  { path: 'report', component: RepportComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
