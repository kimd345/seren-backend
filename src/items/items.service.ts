import { Injectable } from '@nestjs/common';
// import { CreateItemDto } from './dto/create-item.dto';
// import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  // create(createItemDto: CreateItemDto) {
  //   return 'This action adds a new item';
  // }

  findAll() {
    return this.prisma.item.findMany({ take: 100 });
  }

  findMany({ gender, product_category, condition, price }) {
    return this.prisma.item.findMany({
      where: {
        gender: gender,
        google_product_category: {
          contains: product_category,
        },
        condition: condition,
        price: {
          gte: price.min,
          lte: price.max,
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.item.findUnique({ where: { id } });
  }

  // update(id: number, updateItemDto: UpdateItemDto) {
  //   return `This action updates a #${id} item`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} item`;
  // }
}
