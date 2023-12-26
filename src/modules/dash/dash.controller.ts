import { Controller, Get, Query } from '@nestjs/common';
import { DashService } from './dash.service';
import { ReadDashDto } from './dto/read-dash.dto';
import {
  OptionalMonthParseIntPipe,
  OptionalYearParseIntPipe,
} from 'src/shared/pipes/OptionalParseIntPipe';

@Controller('dash')
export class DashController {
  constructor(private readonly dashService: DashService) {}

  @Get('/electricity')
  getElectricity(
    @Query('gte_month', new OptionalMonthParseIntPipe()) gte_month: number,
    @Query('lte_month', new OptionalMonthParseIntPipe()) lte_month: number,
    @Query('year', new OptionalYearParseIntPipe()) year: number,
    @Query() params: ReadDashDto,
  ) {
    const dataParams = {
      ...params,
      ...(year ? { year } : { year: new Date().getFullYear() }),
      ...(gte_month && { gte_month }),
      ...(lte_month && { lte_month }),
      columns: ['amount_electricity', 'amount_sceee'],
    };
    return this.dashService.getAggregatedDate(dataParams);
  }

  @Get('/compensated')
  getCompensated(
    @Query('gte_month', new OptionalMonthParseIntPipe()) gte_month: number,
    @Query('lte_month', new OptionalMonthParseIntPipe()) lte_month: number,
    @Query('year', new OptionalYearParseIntPipe()) year: number,
    @Query() params: ReadDashDto,
  ) {
    const dataParams = {
      ...params,
      ...(year ? { year } : { year: new Date().getFullYear() }),
      ...(gte_month && { gte_month }),
      ...(lte_month && { lte_month }),
      columns: ['amount_compensated'],
    };
    return this.dashService.getAggregatedDate(dataParams);
  }

  @Get('/value-total')
  getAmountElectricity(
    @Query('gte_month', new OptionalMonthParseIntPipe()) gte_month: number,
    @Query('lte_month', new OptionalMonthParseIntPipe()) lte_month: number,
    @Query('year', new OptionalYearParseIntPipe()) year: number,
    @Query() params: ReadDashDto,
  ) {
    const dataParams = {
      ...params,
      ...(year ? { year } : { year: new Date().getFullYear() }),
      ...(gte_month && { gte_month }),
      ...(lte_month && { lte_month }),
      columns: ['value_electricity', 'value_sceee', 'value_street'],
    };
    return this.dashService.getAggregatedDate(dataParams);
  }

  @Get('/value-compensated')
  getAmountCompensated(
    @Query('gte_month', new OptionalMonthParseIntPipe()) gte_month: number,
    @Query('lte_month', new OptionalMonthParseIntPipe()) lte_month: number,
    @Query('year', new OptionalYearParseIntPipe()) year: number,
    @Query() params: ReadDashDto,
  ) {
    const dataParams = {
      ...params,
      ...(year ? { year } : { year: new Date().getFullYear() }),
      ...(gte_month && { gte_month }),
      ...(lte_month && { lte_month }),
      columns: ['value_compensated'],
    };
    return this.dashService.getAggregatedDate(dataParams);
  }
}
