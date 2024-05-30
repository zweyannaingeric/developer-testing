/*
  Warnings:

  - You are about to alter the column `typeId` on the `property` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_typeId_fkey`;

-- AlterTable
ALTER TABLE `property` MODIFY `typeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `PropertyType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
