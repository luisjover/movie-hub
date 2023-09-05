/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Genres` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Genres` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `Movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Genres" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "genres";
