import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class InvoicesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: Prisma.InvoiceCreateArgs) {
    return this.prisma.invoice.create(createDto);
  }

  findAll(findManyDto?: Prisma.InvoiceFindManyArgs) {
    return this.prisma.invoice.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.InvoiceFindFirstArgs) {
    return this.prisma.invoice.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.InvoiceUpdateArgs) {
    return this.prisma.invoice.update(updateDto);
  }

  delete(deleteDto: Prisma.InvoiceDeleteArgs) {
    return this.prisma.invoice.delete(deleteDto);
  }
}
