"use client";
import React, { useState } from "react";
import componylogo from "../public/companylogo.svg";
import Image from "next/image";
import Link from "next/link";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const bottnav = [
  {
    text: "Who We Are",
    link: "/whoweare",
  },
  {
    text: "Our Values",
    link: "/ourvalue",
  },
  {
    text: "The Perks",
    link: "/theperks",
  },
];

export default function Footbar() {
  const [alamat, setAlamat] = useState("Jakarta");
  console.log(alamat);

  const handleSelect = (e, value) => {
    setAlamat(value);
  };
  return (
    <div className=" bg-[#07477A] p-5 grid gap-5">
      <div className="flex align-middle items-center">
        <Image src={componylogo} />
      </div>
      <div className=" bg-white mt-5 grid p-5 gap-10 rounded-lg">
        <div>
          <Select
            onChange={handleSelect}
            placeholder="OUR DEPARTMENT"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 300,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="Jakarta">TECHNOLOGY DEPARTMENT</Option>
            <Option value="Bandung">MARKETING DEPARTMENT</Option>
            <Option value="Jogjakarta">HRD DEPARTMENT</Option>
            <Option value="Singapore">ACCOUNTING DEPARTMENT</Option>
          </Select>
        </div>
        <div>
          <iframe
            width="100%"
            height="300"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${alamat}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        <div className=" text-[#25A0D8]">
          Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
          Barat
        </div>
      </div>
      <div className="grid gap-5 font-medium text-lg text-white">
        {bottnav.map((item) => {
          return <Link href={item.link}>{item.text}</Link>;
        })}
      </div>
    </div>
  );
}
