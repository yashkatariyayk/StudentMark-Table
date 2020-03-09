import { StudentService } from "./../../service/student.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import Student from "../student";

@Component({
  selector: "app-add-edit-student",
  templateUrl: "./add-edit-student.component.html"
})
export class AddEditStudentComponent implements OnInit {
  registerForm: FormGroup;
  //User: Object;
  students: Student[];
  student: Student;
  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private studentservice: StudentService
  ) {
    this.createForm();
  }

  createForm() {
    // Reactive Form
    this.registerForm = this.formBuilder.group({
      Name: ["", Validators.required],
      Maths: ["", Validators.required],
      Physics: ["", Validators.required],
      Science: ["", Validators.required],
      Total: ["", Validators.required],
      Avg: ["", Validators.required, Validators.minLength(3)]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {});
    this.student = new Student();

    this.getId();
  }

  addStudent(student) {
    this.studentservice.addStudent(student);
  }

  getId() {
    this.route.params.subscribe(params => {
      this.studentservice
        .editStudent(params["id"])
        .subscribe((res: Student) => {
          if (res) {
            this.student = res;
          } else {
            this.student = new Student();
          }
        });
      this.edit = params["id"];
    });
  }
  updateStudent(student) {
    this.route.params.subscribe(params => {
      this.studentservice.updateStudent(student, params["id"]);
    });
  }
}
