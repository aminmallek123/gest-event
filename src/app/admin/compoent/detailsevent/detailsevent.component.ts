import { Component, Input, OnInit } from '@angular/core';
import { AffectationService } from '../../service/affectation.service';
import { PersonnelService } from '../../service/personnel.service';

@Component({
  selector: 'app-detailsevent',
  templateUrl: './detailsevent.component.html',
  styleUrls: ['./detailsevent.component.css']
})
export class DetailseventComponent implements OnInit {
  @Input() idEvent: any;
  showViewModal: boolean = false;
  showRegistrationsModal: boolean = false;
  showDeleteConfirmationModal: boolean = false;
  selectedEvent: any;
  selectedPersonnel: any = null;
  registrationPage: number = 1;

  constructor(
    private affectationService: AffectationService,
    private personnelService: PersonnelService
  ) {}

  ngOnInit() {}

  // Method to open the event modal and fetch event details
  openViewModal(): void {
    this.showViewModal = true;
    this.getEventDetails(this.idEvent); // Fetch event details using idEvent
  }

  // Get event details along with personnel by id
  getEventDetails(eventId: any): void {
    this.affectationService.getAffectationsByEventId(eventId).subscribe({
      next: (data) => {
        this.selectedEvent = data[0]; // Assuming only one event is returned
        console.log('Event loaded:', this.selectedEvent);
      },
      error: (err) => {
        console.error('Error fetching event details:', err);
      }
    });
  }

  // Handle registration view
  handleViewRegistrations(): void {
    this.showRegistrationsModal = true;
  }

  // Close the event view modal
  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedEvent = null;
  }

  // Close registration modal
  closeRegistrationsModal(): void {
    this.showRegistrationsModal = false;
  }

  // Open delete confirmation for personnel
  openDeleteConfirmation(personnel: any): void {
    this.selectedPersonnel = personnel;
    this.showDeleteConfirmationModal = true;
  }

  // Delete selected personnel after confirmation
  deletePersonnel(): void {
    if (this.selectedPersonnel) {
      this.personnelService.deletePersonnel(this.selectedPersonnel.id).subscribe({
        next: () => {
          console.log('Personnel deleted:', this.selectedPersonnel);
          this.showDeleteConfirmationModal = false; // Close the confirmation modal
          this.getEventDetails(this.idEvent); // Refresh the event details
        },
        error: (err) => {
          console.error('Error deleting personnel:', err);
        }
      });
    }
  }

  // Close the delete confirmation modal
  closeDeleteConfirmation(): void {
    this.showDeleteConfirmationModal = false;
    this.selectedPersonnel = null;
  }

  // Set the page for registration view
  setRegistrationPage(page: number): void {
    this.registrationPage = page;
  }
}
