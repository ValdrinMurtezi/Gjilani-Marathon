import React from "react";
import Navbar from "./Navbar";
import GoToTop from "./GoToTop";
import "../index.scss";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

function Results() {
  return (
    <>
      <div className="results w-full bg-[gray] min-h-[55vh] flex items-center justify-center py-[4rem] md:py-[0]">
        <Navbar />
        <GoToTop />
        <div className="w-[95%] flex items-center justify-center h-auto lg:w-[90%] xl:w-[1200px] pt-[5rem]"></div>
      </div>

      <div className="w-full xm:w-[85%] md:w-[47rem] py-[2rem]">
        <div className="w-full space-x-[3rem] py-[1.5rem] mt-[2rem] xm:mt-[4rem] bg-[#36ACE2] flex flex-wrap items-center justify-center sm:[clip-path:polygon(0_0,100%_0%,91%_100%,0%_100%)]">
          <h1 className="relative text-[#1d1c1c] w-full sm:w-[470px] xm:w-[525px] md:w-[650px] text-center xm:text-left mx-auto text-[3rem] xm:text-[4.5rem] md:text-[6.5rem] font-coral font-[500]  py-[0.5rem]">
            REZULTATET
            <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[10px] xm:h-[15px] bg-[#fcfcfc]"></div>
          </h1>
        </div>
      </div>

      <div className="w-full flex items-center justify-center flex-col py-[2rem] bg-slate-200">
        <h1 className="text-[2rem] xm:text-[2.5rem] py-[10px] font-coral italic text-[#36ACE2]">
          Rezultatet Gjilani Half-Marathon 2023
        </h1>
        <div className="w-[95%] h-auto lg:w-[90%] xl:w-[1200px] flex-col flex items-center justify-center">
          <div className="w-full justify-between flex flex-col md:flex-row gap-[1rem]">
            <div className="w-full md:w-[50%]">
              <h1 className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c] py-[10px]">
                Kategoria 21km - MESHKUJ
              </h1>
              <img
                src={"/imgs/gallery/21kmmeshkuj1.png"}
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h1 className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c] py-[10px]">
                Kategoria 21km - FEMRA
              </h1>
              <img
                src={"/imgs/gallery/21kmfemra.jpg"}
                className="w-full h-auto"
                alt=""
              />
            </div>
          </div>

          <div className="w-full justify-between flex flex-col md:flex-row gap-[1rem] pt-[2rem]">
            <div className="w-full md:w-[50%]">
              <h1 className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c] py-[10px]">
                Kategoria 10Km - MESHKUJ
              </h1>
              <img
                src={"/imgs/gallery/10kmmeshkuj.jpg"}
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h1 className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c] py-[10px]">
                Kategoria 10Km - FEMRA
              </h1>
              <img
                src={"/imgs/gallery/10kmfemra.jpg"}
                className="w-full h-auto"
                alt=""
              />
            </div>
          </div>
          <div className="w-full justify-between flex flex-col md:flex-row gap-[1rem] pt-[2rem]">
            <div className="w-full md:w-[50%]">
              <h1 className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c] py-[10px]">
                Kategoria 5Km - MESHKUJ
              </h1>
              <img
                src={"/imgs/gallery/5kmeshkuj.jpg"}
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h1 className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c] py-[10px]">
                Kategoria 5Km - FEMRA
              </h1>
              <img
                src={"/imgs/gallery/5kmfemra.jpg"}
                className="w-full h-auto"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-[2rem] xm:text-[2.5rem] pt-[2rem] xm:pt-[5rem] font-coral italic text-[#36ACE2]">
            Rezultatet Gjilani Half-Marathon 2022
          </h1>
          <div className="w-full justify-between flex flex-col md:flex-row gap-[1rem] pt-[0] xm:pt-[2rem]">
            <div className="w-full md:w-[50%]">
              <h1 className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c] py-[10px]">
                Kategoria 21Km - MESHKUJ
              </h1>
              <img
                src={"/imgs/gallery/22m.jpg"}
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h1 className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c] py-[10px]">
                Kategoria 21Km - FEMRA
              </h1>
              <img
                src={"/imgs/gallery/22fm.jpg"}
                className="w-full h-auto"
                alt=""
              />
            </div>
          </div>
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

export default Results;
