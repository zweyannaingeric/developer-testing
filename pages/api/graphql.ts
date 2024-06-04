import { ApolloServer, gql } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "micro-cors";

const prisma = new PrismaClient();
const cors = Cors({
  allowMethods: ["POST", "GET", "OPTIONS"],
  origin: "*",
});

const typeDefs = gql`
  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  type PropertyConnection {
    edges: [PropertyEdge]
    pageInfo: PageInfo
    totalProperties: Int
  }

  type PropertyEdge {
    cursor: String
    node: Property
  }

  type Area {
    id: Int
    district: String
    properties: [Property]
  }

  type Property {
    id: Int
    name: String
    shortName: String
    description: String
    price: Int
    img: [String]
    bedrooms: Int
    roomType: RoomType
    area: Area
  }

  enum RoomType {
    SALE
    RENT
  }

  type Query {
    areas: [Area]
    properties(
      first: Int
      after: String
      roomType: RoomType
      district: String
      priceMin: Int
      priceMax: Int
      bedrooms: Int
    ): PropertyConnection
  }
`;

const getProperties = async ({
  first,
  after,
  roomType,
  district,
  priceMin,
  priceMax,
  bedrooms,
}) => {
  const where = {
    ...(roomType && { roomType }),
    ...(district && { area: { district } }),
    ...(priceMin !== undefined &&
      priceMin !== null && { price: { gte: priceMin } }),
    ...(priceMax !== undefined &&
      priceMax !== null && { price: { lte: priceMax } }),
    ...(bedrooms !== undefined &&
      bedrooms !== null && { bedrooms: { gte: bedrooms } }),
  };

  const properties = await prisma.property.findMany({
    where,
    take: first,
    ...(after && { skip: 1, cursor: { id: parseInt(after, 10) } }),
    orderBy: { id: "asc" },
  });

  return properties.map((property) => ({
    ...property,
    img: JSON.parse(property.img || "[]"), 
    cursor: property.id.toString(),
  }));
};

const getTotalPropertiesCount = async ({
  roomType,
  district,
  priceMin,
  priceMax,
  bedrooms,
}) => {
  const where = {
    ...(roomType && { roomType }),
    ...(district && { area: { district } }),
    ...(priceMin !== undefined &&
      priceMin !== null && { price: { gte: priceMin } }),
    ...(priceMax !== undefined &&
      priceMax !== null && { price: { lte: priceMax } }),
    ...(bedrooms !== undefined &&
      bedrooms !== null && { bedrooms: { gte: bedrooms } }),
  };

  const count = await prisma.property.count({ where });
  return count;
};

const resolvers = {
  Query: {
    properties: async (_, { first, after, roomType, district }) => {
      const properties = await getProperties({
        first,
        after,
        roomType,
        district,
      });
      const totalProperties = await getTotalPropertiesCount({
        roomType,
        district,
      });

      return {
        edges: properties.map((property) => ({
          cursor: property.cursor,
          node: property,
        })),
        pageInfo: {
          endCursor: properties[properties.length - 1]?.cursor,
          hasNextPage: properties.length === first,
        },
        totalProperties,
      };
    },
    areas: async () => {
      return await prisma.area.findMany();
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    res.end();
    return;
  }

  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});
