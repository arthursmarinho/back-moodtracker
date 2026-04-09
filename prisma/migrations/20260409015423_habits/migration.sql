/*
  Warnings:

  - You are about to drop the column `moods` on the `Mood` table. All the data in the column will be lost.
  - The `habits` column on the `Mood` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `mood` to the `Mood` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mood" DROP COLUMN "moods",
ADD COLUMN     "mood" INTEGER NOT NULL,
DROP COLUMN "habits",
ADD COLUMN     "habits" TEXT[];
