import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LucideAngularModule, FileText, Calendar, CreditCard, Users, Settings, User, Clock } from 'lucide-angular';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule.pick({
      FileText,
      Calendar,
      CreditCard,
      Users,
      Settings,
      User,
      Clock
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutModule { }
