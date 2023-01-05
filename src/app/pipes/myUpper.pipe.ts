import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpper',
})
export class MyUpperPipe implements PipeTransform {
  transform(value: any, title: any) {
    if (title === 'titleCase') {
      value = value.split(' ').map((el: string) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase());
    }
    else if (title === 'firstname') {
      value = value.split(' ').map((el: string) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).at(0);
    }
    else {
      value = value.toLowerCase();
    }
    return value;
  }
}


  // value = value.split(' ').map((el: string) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).at(0);