import React from "react";
import Card from "../card/page";

const typeOptions = [
  { id: 1, name: "For Rent", value: "RENT" },
  { id: 2, name: "For Sale", value: "SALE" },
];

const roomCountOptions = [
  { id: 1, name: "1+", value: 1 },
  { id: 2, name: "2+", value: 2 },
  { id: 3, name: "3+", value: 3 },
  { id: 4, name: "4+", value: 4 },
  { id: 5, name: "5+", value: 5 },
];

const Filter = ({ areas, onFilterChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newFilters = {
      roomType: form.roomType.value || null,
      district: form.district.value || null,
      priceMin: form.priceMin.value ? parseInt(form.priceMin.value) : null,
      priceMax: form.priceMax.value ? parseInt(form.priceMax.value) : null,
      bedrooms: form.bedrooms.value ? parseInt(form.bedrooms.value) : null,
    };

    onFilterChange(newFilters);
  };

  return (
    <Card>
      <h5 className="mb-3 font-semibold">Filter</h5>
      <form onSubmit={handleSubmit}>
        {/* Room Type */}
        <div className="ml-3 py-2">
          <h5 className="font-semibold text-sm">Room Type</h5>
          <select
            name="roomType"
            className="w-full border-2 text-xs focus:outline-none bg-gray-100 focus:border-gray-400 text-gray-700 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider mt-2"
          >
            <option value="">Select Room Type</option>
            {typeOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="ml-3 py-2">
          <h5 className="font-semibold text-sm">District</h5>
          <select
            name="district"
            className="w-full border-2 text-xs focus:outline-none bg-gray-100 focus:border-gray-400 text-gray-700 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider mt-2"
          >
            <option value="">Select District</option>
            {areas.map((area) => (
              <option key={area.id} value={area.district}>
                {area.district}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="ml-3 py-2">
          <h5 className="font-semibold text-sm">Price Range</h5>
          <div className="mb-4 mt-2 flex md:block md:text-center lg:flex gap-6 items-center">
            <div className="relative w-full min-w-[50px]">
              <input
                className="peer text-xs h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Min"
                type="number"
                name="priceMin"
              />
            </div>
            -
            <div className="relative w-full min-w-[50px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown
.placeholder-shown:border-t-blue-gray-200"
                placeholder="Max"
                type="number"
                name="priceMax"
              />
            </div>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="ml-3 py-2">
          <h5 className="font-semibold text-sm">Bedrooms</h5>
          <select
            name="bedrooms"
            className="w-full border-2 text-xs focus:outline-none bg-gray-100 focus:border-gray-400 text-gray-700 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider mt-2"
          >
            <option value="">Select Bedrooms</option>
            {roomCountOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="ml-3 py-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 px-4"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Filter;
