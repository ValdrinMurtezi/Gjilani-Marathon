import React from "react";
import Navbar from "./Navbar";
// import Info from "./Info";
import "../index.scss";
// import GoToTop from "./GoToTop";
import { FaLocationDot } from "react-icons/fa6";

function Main() {
  return (
    <>
      <div className="header w-full bg-[gray] min-h-[100vh] flex items-center justify-center py-[4rem] md:py-[0]">
        <Navbar />
        {/* <GoToTop /> */}
        <div className="w-[95%] flex items-center justify-center h-auto lg:w-[90%] xl:w-[1200px] pt-[5rem]">
          <div className="text-[#ffffff] text-center w-[95%] md:w-[90%] pt-[3rem] md:pt-[5rem] ">
            <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[5rem] xl:text-[4.5rem] text-center font-montserrat  leading-[3.3rem] sm:leading-[4rem] md:leading-[4.5rem] font-[700]">
              MARATONA E GJILANIT 2024
            </h1>

            <p class="text-[1.5rem] italic block xm:inline font-extrabold sm:text-[2rem] md:text-[2.5rem] px-0 xm:px-[3rem] text-[#1d1c1c] bg-[#ffffff] rounded-[10px] xl:text-[3rem] text-center  font-montserrat leading-[2.5rem] md:leading-[4.5rem]">
              SFIDONI LIMITET TUAJA
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto xm:h-[250px] flex flex-col xm:flex-row">
        <div className=" w-full xm:w-[65%] py-[3rem] xm:py-0 h-[100%] bg-[#36ACE2] flex items-center justify-center flex-col">
          <h1 className="text-[3rem] font-bold italic text-[#1d1c1c]">
            24/04/2024
          </h1>
          <h1 className="text-[3rem] relative font-bold italic text-[#fcfcfc] flex items-center">
            EDICIONI
            <span className="text-[6rem] absolute -top-[23px] left-[13rem] text-[#1d1c1c]">
              3
            </span>
          </h1>
        </div>
        <div className="cups w-full bg-[#36ACE2] xm:w-[40rem] h-[200px] xm:h-full">
          <img
            src={"/imgs/cups.jpg"}
            className="w-full h-full object-cover edicioni "
            alt=""
          />
        </div>
      </div>

      <div className="pb-[2rem] pt-[4rem] xm:pt-[6rem] mx-auto w-[95%] h-auto  lg:w-[90%] xl:w-[1200px] flex flex-col items-center justify-center ">
        <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full">
            <h1 className="relative w-[300px] xm:w-[400px] text-left mx-auto text-[4rem] xm:text-[5.7rem] font-montserrat font-[700]  py-[0.5rem]">
              ABOUT
              <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[10px] xm:h-[15px] bg-[#36ACE2]"></div>
            </h1>
            <p className="text-[1rem] xm:text-[1.2rem] w-full md:w-[90%] font-montserrat font-[400] py-[1rem] mx-auto">
              Mirë se vini në botën emocionuese të Maratonës së Gjilanit - një
              garë e qëndrueshmërisë, pasionit dhe triumfit! Ndërsa përgatitemi
              për edicionin e 3-të të këtij eventi spektakolarë, që do të
              zhvillohet më 24 prill 2024, ju ftojmë të bëheni pjesë e një dite
              të mbushur me pasion, vendosmëri dhe emocion të paharruar.
            </p>
          </div>
          <div className="about-img w-full md:w-[55rem] h-full xm:h-[400px] bg-[gray]">
            <img
              src={"/imgs/main1.jpg"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="footer w-full py-[1.5rem]  flex items-center justify-center">
        <div className="text-center">
          <div className="w-[170px] mx-auto relative">
            <img src={"/imgs/logo2.png"} className="w-full h-auto" alt="" />
          </div>
          <h1 className="text-[2rem] xm:text-[3rem] font-montserrat font-[800] italic">
            GJILANI MARATHON
          </h1>
          <div className="w-full mx-auto flex flex-col items-center justify-center py-[12px]">
            <h1 className="text-[1.3rem] font-bold flex items-center gap-x-[8px]">
              +383 44 552 052
            </h1>
            <h1 className="text-[1.3rem] font-bold flex items-center gap-x-[8px]">
              mountainbike06@hotmail.com
            </h1>
          </div>
          <p className="text-[1rem] xm:text-[1.3rem] mt-[0.5rem] pt-[1rem] font-semibold text-[black] border-t-2 border-[#36ACE2]">
            © Të gjitha të drejtat e rezervuara
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
