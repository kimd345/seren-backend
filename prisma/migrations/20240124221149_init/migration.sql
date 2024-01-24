-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "google_product_category" TEXT NOT NULL,
    "product_type" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "sale_price" TEXT NOT NULL,
    "gender" TEXT,
    "age_group" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deal" (
    "id" TEXT NOT NULL,
    "average_score" DOUBLE PRECISION NOT NULL,
    "detectedItemName" TEXT NOT NULL,
    "detectionConfidence" DOUBLE PRECISION NOT NULL,
    "brand_name" TEXT,
    "category" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "gender" TEXT,
    "matching_image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "reduced_price" TEXT,
    "score" DOUBLE PRECISION NOT NULL,
    "sub_category" TEXT,
    "url" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "recipientEmail" TEXT NOT NULL,
    "searchedItemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_recipientEmail_fkey" FOREIGN KEY ("recipientEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_searchedItemId_fkey" FOREIGN KEY ("searchedItemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
