import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import Student from "../student/student";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  student: Student[] = [];

  uri = "http://localhost:4000/student";

  constructor(private http: HttpClient) {}

  addStudent(student: Student) {
    return this.http
      .post(`${this.uri}/addstudent`, student)
      .subscribe(res => console.log("Add student"));
  }

  // To Get The List Of user
  getStudent() {
    return this.http.get(`${this.uri}`);
  }

  // To Get user Details For Single Record Using Id
  editStudent(id): Observable<any> {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  //To update user
  updateStudent(user, id) {
    this.http
      .post(`${this.uri}/update/${id}`, user)
      .subscribe(res => console.log("Update Done"));
  }

  // To Delete Any User
  deleteStudent(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
