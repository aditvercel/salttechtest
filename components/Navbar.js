import Image from "next/image";
import React from "react";
import companylogo from "public/componylogotop.svg";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div className=" flex justify-between p-5">
      <Image src={companylogo} />
      <div>
        <MenuIcon />
      </div>
    </div>
  );
}
