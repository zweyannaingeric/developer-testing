"use client";

import { gql, useQuery, ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import PropertyList from "@/components/property/page";
import Navbar from "@/components/navbar/page";
import Loading from "@/components/loading/page";
import Filter from "@/components/filter/page";
import { useEffect, useState } from "react";
import Pagination from "@/components/paignation/page";

const GET_PROPERTIES = gql`
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

const GET_AREAS = gql`
  query GetAreas {
    areas {
      id
      district
    }
  }
`;

function Home() {
  const [pageInfo, setPageInfo] = useState({
    endCursor: null,
    hasNextPage: true,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    roomType: null,
    district: null,
    priceMin: null,
    priceMax: null,
    bedrooms: null,
  });

  const { loading, error, data, fetchMore, refetch } = useQuery(
    GET_PROPERTIES,
    {
      variables: { first: 10, after: null, ...filters },
    }
  );

  const {
    loading: loadingAreas,
    error: errorAreas,
    data: areasData,
  } = useQuery(GET_AREAS);

  const handlePageChange = (pageNumber) => {
    const after = pageNumber > 1 ? data.properties.pageInfo.endCursor : null;
    setCurrentPage(pageNumber);

    fetchMore({
      variables: { first: 10, after },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;

        return {
          properties: fetchMoreResult.properties,
        };
      },
    });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    refetch({ first: 10, after: null, ...newFilters });
  };

  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow((prevState) => !prevState);
  };

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  const totalPages = Math.ceil(data?.properties.totalProperties / 10);

  return (
    <>
      <div className=" grid  grid-cols-12 gap-10 p-5">
        <div className="col-span-12 sm:col-span-3 hidden md:block ">
          <Filter areas={areasData.areas} onFilterChange={handleFilterChange} />
        </div>

        <div className="flex items-center md:hidden">
          <button
            id="menu-toggle"
            onClick={handleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 focus:text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-400 dark:focus:ring-dark-400 "
          >
            <span className="sr-only">Open main menu</span>
            {/* <!-- Hamburger icon --> */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {show ? (
          <div className="col-span-12 sm:col-span-4">
            <Filter
              areas={areasData.areas}
              onFilterChange={handleFilterChange}
            />
          </div>
        ) : (
          ""
        )}

        <div className="col-span-12 rounded-lg sm:col-span-8">
          <PropertyList data={data} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Home />
    </ApolloProvider>
  );
}
