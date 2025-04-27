import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEvenementComponent } from './global/compoent/detail-evenement/detail-evenement.component';
import { HerosComponent } from './global/compoent/heros/heros.component';
import { JoinComponent } from './global/compoent/join/join.component';
import { EvenementComponent } from './admin/compoent/evenement/evenement.component';
import { PersonnelComponent } from './admin/compoent/personnel/personnel.component';
import { RepportComponent } from './admin/compoent/repport/repport.component';
import { CategoryComponent } from './admin/compoent/category/category.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./global/global.module').then((m) => m.GlobalModule),
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
