import React from "react";
import Navbar from "./Navbar";
import GoToTop from "./GoToTop";
import "../index.scss";
import { Link } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

function Events() {
  return (
    <>
      <div className="events w-full flex items-center cursor-pointer hover:text-[black] duration-200 justify-center py-[6rem] md:py-[8rem]">
        <Navbar />
        <GoToTop />
        <div>
          <h1 className="text-[2.5rem] md:text-[3rem] text-center relative w-[170px] md:w-[200px] mx-auto  italic text-[white] font-montserrat font-[700] pt-[3rem]">
            Eventet
            <div className="w-[8rem] h-[4px] bg-[orangered] absolute"></div>
          </h1>
        </div>
      </div>{" "}
      <Link to={"/event2024"}>
        <div className="cup-banner rounded-[15px] duration-500 mx-auto w-[90%] md:w-[80%] py-[3rem] mt-[2rem] xm:mt-[4rem] text-center">
          <h1 className="text-[28px] xm:text-[30px] md:text-[40px] text-white py-[1rem] font-semibold">
            Gjilani Half Marathon 2024
          </h1>
        </div>
      </Link>
      <div className="bg-[#c9c8c8f5] rounded-[15px] mx-auto w-[90%] md:w-[80%] py-[3rem] my-[2rem] xm:my-[4rem] text-center">
        <h1 className="text-[28px] xm:text-[30px] md:text-[40px] text-white py-[1rem] font-semibold">
          Coming soon...
        </h1>
      </div>
      <div className="footer w-full py-[1.5rem] text-[#1d1c1c] flex flex-col items-center justify-center">
        <div className="text-center w-full bg-[#36ACE2] py-[1rem]">
          <div className="w-[200px] mx-auto relative">
            <img src={"/imgs/logo3.png"} className="w-full h-auto" alt="" />
          </div>
          <h1 className="text-[2.5rem] xm:text-[3.6rem] text-[#1d1c1c] font-coral font-[500] italic">
            GJILANI MARATHON 2024
          </h1>
          <div className="w-full mx-auto flex flex-col items-center justify-center py-[12px]">
            <h1 className="text-[1.3rem] font-nn flex items-center gap-x-[8px] text-[#fcfcfc]">
              <IoIosPhonePortrait size={"30"} className="text-[#1d1c1c]" />
              +383 43 860 460
            </h1>
            <h1 className="text-[1.3rem] font-nn flex items-center gap-x-[8px] text-[#fcfcfc]">
              <AiOutlineMail size={"30"} className="text-[#1d1c1c]" />
              Gjilanimarathon@gmail.com
            </h1>
            <h1 className="text-[1.3rem] font-nn flex items-center gap-x-[8px] text-[#fcfcfc]">
              <IoLocationOutline size={"30"} className="text-[#1d1c1c]" />
              Sheshi Agim Ramadani
            </h1>
          </div>
        </div>
        <p className="text-center text-[1rem] xm:text-[1.3rem] mt-[0.5rem] pt-[1rem] font-nn text-[#1d1c1c]">
          © Të gjitha të drejtat e rezervuara
        </p>
      </div>
    </>
  );
}

export default Events;
