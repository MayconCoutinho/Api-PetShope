/*
  Warnings:

  - The primary key for the `Pet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `age` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `breed` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `species` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `donoId` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idade` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `raca` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoPet" AS ENUM ('GATO', 'CACHORRO');

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_ownerId_fkey";

-- AlterTable
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_pkey",
DROP COLUMN "age",
DROP COLUMN "breed",
DROP COLUMN "name",
DROP COLUMN "ownerId",
DROP COLUMN "species",
ADD COLUMN     "donoId" TEXT NOT NULL,
ADD COLUMN     "idade" INTEGER NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "raca" TEXT NOT NULL,
ADD COLUMN     "tipo" "TipoPet" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pet_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pet_id_seq";

-- DropTable
DROP TABLE "Client";

-- DropEnum
DROP TYPE "Species";

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_donoId_fkey" FOREIGN KEY ("donoId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
