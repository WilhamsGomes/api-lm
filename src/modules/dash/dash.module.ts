import { Module } from '@nestjs/common';
import { DashService } from './dash.service';
import { DashController } from './dash.controller';
import { DashRepository } from 'src/shared/database/repositories/dash.repositories';

@Module({
  controllers: [DashController],
  providers: [DashService, DashRepository],
})
export class DashModule {}
