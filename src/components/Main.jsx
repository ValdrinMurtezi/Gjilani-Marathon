import React from "react";
import Navbar from "./Navbar";
import "../index.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GiPodium } from "react-icons/gi";
import { SiCrowdsource } from "react-icons/si";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import GoToTop from "./GoToTop";

function Main() {
  return (
    <>
      <div className="header w-full bg-[gray] min-h-[100vh] flex items-center justify-center py-[4rem] md:py-[0]">
        <Navbar />
        <GoToTop />
        <div className="w-[95%] flex items-center justify-center h-auto lg:w-[90%] xl:w-[1200px] pt-[5rem]">
          <div className="text-[#ffffff] text-center w-[95%] md:w-[90%] pt-[3rem] md:pt-[5rem] ">
            <h1 className="text-[4rem] md:text-[5.5rem] xl:text-[5rem] text-center font-coral  leading-[3.5rem] md:leading-[4.5rem] font-[500]">
              MARATONA E GJILANIT 2025
            </h1>

            <div className="mt-[2rem] flex flex-col w-full items-center justify-center">
              <p class="main-p text-[2.2rem] italic block xm:inline font-extrabold py-[5px] md:text-[2.5rem] px-[0.5rem] xm:px-[3rem] text-[#fcfcfc] xl:text-[3rem] text-center font-nn leading-[2rem]">
                Sweat, Smile, Succeed. Own your race
              </p>

              {/* <a
                href="https://www.kosovopass.com/pass/482/a?fbclid=IwAR2n19KbVknXgIk5cnr0TFHqUS8S358821G71V7PbrkkCGAQnnj6j5s6Oy4"
                target="_blank"
                rel="noreferrer"
                className="bg-[#36ACE2] border-[2px] border-[#fcfcfc] rounded-[15px] hover:bg-[#fcfcfc] hover:text-[#36ACE2] duration-200 text-[#fcfcfc] px-[5px] mt-[2rem] text-[28px] font-montserrat font-bold"
              >
                REGJISTROHU
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto xm:h-[250px] flex flex-col xm:flex-row">
        <div className=" w-full xm:w-[65%] py-[3rem] xm:py-0 h-[100%] bg-[#36ACE2] flex items-center justify-center flex-col">
          <h1 className="text-[3rem] font-bold italic text-[#1d1c1c]">
            15/06/2025
          </h1>
          <h1 className="text-[3rem] relative font-coral font-bold italic text-[#fcfcfc] flex items-center">
            EDICIONI
            <span className="text-[6rem] absolute -top-[23px] left-[13rem] text-[#1d1c1c]">
              4
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

      <div className="pb-[2rem] pt-[2rem] mt-[2rem] xm:pt-[4rem] mx-auto w-[95%] gap-[20px] h-auto lg:w-[90%] xl:w-[1200px] flex flex-col xm:flex-row items-center xm:justify-between justify-center ">
        <div className=" w-full xm:w-[30%]  xm:py-0 h-auto xm:h-[390px] ">
          <img
            src={"/imgs/2025c.jpg"}
            className="w-full h-full object-cover  "
            alt=""
          />
        </div>
        <div className=" w-full xm:w-[45%] xm:py-0 h-auto xm:h-[200px] ">
          <img src={"/imgs/2025b.jpg"} className="w-full h-full" alt="" />
        </div>
        <div className=" w-full xm:w-[30%] xm:py-0 h-auto xm:h-[390px] ">
          <img
            src={"/imgs/2025a.jpg"}
            className="w-full h-full object-cover  "
            alt=""
          />
        </div>
      </div>

      <div className="pb-[2rem] pt-[2rem] xm:pt-[3rem] mx-auto w-[95%] h-auto  lg:w-[90%] xl:w-[1200px] flex flex-col items-center justify-center ">
        <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full">
            <h1 className="relative w-[300px] xm:w-[400px] text-left mx-auto text-[4.5rem] xm:text-[6.2rem] font-coral font-[500] py-[0.5rem]">
              ABOUT
              <div className="absolute right-[7rem] bottom-[15px] w-[7rem] h-[10px] xm:h-[10px] bg-[#36ACE2]"></div>
            </h1>
            <p className="text-[1rem] xm:text-[1.3rem] w-full md:w-[90%] font-nn font-normal py-[1rem] mx-auto">
              Mirë se vini në botën emocionuese të Maratonës së Gjilanit - një
              garë e qëndrueshmërisë, pasionit dhe triumfit! Ndërsa përgatitemi
              për edicionin e 4-të të këtij eventi spektakolarë, që do të
              zhvillohet më 15 qershorë 2025, ju ftojmë të bëheni pjesë e një
              dite të mbushur me pasion, vendosmëri dhe emocion të paharruar.
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

      <div className="main1 w-full mt-[4rem] flex flex-wrap justify-center gap-[5rem] py-[2.5rem]">
        <div className="flex flex-col items-center w-[10rem]">
          <BsFillPeopleFill size="110" className="text-[#36ACE2]" />

          <span className="text-[1.2rem] text-center font-semibold font-montserrat text-[#fcfcfc]">
            1000+ GARUES{" "}
          </span>
        </div>
        <div className="flex flex-col items-center w-[13rem]">
          <GiPodium size="110" className="text-[#36ACE2]" />

          <span className="text-[1.2rem] font-semibold font-montserrat text-[#fcfcfc]">
            PODIUM
          </span>
        </div>
        <div className="flex flex-col items-center w-[10rem]">
          <FaRegMoneyBillAlt size="110" className="text-[#36ACE2]" />

          <span className="text-[1.2rem] font-semibold font-montserrat text-[#fcfcfc] text-center">
            SHPËRBLIME
          </span>
        </div>
        <div className="flex flex-col items-center w-[10rem]">
          <SiCrowdsource size="110" className="text-[#36ACE2]" />

          <span className="text-center text-[1.2rem] font-semibold font-montserrat text-[#fcfcfc]">
            EMOCIONE
          </span>
        </div>
      </div>

      <div className="w-full gap-[1rem] flex flex-col md:flex-row items-center justify-between py-[2rem] mt-[2rem]">
        <div className="w-full md:w-[55%] items-center flex flex-col">
          <h1 className="relative w-[23rem] xm:w-[30rem] mx-auto text-[3.5rem] xm:text-[5rem] font-coral font-[500]  py-[0.5rem]">
            KATEGORITË
            <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[10px] xm:h-[15px] bg-[#36ACE2]"></div>
          </h1>
          <div className="w-full font-nn space-x-[3rem] py-[1.5rem] mt-[4rem] bg-[#1d1c1c] flex flex-wrap items-center justify-center md:[clip-path:polygon(0_0,100%_0%,91%_100%,0%_100%)]">
            <h1 className="text-[2.5rem] xm:text-[4rem] font-bold text-[#36ace2]">
              21
              <span>KM</span>
            </h1>
            <h1 className="text-[2.5rem] xm:text-[4rem] font-bold text-[#36ace2]">
              10
              <span>KM</span>
            </h1>
            <h1 className="text-[2.5rem] xm:text-[4rem] font-bold text-[#36ace2]">
              5<span>KM</span>
            </h1>
          </div>
        </div>
        <div className="w-[85%] xm:w-[30rem] md:w-[25rem] h-[450px] xm:h-[400px] md:h-[350px] object-cover bg-slate-300 mr-0 md:mr-[3rem] md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)]">
          <img src={"/imgs/1.jpg"} className="w-full h-full" alt="" />
        </div>
      </div>

      <div className="w-full py-[3rem] flex flex-col items-center justify-center">
        <h1 className="relative w-[23rem] xm:w-[30rem] mx-auto text-[4rem] xm:text-[5rem] font-coral font-[500]  py-[0.5rem]">
          SPONZORËT
          <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[10px] xm:h-[15px] bg-[#36ACE2]"></div>
        </h1>
        <div className="w-full flex flex-col xm:flex-row flex-wrap items-center justify-center gap-[1rem]">
          <img
            src={"/imgs/sponsors2.jpg"}
            className="w-[95%] xm:w-[85%] md:w-[45%] h-auto"
            alt=""
          />
          <img
            src={"/imgs/sponsors1.jpg"}
            className="w-[95%] xm:w-[85%] md:w-[45%] h-auto"
            alt=""
          />
          <img
            src={"/imgs/sponsors.jpg"}
            className="w-[95%] xm:w-[85%] md:w-[45%] h-auto"
            alt=""
          />
        </div>
      </div>

      <div className="footer w-full py-[1.5rem] text-[#1d1c1c] flex flex-col items-center justify-center">
        <div className="text-center w-full bg-[#36ACE2] py-[1rem]">
          <div className="w-[200px] mx-auto relative">
            <img src={"/imgs/logo3.png"} className="w-full h-auto" alt="" />
          </div>
          <h1 className="text-[2.5rem] xm:text-[3.6rem] text-[#1d1c1c] font-coral font-[500] italic">
            GJILANI MARATHON 2024
          </h1>
          <div className="w-full mx-auto font-[300] flex flex-col items-center justify-center py-[12px] font-nn">
            <h1 className="text-[1.3rem] flex items-center gap-x-[8px] text-[#fcfcfc]">
              <IoIosPhonePortrait size={"30"} className="text-[#1d1c1c]" />
              +383 43 860 460
            </h1>
            <h1 className="text-[1.3rem] flex items-center gap-x-[8px] text-[#fcfcfc]">
              <AiOutlineMail size={"30"} className="text-[#1d1c1c]" />
              Gjilanimarathon@gmail.com
            </h1>
            <h1 className="text-[1.3rem] flex items-center gap-x-[8px] text-[#fcfcfc]">
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

export default Main;
