import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    console.log('Personal feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setPersonal(this.personal);
    console.log(this.personal);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/work']);
    }
  }

}
