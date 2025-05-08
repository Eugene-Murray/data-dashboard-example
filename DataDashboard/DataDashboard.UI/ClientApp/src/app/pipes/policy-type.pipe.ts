import { Pipe, PipeTransform } from '@angular/core';
import { policyTypeToString } from '../common/helpers';
@Pipe({
  name: 'policyType'
})
export class PolicyTypePipe implements PipeTransform {
  transform(value: number | unknown): string {
    return policyTypeToString(value);
  }
}
