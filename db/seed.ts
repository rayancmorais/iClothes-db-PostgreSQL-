import sampleData from "./sample-data";
import { PrismaClient } from "../lib/generated/prisma/index";
async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
  console.log("Database seeded successfully!");
}

main();
