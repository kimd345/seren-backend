/*
  Warnings:

  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Deal" DROP CONSTRAINT "Deal_searchedItemId_fkey";

-- AlterTable
ALTER TABLE "Deal" ALTER COLUMN "searchedItemId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_searchedItemId_fkey" FOREIGN KEY ("searchedItemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
