import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { InvoicesRepository } from 'src/shared/database/repositories/invoices.repositories';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService, InvoicesRepository],
})
export class InvoicesModule {}
