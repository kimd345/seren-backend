import { Item } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ItemEntity implements Item {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  google_product_category: string;

  @ApiProperty()
  product_type: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  image_link: string;

  @ApiProperty()
  condition: string;

  @ApiProperty()
  availability: string;

  @ApiProperty()
  price: string;

  @ApiProperty()
  sale_price: string;

  @ApiProperty({ required: false, nullable: true })
  gender: string | null;

  @ApiProperty()
  age_group: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  size: string;

  @ApiProperty({ type: () => [String] })
  deals: string[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
