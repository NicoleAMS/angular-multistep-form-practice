import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { FormData } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  title = 'Thanks for staying tuned!';
  @Input() formData: FormData;
  isFormValid = false;
  addressArray = [
    '12 Churchill Gardens, , , , , Newcastle upon Tyne, Tyne and Wear',
    '14 Churchill Gardens, , , , , Newcastle upon Tyne, Tyne and Wear',
    '16 Churchill Gardens, , , , , Newcastle upon Tyne, Tyne and Wear',
    '18 Churchill Gardens, , , , , Newcastle upon Tyne, Tyne and Wear',
    '2 Churchill Gardens, , , , , Newcastle upon Tyne, Tyne and Wear',
    '20 Churchill Gardens, , , , , Newcastle upon Tyne, Tyne and Wear',
    '22 Churchill Gardens, , , , , Newcastle upon Tyne, Tyne and Wear',
    '4 Churchill Gardens, , , , , Newcastle upon Tyne, Tyne and Wear',
    'Holy Trinity Church, Churchill Gardens, , , , Newcastle upon Tyne, Tyne and Wear'
  ];

  constructor(private formDataService: FormDataService, private http: Http) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();
    console.log('Result feature loaded!');
  }

  submit() {
    alert('Excellent job!');
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }

  click() {
    const zip = this.formData.zip;
    console.log(this.addressArray);
    // const api = this.http.get(`https://api.getAddress.io/find/${zip}?api-key=`);
    // api.subscribe(
    //   res => {
    //     this.data = res.json();
    //     // const array = this.data.addresses.split('",');
    //     console.log('Data: ', this.data.addresses);
    //   },
    //   err => console.log('Error: ', err)
    // );
  }

}
