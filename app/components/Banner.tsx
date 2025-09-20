import React from "react";
import InputFieldWithButton from "./InputFieldWithButton";
import Image from "next/image";
import BannerImage from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-end">
      <div className="mt-18">
        <p className="text-headline-03 opacity-70">With Stitle</p>
        <h1 className="xl:text-headline-01 lg:text-headline-02 text-headline-03 mt-2 mb-5">Let’s start a project together</h1>
        <p className="text-paragraph-01 opacity-70 mb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus sed massa.</p>
        <InputFieldWithButton />
      </div>
      <div className="lg:flex hidden">
        <Image src={BannerImage} alt="banner-image" />
      </div>
    </div>
  );
};

export default Banner;
