import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  // transform(value: string, city: string): string {
  //   return 'City Name is:' + city;
  // }
  transform(value: string, city: string): string {
    return '<b>' + city + '</b>';
    // return '<div style="background-color:#fffff">' + city + '</div>';
    //return this.sanitizer.bypassSecurityTrustHtml;
  }
}
