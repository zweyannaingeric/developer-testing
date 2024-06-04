import { gql } from "@apollo/client";

export const GET_PROPERTIES = gql`
  query GetProperties(
    $first: Int
    $after: String
    $roomType: RoomType
    $district: String
    $priceMin: Int
    $priceMax: Int
    $bedrooms: Int
  ) {
    properties(
      first: $first
      after: $after
      roomType: $roomType
      district: $district
      priceMin: $priceMin
      priceMax: $priceMax
      bedrooms: $bedrooms
    ) {
      edges {
        cursor
        node {
          id
          name
          shortName
          description
          price
          img
          bedrooms
          roomType
          area {
            district
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      totalProperties
    }
  }
`;
