import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  currentPage = 1;
  showAddModal = false;
  categories: Category[] = [];

  // Pour l'ajout ou la modification
  categoryForm: Category = {
    name: '',
    description: ''
  };
  isEditing: boolean = false;
  editingCategoryId: string | null = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  setPage(page: number): void {
    this.currentPage = page;
  }

  toggleModal(): void {
    this.showAddModal = !this.showAddModal;
    if (!this.showAddModal) {
      this.resetForm();
    }
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
        console.log('Categories loaded:', this.categories);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des catégories', err);
      }
    });
  }

  addCategory(): void {
    if (this.isEditing && this.editingCategoryId) {
      // Modifier la catégorie existante
      this.categoryService.updateCategory(this.editingCategoryId, this.categoryForm).subscribe({
        next: () => {
          this.getAllCategories();
          this.toggleModal();
        },
        error: (err) => {
          console.error('Erreur lors de la modification', err);
        }
      });
    } else {
      // Ajouter une nouvelle catégorie
      this.categoryService.createCategory(this.categoryForm).subscribe({
        next: () => {
          this.getAllCategories();
          this.toggleModal();
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout', err);
        }
      });
    }
  }

  editCategory(category: Category): void {
    this.isEditing = true;
    this.editingCategoryId = category.id ?? null;
    this.categoryForm = {
      name: category.name,
      description: category.description
    };
    this.toggleModal();
  }

  deleteCategory(id: string | undefined): void {
    if (!id) return;
    if (confirm('Voulez-vous vraiment supprimer cette catégorie ?')) {
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          this.getAllCategories();
        },
        error: (err) => {
          console.error('Erreur lors de la suppression', err);
        }
      });
    }
  }

  resetForm(): void {
    this.categoryForm = { name: '', description: '' };
    this.isEditing = false;
    this.editingCategoryId = null;
  }
}
