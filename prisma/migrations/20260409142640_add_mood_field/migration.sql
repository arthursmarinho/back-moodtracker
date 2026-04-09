/*
  Warnings:

  - You are about to drop the column `moods` on the `Mood` table. All the data in the column will be lost.
  - Added the required column `mood` to the `Mood` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mood" DROP COLUMN "moods",
ADD COLUMN     "mood" INTEGER NOT NULL;
