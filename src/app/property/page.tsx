"use client";

import React, { useState, useEffect } from "react";
import Filter from "./filter/page";
import List from "./list/page";

const Property = () => {
  const [data, setData] = useState<any>([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/property/api");
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleMenu = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className=" grid  grid-cols-12 gap-10 p-5">
      <div className="col-span-12 sm:col-span-3 hidden md:block ">
        <Filter />
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {show ? (
        <div className="col-span-12 sm:col-span-4">
          <Filter />
        </div>
      ) : (
        ""
      )}

      <div className="col-span-12 rounded-lg sm:col-span-8">
        <List data={data} />
      </div>
    </div>
  );
};

export default Property;
