import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: any) {
  try {
    const data = await request.json();
    console.log(data);
    const { name, properties } = data;
    const newArea = await prisma.area.create({
      data: {
        name,
        properties: {
          create: properties.map((property: any) => ({
            name: property.name,
            shortName: property.shortName,
            price: property.price,
            bedroom: property.bedroom,
            type: property.type,
            description: property.description,
            img: property.img,
          })),
        },
      },
      include: {
        properties: true,
      },
    });
    return NextResponse.json(newArea);
  } catch (err) {
    console.log(err);
  }
}
export async function GET() {
  try {
    const areas = await prisma.area.findMany({
      include: {
        properties: true,
      },
    });
    return NextResponse.json(areas);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
