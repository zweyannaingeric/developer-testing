/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Area` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_palceId_fkey`;

-- AlterTable
ALTER TABLE `property` MODIFY `palceId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Area_name_key` ON `Area`(`name`);

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_palceId_fkey` FOREIGN KEY (`palceId`) REFERENCES `Area`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
