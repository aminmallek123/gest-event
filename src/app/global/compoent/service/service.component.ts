import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  @Input() services: any[]= [];
  
  today = new Date();
  
 
 
}
