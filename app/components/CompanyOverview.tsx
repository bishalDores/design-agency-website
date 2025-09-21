import React from "react";
import BlurBgOne from "../../assets/images/blur-bg-1.png";
import BlurTwo from "../../assets/images/blur-bg-2.png";
import BlurThree from "../../assets/images/blur-bg-3.png";
import Image from "next/image";
import Thunder from "../../assets/images/thunder.png";
import Spring from "../../assets/images/spring.png";

const CompanyOverview = () => {
  return (
    <div className="mt-16 flex flex-wrap">
      {/* left div */}
      <div className="basis-full md:basis-[41.7%]">
        {/* box 1 */}
        <div className="flex">
          <div className="lg:w-[200px] h-[183px] bg-[#FDC799] rounded-lg relative p-6  lg:mr-[18px] md:mr-5">
            <div className="absolute top-0 left-0 bottom-0 right-0">
              <Image src={BlurBgOne} alt="blur-bg" />
            </div>
            <div className="h-full flex flex-col">
              <p className="lg:text-3xl md:text-2xl text-black font-bold">86</p>
              <p className="lg:text-2xl md:text-xl text-black">
                Project is <br />
                pending
              </p>
            </div>
            <div className="absolute bottom-1 right-2.5">
              <Image src={Thunder} alt="thunder" />
            </div>
          </div>
          {/* box-2 */}
          <div className="lg:w-[252px] h-[183px] bg-brand-yellow rounded-lg relative p-6  ">
            <div className="absolute top-0 left-0 bottom-0 right-0">
              <Image src={BlurTwo} alt="blur-bg" />
            </div>
            <div className="h-full flex flex-col">
              <p className="text-3xl text-black font-bold">453</p>
              <p className="text-2xl text-black">Awards</p>
            </div>
            <div className="absolute bottom-1 right-1">
              <Image src={Spring} alt="thunder" className="lg:w-[120px] md:w-[70px]" />
            </div>
          </div>
        </div>
        <div>
          <div className="lg:w-[470px] h-[263px] bg-[#324A34] rounded-lg relative p-6 mt-3.5 ">
            <div className="absolute top-0 left-0 bottom-0 right-0">
              <Image src={BlurThree} alt="blur-bg" />
            </div>
            {/* 
            <div className="h-full flex justify-center flex-col">
              <p className="text-3xl text-black font-bold">453</p>
              <p className="text-2xl text-black">Awards</p>
            </div>
            <div className="absolute bottom-1 right-1">
              <Image src={Spring} alt="thunder" />
            </div> */}
          </div>
        </div>
      </div>
      {/* right div */}
      <div className="basis-full md:basis-[51.3%]"></div>
    </div>
  );
};

export default CompanyOverview;

// 58.3;
// 41.7
