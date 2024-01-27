// import { Deal } from '@prisma/client';
// import { ApiProperty } from '@nestjs/swagger';

// import { ItemEntity } from 'src/items/entities/item.entity';

// export class DealEntity implements Deal {
//   @ApiProperty()
//   id: string;

//   @ApiProperty()
//   average_score: number;

//   @ApiProperty()
//   detectedItemName: string;

//   @ApiProperty()
//   detectionConfidence: number;

//   @ApiProperty({ required: false, nullable: true })
//   brand_name: string | null;

//   @ApiProperty()
//   category: string;

//   @ApiProperty()
//   currency: string;

//   @ApiProperty({ required: false, nullable: true })
//   gender: string | null;

//   @ApiProperty()
//   matching_image: string;

//   @ApiProperty()
//   name: string;

//   @ApiProperty()
//   price: string;

//   @ApiProperty({ required: false, nullable: true })
//   reduced_price: string | null;

//   @ApiProperty()
//   score: number;

//   @ApiProperty({ required: false, nullable: true })
//   sub_category: string | null;

//   @ApiProperty()
//   url: string;

//   @ApiProperty()
//   vendor: string;

//   @ApiProperty()
//   recipientEmail: string;

//   //   @ApiProperty({ type: () => UserEntity })
//   //   recipient: UserEntity;

//   @ApiProperty()
//   searchedItemId: string;

//   @ApiProperty({ type: () => ItemEntity })
//   searchedItem: ItemEntity;

//   @ApiProperty()
//   createdAt: Date;

//   @ApiProperty()
//   updatedAt: Date;
// }
