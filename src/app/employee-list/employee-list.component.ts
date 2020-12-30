import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employee:EmployeeService) { }

  public collection:any=[];
  ngOnInit(): void {
    this.employee.getEmployeeList().subscribe((result)=>{
      console.warn(result);
      this.collection=result;

    })
  }

}
