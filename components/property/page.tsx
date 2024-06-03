"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

const PropertyList = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    console.log("thumbsSwiper:", thumbsSwiper);
    if (thumbsSwiper && thumbsSwiper.destroyed) {
      setThumbsSwiper(null);
    }
  }, [thumbsSwiper]);

  if (!data || !data.properties || !data.properties.edges) {
    return <div>No properties available</div>;
  }

  return (
    <>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 w-50">
        {data.properties.edges.length > 0 ? (
          <>
            {data.properties.edges.map(({ node: item }) => (
              <li
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-lg"
                key={item.id}
              >
                {item.img && item.img.length > 0 && (
                  <>
                    <Swiper
                      loop={true}
                      spaceBetween={10}
                      navigation
                      slidesPerView={1}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[FreeMode, Navigation, Pagination]}
                    >
                      {item.img.map((url, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative h-80 w-full">
                            <Image
                              className="absolute inset-0 object-cover rounded-lg"
                              key={index}
                              src={url}
                              alt={item.name}
                              layout="fill"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={true}
                      spaceBetween={12}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="thumbs mt-3 h-32 w-full rounded-lg"
                    >
                      {item.img.map((url, index) => (
                        <SwiperSlide key={index}>
                          <button className="flex h-full w-full items-center justify-center">
                            <Image
                              className="absolute inset-0 object-cover rounded-lg"
                              key={index}
                              src={url}
                              alt={item.name}
                              layout="fill"
                            />
                          </button>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                )}
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200 p-3">
                    <div className="flex flex-col w-0 flex-1">
                      <h5 className="font-semibold md:text-sm">
                        {item.projectName}
                      </h5>
                      <h5 className="text-gray-700 text-3xl md:text-xl font-bold my-1 text-orange-500">
                        $ {item.price}
                      </h5>
                      <h5 className="my-1 font-semibold md:text-sm">
                        {item.bedrooms} Bedrooms Condo{" "}
                        {item.roomType === "sale" ? "For Sale" : "For Rent"} at{" "}
                        <span className="font-bold text-orange-500">
                          {item.shortName.toUpperCase()}
                        </span>
                      </h5>
                      <h5 className="my-1 md:text-sm">{item.description}</h5>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <div className="w-12 h-12 border-2 border-red-600 rounded-full loader"></div>
        )}
      </ul>
    </>
  );
};

export default PropertyList;
