import Card from "@/app/components/card";
import React from "react";

const typeOptions = [
  {
    id: 1,
    name: "For Rent",
    value: "Rent",
  },
  {
    id: 2,
    name: "For Sale",
    value: "For Sale",
  },
];

const roomCountOptions = [
  {
    id: 1,
    name: "1+",
    value: 1,
  },
  {
    id: 2,
    name: "2+",
    value: 2,
  },
  {
    id: 3,
    name: "3+",
    value: 3,
  },
  {
    id: 4,
    name: "4+",
    value: 4,
  },
  {
    id: 5,
    name: "5+",
    value: 5,
  },
];

const areaOptions = [
  {
    id: 1,
    name: "New York",
    value: "New York",
  },
  {
    id: 2,
    name: "Chicago",
    value: "Chicago",
  },
  {
    id: 2,
    name: "San Diego",
    value: "San Diego",
  },
];

const Filter = () => {
  return (
    <div>
      <Card>
        <h5 className="mb-3 font-semibold">Filter</h5>

        {/* Room Type  */}
        <div className="ml-3 py-2">
          <h5 className=" font-semibold text-sm">Room Type</h5>
          {typeOptions.map((option) => (
            <div key={option.id}>
              <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 text-xs  font-semibold hover:bg-gray-200 cursor-pointer ">
                <input
                  type="checkbox"
                  className="mr-2"
                  name={option.name}
                  value={option.value}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>

        {/* Price Range  */}
        <div className="ml-3 py-2">
          <h5 className=" font-semibold text-sm">Price Range</h5>
          <div className="mb-4 mt-2 flex md:block md:text-center lg:flex gap-6 items-center">
            <div className="relative w-full min-w-[50px]">
              <input
                className="peer text-xs h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] text-xs pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Min
              </label>
            </div>
            -
            <div className="relative w-full min-w-[50px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Max
              </label>
            </div>
          </div>
        </div>

        {/* Room Count */}
        <div className="ml-3 py-2">
          <h5 className=" font-semibold text-sm">Bedrooms</h5>
          <select
            id="pricingType"
            name="pricingType"
            className="w-full  border-2 text-xs focus:outline-none bg-gray-100 focus:border-gray-400 text-gray-700 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider mt-2"
          >
            {roomCountOptions.map((roomCount) => (
              <>
                <option key={roomCount.id} value={roomCount.value}>
                  {roomCount.name}
                </option>
              </>
            ))}
          </select>
        </div>

        {/* Area */}
        <div className="ml-3 py-2">
          <h5 className=" font-semibold text-sm">Area</h5>
          {areaOptions.map((option) => (
            <div key={option.id}>
              <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 text-xs  font-semibold hover:bg-gray-200 cursor-pointer ">
                <input
                  type="checkbox"
                  className="mr-2"
                  name={option.name}
                  value={option.value}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Filter;
