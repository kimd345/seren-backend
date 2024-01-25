/*
  Warnings:

  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `searchedItemId` on the `Deal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Deal" DROP CONSTRAINT "Deal_searchedItemId_fkey";

-- AlterTable
ALTER TABLE "Deal" DROP COLUMN "searchedItemId",
ADD COLUMN     "searchedItemId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_searchedItemId_fkey" FOREIGN KEY ("searchedItemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
