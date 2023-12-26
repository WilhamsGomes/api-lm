import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class OptionalMonthParseIntPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'undefined') {
      return undefined;
    }
    if (value) {
      value = parseInt(value);
    }

    if (isNaN(value) || value < 1 || value > 12) {
      throw new BadRequestException(
        'Validation failed - value must be between 1 and 12',
      );
    }
    return value;
  }
}

@Injectable()
export class OptionalYearParseIntPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'undefined') {
      return undefined;
    }
    if (value) {
      value = parseInt(value);
    }

    if (isNaN(value) || value < 1900 || value > new Date().getFullYear()) {
      throw new BadRequestException('Validation year failed');
    }
    return value;
  }
}
