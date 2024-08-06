import { Component } from '@angular/core';
import { Student } from './model/student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
// title(title :any){
//   throw new Error('Method not implemented. ');
// }

  student : Student ;
  result : string;
  studentArr : Student[];
  flag : boolean;

  constructor(private service : StudentService){
    this.student = new Student();
    this.result = "";
    this.studentArr = [];
    this.flag = false;
}

insertstudent(data : any)
  {
    this.student.id = data.stdid;
    this.student.stdName = data.stduser;
    this.student.stdmark = data.stdmark;
    this.result = this.service.insertstudent(this.student);
  }

updatestudent(data : any)
  {
    this.student.id = data.stdid;
    this.student.stdName = data.stduser;
    this.student.stdmark = data.stdmark;
    this.result = this.service.updateStudent(this.student);
  }

deletestudent(data : any){
  this.result = this.service.deleteStudent(data.stdid);
}

findstudent(data:any){
  this.student = this.service.findStudent(data.stdid);
  this.result = this.student.id+" "+this.student.stdName+" "+this.student.stdmark;
}

findAllstudent(){
  this.studentArr = this.service.findAllStudent();
  this.flag = true
}

}
