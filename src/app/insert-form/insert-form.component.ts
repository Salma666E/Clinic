import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {
  name;
  phone;
  doctor;
  doctor_number;
  doc_master;
  test;
  hider=false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  insert(){
    let myJson={name:this.name,phone:this.phone,doctor_name:this.doctor,doctor_number:this.doctor_number,doc_master:this.doc_master,test:this.test}
    this.http.post('http://localhost/backend/create.php',myJson).subscribe(data=>{
      console.log(data);
      this.hider=true
    });

}
}
