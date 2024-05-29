"use client";
import { useEffect, useState } from "react";

const Table = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("/api/properties");
      const data = await res.json();
      setProperties(data);
    };
    fetchdata();
  }, []);
  return (
    <div className="mt-10 p-5 flex justify-between  shadow-md">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <div className="mb-4">
            <h5 className="text-black font-bold">Property Type</h5>
            {properties.map((property: any) => (
              <div key={property.id}>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 text-gray-600"
                    checked
                  />
                  <span className="ml-2 text-gray-700">{property.type}</span>
                </label>
              </div>
            ))}
          </div>

          <div className="my-4 flex flex-col">
            <h5 className="text-black font-bold">No of Bedrooms</h5>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-3 w-3 text-orange-600"
                checked
              />
              <span className="ml-2 text-gray-700">1-2</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-3 w-3 text-orange-600"
                checked
              />
              <span className="ml-2 text-gray-700">3-4</span>
            </label>
          </div>

          <div className="my-4 flex flex-col">
            <h5 className="text-black font-bold">Price Range</h5>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-3 w-3 text-orange-600"
                checked
              />
              <span className="ml-2 text-gray-700">0 - $ 499</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-3 w-3 text-orange-600"
                checked
              />
              <span className="ml-2 text-gray-700">$ 500 - $ 1499</span>
            </label>
          </div>

          <div className="my-4">
            <h5 className="text-black font-bold">Area</h5>
            {properties.map((property: any) => (
              <div key={property.id}>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 text-gray-600"
                    checked
                  />
                  <span className="ml-2 text-gray-700">{property.place}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto relative w-full pl-10">
        <table className="w-full text-sm text-left text-white dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                Project Name
              </th>
              <th scope="col" className="py-3 px-6">
                Short Name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Type
              </th>
              <th scope="col" className="py-3 px-6">
                Place
              </th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property: any) => (
              <tr
                key={property.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="py-4 px-6">{property.name}</td>
                <td className="py-4 px-6">{property.shortName}</td>
                <td className="py-4 px-6">{property.price}</td>
                <td className="py-4 px-6">{property.description}</td>
                <td className="py-4 px-6">{property.type}</td>
                <td className="py-4 px-6">{property.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
