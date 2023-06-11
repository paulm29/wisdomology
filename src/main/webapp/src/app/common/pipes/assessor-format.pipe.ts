import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'assessorFormat' })
export class AssessorFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return 'Unassigned';
    } else if (value === 'Unassigned') {
      return value;
    } else {
      const emailNameSplit = value.split('@')[0].split('.');
      return (emailNameSplit.length === 2
          ? emailNameSplit[0].substring(0, 1) + emailNameSplit[1].substring(0, 1)
          : emailNameSplit[0].substring(0, 2)
      ).toUpperCase();
    }
  }
}
