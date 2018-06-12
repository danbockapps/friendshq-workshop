import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from '../../shared/friend.model';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Friend, args: any): string {
    console.log(args);
    return `${value.firstName} ${value.lastName} is a ${args}`;
  }

}
