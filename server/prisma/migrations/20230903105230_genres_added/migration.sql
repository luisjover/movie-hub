/*
  Warnings:

  - Added the required column `genresName` to the `Movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "genresName" TEXT NOT NULL,
ALTER COLUMN "score" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genres_name_key" ON "Genres"("name");

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_genresName_fkey" FOREIGN KEY ("genresName") REFERENCES "Genres"("name") ON DELETE CASCADE ON UPDATE CASCADE;
