import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-evenement',
  templateUrl: './detail-evenement.component.html',
  styleUrls: ['./detail-evenement.component.css']
})
export class DetailEvenementComponent {
  serviceId: string | null = null;
  constructor(private route: ActivatedRoute, private router: Router) {
      this.route.paramMap.subscribe(params => {
        this.serviceId = params.get('id');
      });
    }
   ngOnInit() {
      this.serviceId = this.route.snapshot.paramMap.get('id');
    }
    join() {
      this.router.navigate(['/inscription', this.serviceId]);
    }
}
