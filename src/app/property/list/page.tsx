"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface Area {
  id: number;
  districtName: string;
  properties: Property[];
}

interface Property {
  id: number;
  projectName: string;
  shortTitle: string;
  price: number;
  bedrooms: number;
  description: string;
  img: string;
  roomType: string;
  areaId: number;
  area: Area;
}

interface ListProps {
  data: Property[];
}

const List: React.FC<ListProps> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2  w-50">
      {data.map((item) => (
        <li
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-lg"
          key={item.id}
        >
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                spaceBetween: 20,
                pagination: { clickable: true, dynamicBullets: true },
              },
              768: {
                spaceBetween: 40,
                pagination: { clickable: true, dynamicBullets: true },
              },
              1024: {
                spaceBetween: 50,
              },
            }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
          >
            {item.img &&
              JSON.parse(item.img).map((imageUrl: string, index: number) => (
                <>
                  <SwiperSlide key={index}>
                    <div className="relative h-80 w-full">
                      <Image
                        className="absolute inset-0 object-cover rounded-lg"
                        src={imageUrl}
                        layout="fill"
                        alt={`Image ${index}`} // Provide a meaningful alt text
                      />
                    </div>
                  </SwiperSlide>
                </>
              ))}
          </Swiper>
          {/* Thumbnail */}
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
            {item.img &&
              JSON.parse(item.img).map((imageUrl: string, index: number) => (
                <SwiperSlide key={index}>
                  <button className="flex h-full w-full items-center justify-center">
                    <Image
                      className="absolute inset-0 object-cover rounded-lg"
                      src={imageUrl}
                      layout="fill"
                      alt={`Image ${index}`} // Provide a meaningful alt text
                    />
                  </button>
                </SwiperSlide>
              ))}
          </Swiper>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200 p-3">
              <div className="flex flex-col w-0 flex-1">
                <h5 className="font-semibold md:text-sm">{item.projectName}</h5>
                <h5 className="text-gray-700 text-3xl md:text-xl font-bold my-1 text-orange-500">
                  $ {item.price}
                </h5>
                <h5 className="my-1 font-semibold md:text-sm">
                  {item.bedrooms} Bedrooms Condo{" "}
                  {item.roomType === "sale" ? "For Sale" : "For Rent"} at {""}
                  {item.shortTitle}
                </h5>
                <h5 className="my-1 md:text-sm">{item.areaId}</h5>
                <h5 className="my-1 md:text-sm">{item.description}</h5>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
