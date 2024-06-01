// pages/api/graphql.js
import { ApolloServer, gql } from "apollo-server-micro";
import { createConnection } from "mysql2/promise";

// Define your GraphQL schema

const typeDefs = gql`
  type Property {
    id: ID!
    projectName: String!
    shortTitle: String!
    price: Int!
    bedrooms: Int!
    area: String!
    description: String!
    img: [String!]!
    roomType: RoomType!
  }

  enum RoomType {
    SALE
    RENT
  }

  type Query {
    users: [User]!
  }
`;

// Create MySQL connection pool
const pool = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nextproperty",
});

// Define resolver functions
const resolvers = {
  Query: {
    users: async () => {
      const [rows] = await (await pool).query("SELECT * FROM users");
      return rows;
    },
  },
};

// Create Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

export default server.createHandler({ path: "/api/graphql" });
