import { Component } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  employee : Employee ;
  result : string;
  employeeArr : Employee[];
  flag : boolean;
  EmployeeArr: Employee[] = [];


  constructor(private service : EmployeeService){
    this.employee = new Employee();
    this.result = "";
    this.employeeArr = [];
    this.flag = false;
  }

  insertemployee(data : any)
  {
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.result = this.service.insertemployee(this.employee);
  }

updateemployee(data : any)
  {
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.result = this.service.updateEmployee(this.employee);
  }

deleteemployee(data : any){
  this.result = this.service.deleteEmployee(data.empId);
}

findAllemployee(){
  this.employeeArr = this.service.findAllEmployee();
  this.flag = true;
}

findemployee(data:any){
  this.employee = this.service.findEmployee(data.empId);
  this.result = this.employee.id+" "+this.employee.empName+" "+this.employee.empSalary;
}

}
