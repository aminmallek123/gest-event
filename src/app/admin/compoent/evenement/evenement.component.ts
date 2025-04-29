import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../evenement.service';
import { PersonnelService } from '../../service/personnel.service';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  events: any[] = [];
  personnels: any; // Liste des personnels disponibles
  categories: any[] = []; 
  category:any ;
  eventData = {
    title: '',
    date: '',
    lieu: '',
    description: '',
    personnel: '', // Un seul ID de personnel sélectionné
    Max_participants: 0, // Nombre maximal de participants
    type: '', // Type de l'événement
    category: '' // Catégorie de l'événement
  };
  selectedPersonnel: string = ''; // Un seul personnel sélectionné (ID unique)
  showModal = false;
  showDeleteConfirmationModal = false;  // Control the visibility of the delete confirmation modal
  selectedEventToDelete: any; 
  currentPage = 1;

  constructor(
    private evenementservice: EvenementService,
    private personnelService: PersonnelService,
    private categoryservice: CategoryService
  ) { }

  ngOnInit() {
    this.getAllEvents();
    this.getAvailablePersonnels(); // Charger les personnels disponibles
    this.getCategories(); // Charger les catégories
  }

  // Récupérer tous les événements
  getAllEvents(): void {
    this.evenementservice.getAllEvents().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des événements', error);
      }
    });
  }

  // Récupérer les personnels disponibles
  getAvailablePersonnels(): void {
    this.personnelService.getAvailablePersonnels().subscribe({
      next: (data) => {
        this.personnels = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des personnels disponibles', error);
      }
    });
  }

  // Récupérer le personnel id
  getPersonnelById(): void {

    this.personnelService.getPersonnelById(this.eventData.personnel).subscribe({
      next: (data) => {
        this.personnels = data;
        console.log(this.personnels);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des personnels disponibles', error);
      }
    });
  }

  // Récupérer toutes les catégories
  getCategories(): void {
    this.categoryservice.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des catégories', error);
      }
    });
  }

  // Ouvrir/fermer le modal
  toggleModal(): void {
    this.showModal = !this.showModal;
  }
  getCatgoryByID(id:any) : Promise<void>{
    return new Promise((resolve, reject) => {
      this.categoryservice.getCategoryById(id).subscribe({
        next: (data) => {
          this.category = data;
          console.log('Catégorie chargée:', this.category);
          resolve();
        },
        error: (error) => {
          console.error('Erreur lors du chargement des catégories', error);
          reject(error);
        }
      });
    });
  }



  // Créer un événement
  async createEvent(): Promise<void> {
    await this.getPersonnelById();
    await this.getCatgoryByID(this.eventData.category);
    console.log(this.category)
    const newEvent = {
      title: this.eventData.title,
      date: this.eventData.date,
      lieu: this.eventData.lieu,
      description: this.eventData.description,
       // Un seul personnel sélectionné
       max_participants: this.eventData.Max_participants, // Nombre de participants
      type: this.eventData.type, // Type de l'événement
      category: this.category // Catégorie de l'événement
    };
    const data={
      "eventId":newEvent,
      "personnel":this.personnels[0]
    }
    console.log("new event", data);
    this.evenementservice.createEvent(data).subscribe({
      next: (data) => {
        console.log('Événement créé', data);
        this.toggleModal(); // Fermer le modal après création
        this.getAllEvents(); // Rafraîchir la liste des événements
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'événement', error);
      }
    });
  }

  // Confirm deletion of an event
  openDeleteConfirmation(event: any): void {
    this.selectedEventToDelete = event;
    this.showDeleteConfirmationModal = true;
  }

  // Delete the event after confirmation
  deleteEvent(): void {
    if (this.selectedEventToDelete) {
      this.evenementservice.deleteEvent(this.selectedEventToDelete.id).subscribe({
        next: () => {
          console.log('Event deleted');
          this.showDeleteConfirmationModal = false;
          this.getAllEvents(); // Refresh events list
        },
        error: (error) => {
          console.error('Error deleting event', error);
        }
      });
    }
  }

   // Close the delete confirmation modal
   closeDeleteConfirmation(): void {
    this.showDeleteConfirmationModal = false;
    this.selectedEventToDelete = null;
  }
}
