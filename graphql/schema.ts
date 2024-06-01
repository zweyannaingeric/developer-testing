import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Property {
    id: ID!
    projectName: String!
    shortTitle: String!
    price: Int
    bedrooms: Int
    description: String!
    img: [String!]
    roomType: Type
  }

  type Area {
    id: ID!
    area: [String!]
  }

  enum Type {
    RENT
    SALE
  }

  type Query {
    properties(page: Int, limit: Int): [Property]
    totalProperties: Int
  }
`;
