import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'price', standalone: true })
export class PricePipe implements PipeTransform {
  transform(value: number | string, currency: string = '৳'): string {
    const num = typeof value === 'string' ? Number(value) : value;
    if (isNaN(num as number)) return `${currency}0`;
    return `${currency}${(num as number).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  }
}
