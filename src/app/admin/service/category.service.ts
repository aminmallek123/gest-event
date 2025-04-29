import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Définir l'interface Category pour typer les données
export interface Category {
  id?: string; // UUID
  name: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:8080/api/categories'; // adapte si ton backend a une autre URL

  constructor(private http: HttpClient) { }

  // Créer une catégorie
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/create`, category);
  }

  // Mettre à jour une catégorie
  updateCategory(id: string, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/update/${id}`, category);
  }

  // Supprimer une catégorie
  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Récupérer une catégorie par ID
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  // Récupérer toutes les catégories
  getAllCategories(): Observable<any[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/`);
  }
}
