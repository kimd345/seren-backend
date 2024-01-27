import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LykdatService } from './lykdat.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://cloudapi.lykdat.com/v1',
    }),
  ],
  providers: [LykdatService],
  exports: [LykdatService],
})
export class LykdatModule {}
