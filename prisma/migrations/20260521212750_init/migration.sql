/*
  Warnings:

  - Made the column `body` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "labels" DROP NOT NULL,
ALTER COLUMN "body" SET NOT NULL;
