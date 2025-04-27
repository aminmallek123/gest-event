import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  eventId: string | null = null;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('id');
    });
  }
  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      const serviceID = 'service_txopbbj';
      const templateID = 'template_l532rbs';
      const publicKey = '-cmdNW_ZA2xpNt2ZG';
      const formData = form.value;
      console.log('Form Data:', formData);
      emailjs.send(serviceID, templateID, form.value, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Confirmation email sent!');
          form.resetForm();
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('Something went wrong while sending email.');
        });

    }
  }
}
