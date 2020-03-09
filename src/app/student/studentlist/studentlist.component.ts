import { StudentService } from "./../../service/student.service";
import { Component, OnInit } from "@angular/core";
import Student from "../student";

@Component({
  selector: "app-studentlist",
  templateUrl: "./studentlist.component.html"
})
export class StudentlistComponent implements OnInit {
  [x: string]: any;
  students: Student[] = [];
  data: any;
  searchname: string = "";

  constructor(private studentservice: StudentService) {}

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    this.studentservice.getStudent().subscribe((student: Student[]) => {
      this.students = student;
    });
  }

  getMark() {}

  //Delete Products
  deleteStudent(id) {
    this.studentservice.deleteStudent(id).subscribe(newData => {
      this.data = newData;
      console.log(this.data);
      console.log("Deleted");
      this.getStudent();
    });
  }
}
