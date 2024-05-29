-- CreateTable
CREATE TABLE `Property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `shortName` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `price` INTEGER NOT NULL,
    `bedroom` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `img` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
