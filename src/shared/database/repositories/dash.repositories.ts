import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DashRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(findManyDto?: Prisma.InvoiceFindManyArgs) {
    return this.prisma.invoice.findMany(findManyDto);
  }

  findAggr(findAggr: Prisma.InvoiceAggregateArgs) {
    return this.prisma.invoice.aggregate(findAggr);
  }

  findGroupBy({ by, orderBy, where, _sum }: Prisma.InvoiceGroupByArgs) {
    return this.prisma.invoice.groupBy({
      by: by,
      _sum: _sum,
      where: where,
      orderBy: orderBy,
    });
  }
}
