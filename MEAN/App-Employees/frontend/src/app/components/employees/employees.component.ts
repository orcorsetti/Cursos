import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { from } from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  addEmployee(form: NgForm) {
    if(form.value._id){
      this.employeeService.putEmployee(form.value)
        .subscribe(res=>{
          this.resetForm(form);
          this.getEmployees();
          M.toast({html: 'Employee Updated'});
        });
    } else {
      this.employeeService.postEmployee(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        this.getEmployees();
        M.toast({html: 'Employee Saved'});
      });
    }
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res=> {
        this.employeeService.employees = res as Employee[];
        console.log(res)
      });
  }

  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
      this.getEmployees();
    }
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(employee: Employee){
    if(confirm(`Sure you want to delete ${employee.name}?`)){
      this.employeeService.deleteEmployee(employee)
      .subscribe(res =>{
        this.getEmployees();
        M.toast({html: 'Employee Deleted'})
      });
    }
  }

}
