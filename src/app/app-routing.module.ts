import { AddEditStudentComponent } from "./student/add-edit-student/add-edit-student.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentlistComponent } from "./student/studentlist/studentlist.component";

const routes: Routes = [
  { path: "", redirectTo: "/student", pathMatch: "full" },
  { path: "addstudent", component: AddEditStudentComponent },
  { path: "edit/:id", component: AddEditStudentComponent },
  { path: "student", component: StudentlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
