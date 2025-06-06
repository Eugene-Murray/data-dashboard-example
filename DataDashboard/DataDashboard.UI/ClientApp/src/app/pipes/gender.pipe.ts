import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return value === 0 ? 'Male' : 'Female';
  }

}
