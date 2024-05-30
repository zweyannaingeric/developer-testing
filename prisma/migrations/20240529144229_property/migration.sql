/*
  Warnings:

  - Made the column `typeId` on table `property` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_typeId_fkey`;

-- AlterTable
ALTER TABLE `property` MODIFY `typeId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `PropertyType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PropertyType_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `PropertyType`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;
