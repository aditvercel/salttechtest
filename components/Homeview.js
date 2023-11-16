"use client";

import React from "react";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import company from "../public/benjaminwong.svg";
import bluesquare from "../public/Backgroundbluesquare.svg";
import illustration from "../public/Illustration.svg";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import icon1 from "../public/Group1.svg";
import icon2 from "../public/Group2.svg";
import icon3 from "../public/Group3.svg";

export default function Homeview() {
  const itemsData = [
    {
      title: "Who We Are",
      subtitle: "Technology Company",
      text: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      title: "What We Do",
      subtitle: "Professional Brand Management",
      text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "How We Do",
      subtitle: "Strategize, Design, and Something",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequi nihil molestiae consequatur.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = itemsData[currentIndex];

  const nextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsData.length);
  };

  const prevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemsData.length - 1 : prevIndex - 1
    );
  };

  const isSmallScreen = window.innerWidth <= 600;

  const corevalue = [
    {
      title: "Dedication",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      title: "Intellectual Honesty",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      title: "Curiosity",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
  ];

  const corousel = [
    {
      icon: icon1,
      title: "Speed Improvement",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    },
    {
      icon: icon2,
      title: "accesoris",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    },
    {
      icon: icon3,
      title: "exhaust",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    },
  ];

  return (
    <div>
      <div className="w-full overflow-hidden h-screen md:h-[900px] relative">
        <div className="relative h-200px ">
          <Image src={company} alt="Company Logo" className="w-full" />
          <div className="w-full absolute z-10 bottom-0 h-1/2 ">
            <div>
              <Image src={bluesquare} alt="box" className="w-full" />
              <div className=" z-20 text-white absolute top-40 md:top-60 w-full h-[250px] p-5">
                <div className=" font-medium text-6xl text-white w-[400px]">
                  Discover Your Wonder
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className=" shadow-md p-5 rounded-md shadow-black">
          <div className=" text-[#029FE4] font-medium text-4xl">
            {currentItem.title}
          </div>
          <div className="grid gap-3">
            <div className=" text-black font-normal text-[18px]">
              {currentItem.subtitle}
            </div>
            <div className=" text-sm">{currentItem.text}</div>
            <div className="flex justify-between">
              <div>{currentIndex + 1}/3</div>
              <div>
                <div className="flex gap-2">
                  <button
                    onClick={prevIndex}
                    className="border p-2 rounded-md w-20 "
                  >
                    Prev
                  </button>
                  <button
                    onClick={nextIndex}
                    className="border p-2 rounded-md w-20 "
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid p-5 gap-3">
        <div className="text-[36px] text-[#029FE4] text-center">
          Our core value
        </div>
        <div>
          Ridiculus laoreet libero pretium et, sit vel elementum convallis
          fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
          etiam sit. In mauris rutrum ac ut volutpat, ornare nibh diam. Montes,
          vitae, nec amet enim.
        </div>
        <div className="grid gap-5 mt-5">
          {corevalue.map((item) => {
            return (
              <>
                <div className="flex gap-2 items-center align-middle">
                  <RemoveIcon />
                  <div className=" text-[24px] font-medium">{item.title}</div>
                </div>
                <div>{item.text}</div>
              </>
            );
          })}
          <div className="mt-5 mb-5">
            <Image src={illustration} alt="illustration" />
          </div>
        </div>
      </div>
      <div className="bg-[#509FDD] p-10">
        <div className="grid p-5 gap-5 bg-white justify-center items-center align-middle text-center">
          <div className=" font-bold text-[24px] text-[#029FE4]">
            OUR SPECIALITY
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={isSmallScreen ? 1 : 3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper bg-white"
            centeredSlides="true"
          >
            {corousel.map((item) => {
              return (
                <>
                  <SwiperSlide>
                    <div className=" shadow-lg rounded-lg p-5">
                      <div className="grid gap-5 mb-10">
                        <div className="flex items-center justify-center">
                          <Image src={item.icon} alt="icon1" />
                        </div>
                        <div className=" font-medium text-lg">{item.title}</div>
                        <div>{item.text}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
