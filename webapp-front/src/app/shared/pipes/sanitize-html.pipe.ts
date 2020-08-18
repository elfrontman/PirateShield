import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: any, type: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
