import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  insert=false;
  form=false;
  
  constructor(private router : Router , private route :ActivatedRoute ) {
  }
  gotoinsert(): void {
   
    this.insert=true
    this.router.navigateByUrl('src\app\insert-form')
   
    };
    gotoform(): void {
   
      this.form=true
    
      };
  

  ngOnInit() {
  }

}
