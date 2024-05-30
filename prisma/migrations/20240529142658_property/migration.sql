-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_typeId_fkey`;

-- AlterTable
ALTER TABLE `property` MODIFY `typeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Area`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
