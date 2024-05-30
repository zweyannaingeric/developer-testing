/*
  Warnings:

  - You are about to drop the column `place` on the `property` table. All the data in the column will be lost.
  - Added the required column `palceId` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `property` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shortName` on table `property` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `property` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `property` required. This step will fail if there are existing NULL values in that column.
  - Made the column `img` on table `property` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `property` DROP COLUMN `place`,
    ADD COLUMN `palceId` INTEGER NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `shortName` VARCHAR(191) NOT NULL,
    MODIFY `type` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `img` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Area` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_palceId_fkey` FOREIGN KEY (`palceId`) REFERENCES `Area`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
