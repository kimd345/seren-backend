import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { itemsCatalogSample } from './lykdat/lykdat_sample_file_edited.js';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  itemsCatalogSample.forEach(async (item) => {
    await prisma.item.upsert({
      where: { id: String(item.id) },
      update: {},
      create: {
        id: String(item.id),
        title: item.title,
        description: item.description,
        google_product_category: item.google_product_category,
        product_type: item.product_type,
        link: item.link,
        image_link: item.image_link,
        condition: item.condition,
        availability: item.availability,
        price: item.price,
        sale_price: item.sale_price,
        gender: item.gender,
        age_group: item.age_group,
        color: item.color,
        size: item.size,
        // deals
      },
    });

    const user = await prisma.user.findUnique({
      where: { email: 'dan@kim.com' },
    });

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: {},
      });
    } else {
      await prisma.user.create({
        data: {
          email: 'dan@kim.com',
          name: 'Dan Kim',
          password: await bcrypt.hash('password', roundsOfHashing),
        },
      });
    }
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
