import { Component } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {
  events = [
    { id: 1, title: 'Hackathon', category: 'Informatique', date: '2025-05-01', location: 'Sfax', description: 'Concours de programmation' },
    { id: 2, title: 'Atelier UI/UX', category: 'Design', date: '2025-05-05', location: 'Tunis', description: 'Formation en design' },
    // autres events
  ];
  eventData = {
    title: '',
    date: '',
    location: '',
    description: ''
  };
  selectedPersonnel: string = '';
  showModal = false;
  imagePreview: string | null = null;
  currentPage = 1;
  setShowModal(value: boolean) {
    // logique d'ouverture/fermeture du modal
    console.log('showModal =', value);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.imagePreview = null;
  }

  handleImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
