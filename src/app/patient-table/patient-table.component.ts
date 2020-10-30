import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {
  @Input() patients;
  data: Object;
  loading: boolean;
  phone;
  constructor(private http: HttpClient) {}




  ngOnInit() {
  }
delete(phone){
  //delete code hena
  this.loading = true;
  let json={phone:phone};
    this.http.post('http://localhost/backend/delete.php',json).subscribe(response => {
    console.log(response);
    },(err)=>{console.log(err);}
    );
   
}
}
