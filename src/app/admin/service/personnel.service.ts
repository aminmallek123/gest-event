import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface Personnel {
//   id: string | undefined; // UUID
//   name: string;
//   email: string;
//   password?: string;
//   phone?: string;
//   role?: string;
//   disponible?: boolean;
// }

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private apiUrl = 'http://localhost:8080/api/personnels'; // L'URL du backend

  constructor(private http: HttpClient) { }

  // Récupérer tous les personnels
  getAllPersonnels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/`);
  }

  // Récupérer tous les personnels disponibles
  getAvailablePersonnels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/available`);
  }

  // Créer un personnel
  createPersonnel(personnel: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, personnel);
  }

  // Mettre à jour un personnel
  updatePersonnel(id: string, personnel: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, personnel);
  }

  // Supprimer un personnel
  deletePersonnel(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Récupérer un personnel par ID
  getPersonnelById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
