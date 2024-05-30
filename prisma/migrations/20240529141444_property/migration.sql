/*
  Warnings:

  - You are about to drop the column `palceId` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `property` table. All the data in the column will be lost.
  - Added the required column `placeId` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_palceId_fkey`;

-- AlterTable
ALTER TABLE `property` DROP COLUMN `palceId`,
    DROP COLUMN `type`,
    ADD COLUMN `placeId` VARCHAR(191) NOT NULL,
    ADD COLUMN `typeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Area`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `Area`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
