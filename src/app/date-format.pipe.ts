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

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {
  transform(dueDateStr: string): string {
    const dueDate = new Date(dueDateStr);
    const now = new Date();
    const diffMs = dueDate.getTime() - now.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHrs = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);
    return `${diffDays}d ${diffHrs}h ${diffMins}m ${diffSecs}s`;
  }
}
