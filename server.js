import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';
import gql from 'graphql-tag';

const prisma = new PrismaClient();

// Define your GraphQL schema
const typeDefs = gql`
  type Area {
    id: Int!
    districtName: String!
    properties: [Property!]!
  }

  type Property {
    id: Int!
    projectName: String!
    shortTitle: String!
    price: Int!
    bedrooms: Int!
    description: String!
    img: String!
    roomType: String!
    area: Area!
  }

  type Query {
    areas: [Area!]!
    properties: [Property!]!
    property(id: Int!): Property
    area(id: Int!): Area
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    areas: async () => await prisma.area.findMany({ include: { properties: true } }),
    properties: async () => await prisma.property.findMany({ include: { area: true } }),
    property: async (_, args) => await prisma.property.findUnique({ where: { id: args.id }, include: { area: true } }),
    area: async (_, args) => await prisma.area.findUnique({ where: { id: args.id }, include: { properties: true } })
  },
  Area: {
    properties: async (parent) => await prisma.property.findMany({ where: { areaId: parent.id } })
  },
  Property: {
    area: async (parent) => await prisma.area.findUnique({ where: { id: parent.areaId } })
  }
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Start the standalone server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});


