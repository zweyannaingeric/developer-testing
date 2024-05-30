import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: any) {
  try {
    const data = await request.json();
    console.log(data);
    const { name, shortName, type, placeId, price, bedroom, description, img } =
      data;

    const newProperty = await prisma.property.create({
      data: {
        name,
        shortName,
        type,
        placeId,
        price,
        bedroom,
        description,
        img,
      },
      include: {
        place: true,
      },
    });
    return NextResponse.json(newProperty);
  } catch (err) {
    console.log(err);
  }
}

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    let properties;
    if (query) {
      properties = await prisma.property.findMany({
        where: {
          name: { contains: query },
        },
      });
    } else {
      properties = await prisma.property.findMany();
    }

    return NextResponse.json(properties);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
};
