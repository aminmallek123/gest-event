import { Component } from '@angular/core';

@Component({
  selector: 'app-course-cards',
  templateUrl: './course-cards.component.html',
  styleUrls: ['./course-cards.component.css']
})
export class CourseCardsComponent {
  services = [
    {
      id: 1,
      type: 'Conference',
      title: 'Figma UI UX Design',
      description: 'Use Figma to get a job in UI Design, User Interface, User Experience design.',
      image: 'https://cdn.dribbble.com/users/897137/screenshots/18172918/figma_4x.jpg',
      seatsLeft: 3,
      date: new Date('2024-04-15'),
    },
    {
      id: 2,
      type: 'Workshop',
      title: 'Figma UI UX Design',
      description: 'Use Figma to get a job in UI Design, User Interface, User Experience design.',
      image: 'https://cdn.dribbble.com/users/897137/screenshots/18172918/figma_4x.jpg',
      seatsLeft: 3,
      date: new Date('2025-05-01'),
    },
    {
      id: 3,
      type: 'Session',
      title: 'Figma UI UX Design',
      description: 'Use Figma to get a job in UI Design, User Interface, User Experience design.',
      image: 'https://cdn.dribbble.com/users/897137/screenshots/18172918/figma_4x.jpg',
      seatsLeft: 3,
      date: new Date('2025-04-10'),
    }
  ];
}
