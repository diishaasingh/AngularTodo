import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(date: string, format: string, use24Hour: boolean = true): string {
    const momentDate = moment(date);
    const formattedDate = momentDate.format(format);
    return use24Hour ? formattedDate : momentDate.format('');
  }
}
