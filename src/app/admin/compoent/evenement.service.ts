import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Définir l'interface Evenement pour typer les données
// export interface Evenement {
// category: any;
//   id?: string; // UUID
//   titre: string;
//   description: string;
//   dateD: Date;
//   lieu: string;
//   // Ajoute ici d'autres champs si besoin
// }

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private apiUrl = 'http://localhost:8080/api/evenements'; // Ton backend URL

  constructor(private http: HttpClient) { }

  // Créer un événement
  createEvent(evenement: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, evenement);
  }

  // Mettre à jour un événement
  updateEvent(id: string, evenement: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, evenement);
  }

  // Supprimer un événement
  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Récupérer un événement par ID
  getEventById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Récupérer tous les événements
  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/`);
  }

  // Récupérer les événements à venir
  getUpcomingEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/upcoming`);
  }

  // Récupérer les statistiques d'un événement
  getEventStatistics(eventId: string): Observable<string> {
    return this.http.get(`${this.apiUrl}/statistics/${eventId}`, { responseType: 'text' });
  }
}
