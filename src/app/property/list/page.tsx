"use client";

import Card from "@/app/components/card";
import React from "react";
import Image from "next/image";

interface DataType {
  id: number;
  name: string;
  shortTitle: string;
  price: number;
  beds: number;
  area: string;
  type: string;
  shortDesc: string;
  img: [];
}

interface ListProps {
  data: DataType[];
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2  w-50">
      {data.map((item) => (
        <li
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-lg"
          key={item.id}
        >
          <div className="flex w-full items-center justify-between space-x-6">
            <Image
              className=" bg-gray-300"
              src={item.img[0]}
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200 p-3">
              <div className="flex flex-col w-0 flex-1">
                <h5 className="font-semibold md:text-sm">{item.name}</h5>
                <h5 className="text-gray-700 text-3xl md:text-xl font-bold my-1 text-orange-500">
                  $ {item.price}
                </h5>
                <h5 className="my-1 font-semibold md:text-sm">
                  {item.beds} Bedrooms Condo{" "}
                  {item.type === "sale" ? "For Sale" : "For Rent"} at {""}
                  {item.shortTitle}
                </h5>
                <h5 className="my-1 md:text-sm">{item.area}</h5>
                <h5 className="my-1 md:text-sm">{item.shortDesc}</h5>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
