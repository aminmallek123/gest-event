import { Component } from '@angular/core';
import {
  FileText,
  Calendar,
  CreditCard,
  Users,
  Settings,
  User,
  Clock,
} from 'lucide-angular';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'MENU',
      links: [
        { name: 'Repport', icon: FileText, route: '#' },
        { name: 'Evenement', icon: Calendar, route: '#', active: true },
        { name: 'Payment', icon: CreditCard, route: '#' },
        { name: 'Personnel', icon: Users, route: '#' },
      ],
    },
    {
      label: 'OTHERS',
      links: [
        { name: 'Settings', icon: Settings, route: '#' },
        { name: 'Accounts', icon: User, route: '#' },
        { name: 'historique Events', icon: Clock, route: '#' },
      ],
    },
  ];
}
