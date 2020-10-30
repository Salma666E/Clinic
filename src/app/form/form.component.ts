import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data: Object;
  loading: boolean;
  hide=false;
  phone;
  constructor(private http: HttpClient) {}


  makeRequest(): void {
    this.loading = true;
    this.http.post('http://localhost/backend/search.php',this.phone).subscribe(data => {
    this.data = data;
   // console.table(data.meds); 
    this.loading = false;
    this.hide=true
    });
    }

  ngOnInit() {
  }

}
