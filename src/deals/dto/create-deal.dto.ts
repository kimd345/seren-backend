import { ApiProperty } from '@nestjs/swagger';

export class CreateDealDto {
  @ApiProperty()
  recipientEmail: string;

  @ApiProperty()
  searchedItemId: string;

  @ApiProperty()
  image_link: string;
}
