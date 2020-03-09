import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StudentComponent } from "./student/student.component";
import { AddEditStudentComponent } from "./student/add-edit-student/add-edit-student.component";
import { HttpClientModule } from "@angular/common/http";
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { StudentPipe } from './student/studentlist/student.pipe';

@NgModule({
  declarations: [AppComponent, StudentComponent, AddEditStudentComponent, StudentlistComponent, StudentPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
