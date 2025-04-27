import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailsevent',
  templateUrl: './detailsevent.component.html',
  styleUrls: ['./detailsevent.component.css']
})
export class DetailseventComponent {
  @Input() idEvent: any;
  showViewModal: boolean = false;
  showRegistrationsModal: boolean = false;
  selectedEvent: any = {
    category: 'workshop',
    title: 'Angular Workshop',
    location: 'Online',
    date: '2025-05-01',
    description: 'A workshop to learn Angular basics.',
    image: '/angular-logo.png',
    participants: {
      total: 50,
      remaining: 10,
      list: [
        { id: 1, name: 'John Doe', phone: '1234567890', email: 'john.doe@example.com', preference: 'Vegetarian' },
        { id: 2, name: 'Jane Smith', phone: '0987654321', email: 'jane.smith@example.com', preference: 'Non-Vegetarian' }
      ]
    },
    personnel: {
      animateur: 'Alex',
      techniciens: 'Bob, Alice',
      hotes: 'Charlie'
    }
  };
  registrationPage: number = 1;

  closeViewModal() {
    this.showViewModal = false;
    this.selectedEvent = null;
  }

  handleViewRegistrations() {
    this.showRegistrationsModal = true;
  }

  closeRegistrationsModal() {
    this.showRegistrationsModal = false;
  }

  setRegistrationPage(page: number) {
    this.registrationPage = page;
  }
  openViewModal(event: any) {
    this.showViewModal = true;
  }
}
