import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  // Delete,
  Query,
} from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger'; // Import ApiQuery
import { ItemsService } from './items.service';
// import { CreateItemDto } from './dto/create-item.dto';
// import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // @Post()
  // create(@Body() createItemDto: CreateItemDto) {
  //   return this.itemsService.create(createItemDto);
  // }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get('search')
  @ApiQuery({ name: 'gender', required: false })
  @ApiQuery({ name: 'product_category', required: false })
  @ApiQuery({ name: 'condition', required: false })
  @ApiQuery({ name: 'priceMin', required: false })
  @ApiQuery({ name: 'priceMax', required: false })
  async findMany(
    @Query('gender') gender?: string,
    @Query('product_category') productCategory?: string,
    @Query('condition') condition?: string,
    @Query('priceMin') priceMin?: number,
    @Query('priceMax') priceMax?: number,
  ) {
    const priceFilter = {
      min: priceMin,
      max: priceMax,
    };

    return this.itemsService.findMany({
      gender,
      product_category: productCategory,
      condition,
      price: priceFilter,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
  //   return this.itemsService.update(+id, updateItemDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.itemsService.remove(+id);
  // }
}
