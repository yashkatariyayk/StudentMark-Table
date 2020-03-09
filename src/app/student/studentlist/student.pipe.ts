import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "student"
})
export class StudentPipe implements PipeTransform {
  transform(value: any, searchbar: any): any {
    return value.filter(function(search) {
      return search.Name.toLowerCase().indexOf(searchbar.toLowerCase()) > -1;
    });
  }
}
