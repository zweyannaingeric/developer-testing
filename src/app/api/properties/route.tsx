import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: any) {
  try {
    const data = await request.json();
    console.log(data);
    const { name, shortName, type, place, price, bedroom, description, img } =
      data;
    const newProperty = await prisma.property.create({
      data: {
        name,
        shortName,
        type,
        place,
        price,
        bedroom,
        description,
        img,
      },
    });
    return NextResponse.json(newProperty);
  } catch (err) {
    console.log(err);
  }
}
export async function GET() {
  try {
    const properties = await prisma.property.findMany();
    return NextResponse.json(properties);
  } catch (err) {
    console.log(err);
  }
}
