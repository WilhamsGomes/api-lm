import { Module } from '@nestjs/common';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [InvoicesModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
