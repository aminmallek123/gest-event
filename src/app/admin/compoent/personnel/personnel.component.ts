import { Component, OnInit } from '@angular/core';
import {  PersonnelService } from '../../service/personnel.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  currentPage = 1;
  showAddModal = false;
  showDetailsModal = false; // Modal pour afficher les détails
  personnel: any[] = [];
  selectedPersonnel: any | null = null; // Détails du personnel sélectionné

  // Formulaire pour ajouter un personnel
  personnelData = {
    name: '',
    email: '',
    phone: '',
    role: '',
    disponible: true,
  };

  constructor(private personnelService: PersonnelService) {}

  ngOnInit(): void {
    this.getAllPersonnels();
  }

  // Récupérer tous les personnels
  getAllPersonnels(): void {
    this.personnelService.getAllPersonnels().subscribe({
      next: (data) => {
        this.personnel = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des personnels', err);
      }
    });
  }

  // Sélectionner la page de pagination
  setPage(page: number): void {
    this.currentPage = page;
  }

  // Afficher/masquer le modal
  toggleModal(): void {
    this.showAddModal = !this.showAddModal;
  }

  // Afficher/masquer le modal de détails
  toggleDetailsModal(person: any): void {
    this.selectedPersonnel = person;
    this.showDetailsModal = !this.showDetailsModal;
  }

  // Supprimer un personnel
  deletePersonnel(id: string): void {
    if (confirm('Voulez-vous vraiment supprimer ce personnel ?')) {
      this.personnelService.deletePersonnel(id).subscribe({
        next: () => {
          this.getAllPersonnels();
        },
        error: (err) => {
          console.error('Erreur lors de la suppression', err);
        }
      });
    }
  }

  // Soumettre le formulaire pour ajouter un personnel
  addPersonnel(): void {
    const newPersonnel = {
      name: this.personnelData.name,
      email: this.personnelData.email,
      phone: this.personnelData.phone,
      role: this.personnelData.role,
      disponible: this.personnelData.disponible
    };

    this.personnelService.createPersonnel(newPersonnel).subscribe({
      next: (data) => {
        this.toggleModal(); // Fermer le modal après la création
        this.getAllPersonnels(); // Rafraîchir la liste des personnels
      },
      error: (err) => {
        console.error('Erreur lors de la création du personnel', err);
      }
    });
  }
}
