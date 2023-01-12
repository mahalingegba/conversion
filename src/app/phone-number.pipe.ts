import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  transform(rawNumber: string) {
    //rawNumber = `+91` + rawNumber;

    const contryCode = rawNumber.slice(0, 3);
    const areaCode = rawNumber.slice(3, 5);
    const midDate = rawNumber.slice(5, 7);
    const last = rawNumber.slice(7);

    return `${contryCode} (${areaCode}) ${midDate}-${last}`;
  }
}
