import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LykdatModule } from 'src/lykdat/lykdat.module';

@Module({
  controllers: [DealsController],
  providers: [DealsService],
  imports: [PrismaModule, LykdatModule],
})
export class DealsModule {}
