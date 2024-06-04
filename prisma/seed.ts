import { PrismaClient, RoomType } from '@prisma/client';
import { Area } from '@/area';
import { Property } from '@/property';

const prisma = new PrismaClient();

async function main() {
  await prisma.area.createMany({
    data: Area
  });

  const propertiesWithEnum = Property.map(property => ({
    ...property,
    roomType: RoomType[property.roomType as keyof typeof RoomType],
    img: JSON.stringify(property.img),

  await prisma.property.createMany({
    data: propertiesWithEnum,
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
