// pages/api/properties.ts

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const { page = 1, pageSize = 10 } = req.query || {}; // Destructure query parameters with default values

      const skip = (Number(page) - 1) * Number(pageSize);
      const take = Number(pageSize);

      const properties = await prisma.property.findMany({
        skip,
        take,
      });

      return NextResponse.json(properties);
    } else {
      return NextResponse.error();
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.error();
  }
}
