import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'convertToPersianDate'
})
export class ConvertToPersianDatePipe implements PipeTransform {

  convertToJalaliMonth(monthNumber?:string | number){

    switch (monthNumber) {
      case '01':
        return 'فروردین'
      case '02':
        return 'اردیبهشت'
      case '03':
        return 'خرداد'
      case '04':
        return 'تیر'
      case '05':
        return 'مرداد'
      case '06':
        return 'شهریور'
      case '07':
        return 'مهر'
      case '08':
        return 'آبان'
      case '09':
        return 'آذر'
      case '10':
        return 'دی'
      case '11':
        return 'بهمن'
      case '12':
        return 'اسفند'
      default:
        return ''
    }

  }

  transform(value?: string): any {

    const date = moment(value, 'YYYY/M/D');
    const year =  date.format('jYYYY');
    const month =  this.convertToJalaliMonth(date.format('jMM'));
    const day =  date.format('jDD');

    return `${day} ${month} ${year}`;
  }

}
