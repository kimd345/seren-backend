import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [PrismaModule, ItemsModule, UsersModule, DealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
