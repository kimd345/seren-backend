import { Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DealsService {
  constructor(private prisma: PrismaService) {}

  createMany(recipientEmail, searchedItemId, dealsData) {
    // return this.prisma.deal.createMany({
    // }
  }

  // findAll() {
  //   return `This action returns all deals`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} deal`;
  // }

  // update(id: number, updateDealDto: UpdateDealDto) {
  //   return `This action updates a #${id} deal`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} deal`;
  // }
}
