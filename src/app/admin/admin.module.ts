import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenementComponent } from './compoent/evenement/evenement.component';
import { FormsModule } from '@angular/forms';
import { PersonnelComponent } from './compoent/personnel/personnel.component';
import { RepportComponent } from './compoent/repport/repport.component';
import { NgChartsModule } from 'ng2-charts';
import { CategoryComponent } from './compoent/category/category.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DetailseventComponent } from './compoent/detailsevent/detailsevent.component';



@NgModule({
  declarations: [
    EvenementComponent,
    PersonnelComponent,
    RepportComponent,
    CategoryComponent,
    DetailseventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    CommonModule,
    NgChartsModule,
    AdminRoutingModule
    
  ],
  exports: [
    EvenementComponent
  ],
})
export class AdminModule { }
