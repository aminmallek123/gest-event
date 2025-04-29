import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/admin/compoent/evenement.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: any[] = []; // Store the events
  today: Date = new Date(); // To compare the event date with today
  selectedEvent: any; // Store the selected event details for the modal
  showModal: boolean = false; // Control the visibility of the modal

  constructor(private evenementService: EvenementService) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  // Get all events
  getAllEvents(): void {
    this.evenementService.getAllEvents().subscribe({
      next: (data) => {
        this.services = data;
      },
      error: (error) => {
        console.error('Error loading events', error);
      }
    });
  }

  // Check if the event can be joined
  canJoin(eventDate: string): boolean {
    const eventDateObj = new Date(eventDate);
    return eventDateObj >= this.today;
  }

  // Open event details modal
  openEventDetails(event: any): void {
    this.selectedEvent = event;  // Store the selected event details
    this.showModal = true;
  }

  // Close the modal
  closeModal(): void {
    this.showModal = false;
    this.selectedEvent = null; // Clear selected event when closing modal
  }

  // Handle the join event action
  joinEvent(event: any): void {
    if (this.canJoin(event.date)) {
      // Logic for joining the event can be added here, e.g., call an API to register
      console.log(`Joined event: ${event.title}`);
      // Close the modal after joining the event
      this.closeModal();
    } else {
      alert("This event has already occurred or is not yet available.");
    }
  }
}
