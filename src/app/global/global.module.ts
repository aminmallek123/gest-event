import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './compoent/heros/heros.component';
import { LayoutModule } from '../layout/layout.module';
import { CourseCardsComponent } from './compoent/course-cards/course-cards.component';
import { ServiceComponent } from './compoent/service/service.component';
import { RouterModule } from '@angular/router';
import { DetailEvenementComponent } from './compoent/detail-evenement/detail-evenement.component';
import { JoinComponent } from './compoent/join/join.component';
import { FormsModule } from '@angular/forms';
import { GlobalRoutingModule } from './global-routing.module';



@NgModule({
  declarations: [
    HerosComponent,
    CourseCardsComponent,
    ServiceComponent,
    DetailEvenementComponent,
    JoinComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    GlobalRoutingModule
  ],
  exports: [
    HerosComponent,
  ]
})
export class GlobalModule { }
