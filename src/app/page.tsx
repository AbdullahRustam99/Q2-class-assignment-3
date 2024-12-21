import React from "react";
import Image from "next/image";
import sadImg from "@/app/picture/philip-oroni-VfOGf5RWkeg-unsplash 1.png";
export default function home() {
  return (
    <>
      <div className="py-10 bg-[#D9D9D9] "></div>
      <div className="bg-white p-9 text-black flex items-center justify-evenly py-[63px] h-full ">
        <div className="flex flex-2 px-2 w-1/2 gap-4 flex-col">
          <h1 className="font-bold text-[44px] ">Welcome To Our Website</h1>
          <p className="font-normal text-[32px] text-[#4C4C4C]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard
          </p>
          <button className="text-center bg-black py-2 px-4 text-[28px] font-light text-white w-[190px]">
            Contat Us
          </button>
        </div>
        <div className="flex-2 ">
          <Image src={sadImg} alt="img" width={430} />
        </div>
      </div>
    </>
  );
}
