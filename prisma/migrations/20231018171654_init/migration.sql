-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "seoTitle" TEXT NOT NULL,
    "seoUrl" TEXT NOT NULL,
    "imageUrl" TEXT
);

-- CreateTable
CREATE TABLE "Attribute" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "topParameter" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "_AttributeToCar" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AttributeToCar_A_fkey" FOREIGN KEY ("A") REFERENCES "Attribute" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AttributeToCar_B_fkey" FOREIGN KEY ("B") REFERENCES "Car" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_AttributeToCar_AB_unique" ON "_AttributeToCar"("A", "B");

-- CreateIndex
CREATE INDEX "_AttributeToCar_B_index" ON "_AttributeToCar"("B");
