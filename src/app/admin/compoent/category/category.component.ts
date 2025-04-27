import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  currentPage = 1
  showAddModal = false
 categorys:any[] = [
    { id: 1, name: 'cermonie' }, 
    { id: 1, name: 'workshop' },
    { id: 1, name: 'session' }, 
 ]
  setPage(page: number) {
    this.currentPage = page
  }

  toggleModal() {
    this.showAddModal = !this.showAddModal
  }
}
