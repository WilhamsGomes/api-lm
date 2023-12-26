import { Injectable } from '@nestjs/common';
import { DashRepository } from 'src/shared/database/repositories/dash.repositories';
import { IDashParams } from 'src/shared/@types/dash';
import { convertNumberToMonth } from 'src/shared/utils/convertNumberToMonth';

@Injectable()
export class DashService {
  constructor(private readonly dashRepos: DashRepository) {}

  async getAggregatedDate({
    aggr,
    num_client,
    gte_month,
    year,
    lte_month,
    columns,
  }: IDashParams) {
    const _sum = {};
    for (const column of columns) {
      _sum[column] = true;
    }

    if (aggr === 'count') {
      const sum = await this.dashRepos.findAggr({
        _sum,
        where: {
          num_client: num_client,
          account_year: year,
          account_month: { gte: gte_month, lte: lte_month },
        },
      });

      let data = 0;
      for (const column of columns) {
        data += sum._sum[column];
      }
      return { data };
    }

    const sumAggr = await this.dashRepos.findGroupBy({
      by: ['account_year', 'account_month'],
      _sum,
      where: {
        num_client: num_client,
        account_year: year,
        account_month: { gte: gte_month, lte: lte_month },
      },
      orderBy: {
        account_month: 'asc',
      },
    });

    const data = sumAggr.map((item) => {
      let sum = 0;
      for (const column of columns) {
        sum += item._sum[column];
      }
      return {
        sum,
        date: `${convertNumberToMonth(item.account_month)}/${
          item.account_year
        }`,
      };
    });

    return data;
  }
}
