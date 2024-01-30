import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})


export class EmployeeListComponent implements OnInit {

  api: string = "https://localhost:7013/api/Employee";
  data: Student[] = [];

  constructor(private http:HttpClient) {

  }
  

  ngOnInit(): void {

    this.http.get<Student[]>(this.api).subscribe({
      next: (res) => {
        this.data = res;
        console.log(res);
      }
    })



  }

}
