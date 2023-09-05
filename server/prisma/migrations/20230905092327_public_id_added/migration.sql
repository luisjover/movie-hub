/*
  Warnings:

  - Added the required column `cover_img_public` to the `Movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "cover_img_public" TEXT NOT NULL;
