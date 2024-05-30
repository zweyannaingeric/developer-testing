/*
  Warnings:

  - You are about to drop the column `typeId` on the `property` table. All the data in the column will be lost.
  - You are about to drop the `propertytype` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_typeId_fkey`;

-- AlterTable
ALTER TABLE `property` DROP COLUMN `typeId`,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `propertytype`;
