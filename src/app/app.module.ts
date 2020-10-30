import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { FormsModule } from '@angular/forms';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { ButtonComponent } from './button/button.component';
import { Routes , RouterModule } from '@angular/router';
const appRoutes : Routes =[

  {path: 'form' ,component : FormComponent},
  {path: 'insert' ,component : InsertFormComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PatientTableComponent,
    InsertFormComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
