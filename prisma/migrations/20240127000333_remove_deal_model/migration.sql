/*
  Warnings:

  - You are about to drop the `Deal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Deal" DROP CONSTRAINT "Deal_recipientEmail_fkey";

-- DropForeignKey
ALTER TABLE "Deal" DROP CONSTRAINT "Deal_searchedItemId_fkey";

-- DropTable
DROP TABLE "Deal";
