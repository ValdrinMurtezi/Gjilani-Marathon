import React from "react";
import Navbar from "./Navbar";
import GoToTop from "./GoToTop";
import "../index.scss";

function Results() {
  return (
    <>
      <div className="results w-full bg-[gray] min-h-[55vh] flex items-center justify-center py-[4rem] md:py-[0]">
        <Navbar />
        <GoToTop />
        <div className="w-[95%] flex items-center justify-center h-auto lg:w-[90%] xl:w-[1200px] pt-[5rem]"></div>
      </div>

      <div className="w-full xm:w-[85%] md:w-[47rem] py-[2rem]">
        <div className="w-full space-x-[3rem] py-[1.5rem] mt-[4rem] bg-[#36ACE2] flex flex-wrap items-center justify-center sm:[clip-path:polygon(0_0,100%_0%,91%_100%,0%_100%)]">
          <h1 className="relative text-[#1d1c1c] w-full sm:w-[470px] xm:w-[525px] md:w-[650px] text-center xm:text-left mx-auto text-[3rem] xm:text-[4.5rem] md:text-[5.7rem] font-montserrat font-[700]  py-[0.5rem]">
            REZULTATET
            <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[10px] xm:h-[15px] bg-[#fcfcfc]"></div>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Results;
