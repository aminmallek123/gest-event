import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface pour typer une Affectation
export interface Affectation {
  id?: string; // UUID
  eventId: string; // ID de l'événement
  personnel: string[]; // Liste des IDs des personnels
}

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  private apiUrl = 'http://localhost:8080/api/affectations'; // L'URL du backend pour les affectations

  constructor(private http: HttpClient) { }

  // Créer une affectation
  createAffectation(affectation: Affectation): Observable<Affectation> {
    return this.http.post<Affectation>(`${this.apiUrl}/create`, affectation);
  }

  // Récupérer une affectation par ID
  getAffectationById(id: string): Observable<Affectation> {
    return this.http.get<Affectation>(`${this.apiUrl}/${id}`);
  }

  // Récupérer toutes les affectations
  getAllAffectations(): Observable<Affectation[]> {
    return this.http.get<Affectation[]>(`${this.apiUrl}/`);
  }

  // Récupérer les affectations par événement
  getAffectationsByEventId(eventId: string): Observable<Affectation[]> {
    return this.http.get<Affectation[]>(`${this.apiUrl}/event/${eventId}`);
  }
}
