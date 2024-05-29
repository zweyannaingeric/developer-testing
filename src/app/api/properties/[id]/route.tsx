import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: any, { params }: any) {
  const id = parseInt(params.id);
  try {
    const properties = await prisma.property.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(properties);
  } catch (err) {
    console.log(err);
  }
}
