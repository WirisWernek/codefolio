import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit',
  standalone: true
})
export class LimitPipe implements PipeTransform {
	transform(value: string, limite = 20): string {
	  return value.length > limite ? value.substring(0, limite) + '...' : value
	}
  }
