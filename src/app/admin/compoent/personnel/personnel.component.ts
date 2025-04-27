import { Component } from '@angular/core';
interface Personnel {
  id: number
  name: string
  phone: string
  email: string
  role: string
  availability: string
}
@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent {
  currentPage = 1
  showAddModal = false

  personnel: Personnel[] = [
    { id: 1, name: 'Steg', phone: 'conference', email: '10-06-2023', role: 'ISIMS', availability: 'panne cable' },
    { id: 2, name: 'Sonede', phone: 'workshop', email: '19-03-2023', role: 'ISIMS', availability: 'lorem' },
    { id: 3, name: 'jardinage', phone: 'workshop', email: '01-12-2022', role: 'ISIMS', availability: 'lorem' },
    { id: 4, name: 'Travaux', phone: 'workshop', email: '09-09-2022', role: 'ISIMS', availability: 'lorem' },
    { id: 5, name: 'ménage', phone: 'workshop', email: '25-04-2022', role: 'ISIMS', availability: 'lorem' },
    { id: 6, name: 'Gardin', phone: 'workshop', email: '01-01-2021', role: 'ISIMS', availability: 'securiter blocs' },
    { id: 7, name: 'ONAS', phone: 'workshop', email: '01-01-2021', role: 'ISIMS', availability: 'lorem' },
  ]

  setPage(page: number) {
    this.currentPage = page
  }

  toggleModal() {
    this.showAddModal = !this.showAddModal
  }
}
