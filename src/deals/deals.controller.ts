import {
  Controller,
  // Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  // Query,
} from '@nestjs/common';
import {
  // ApiQuery,
  ApiTags,
  // ApiCreatedResponse,
  // ApiOkResponse,
} from '@nestjs/swagger';
import { DealsService } from './deals.service';
// import { DealEntity } from './entities/deal.entity';
import { CreateDealDto } from './dto/create-deal.dto';
import { LykdatService } from 'src/lykdat/lykdat.service';
// import { UpdateDealDto } from './dto/update-deal.dto';

@Controller('deals')
@ApiTags('deals')
export class DealsController {
  constructor(
    private readonly dealsService: DealsService,
    private readonly lykdatService: LykdatService,
  ) {}

  @Post()
  async create(@Body() createDealDto: CreateDealDto) {
    const { recipientEmail, searchedItemId, image_link } = createDealDto;
    console.log('createDealDto: ', createDealDto);
    const deals = await this.lykdatService.globalSearchByImageUrl(image_link);
    console.log('deals: ', deals.data.result_groups[0].similar_products[0]);

    return this.dealsService.createMany(
      recipientEmail,
      searchedItemId,
      deals.data,
    );
  }

  // @Get()
  // findAll() {
  //   return this.dealsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dealsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDealDto: UpdateDealDto) {
  //   return this.dealsService.update(+id, updateDealDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dealsService.remove(+id);
  // }
}
