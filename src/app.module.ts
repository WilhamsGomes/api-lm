import { Module } from '@nestjs/common';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { DatabaseModule } from './shared/database/database.module';
import { DashModule } from './modules/dash/dash.module';

@Module({
  imports: [InvoicesModule, DatabaseModule, DashModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
