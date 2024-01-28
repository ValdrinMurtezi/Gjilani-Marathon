import React from "react";
import Navbar from "./Navbar";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

function About() {
  return (
    <>
      <div className="about w-full bg-[gray] min-h-[55vh] flex items-center justify-center py-[4rem] md:py-[0]">
        <Navbar />
        {/* <GoToTop /> */}
        <div className="w-[95%] flex items-center justify-center h-auto lg:w-[90%] xl:w-[1200px] pt-[5rem]"></div>
      </div>

      <div className="w-full xm:w-[85%] md:w-[47rem] py-[2rem]">
        <div className="w-full space-x-[3rem] py-[1.5rem] mt-[4rem] bg-[#36ACE2] flex flex-wrap items-center justify-center sm:[clip-path:polygon(0_0,100%_0%,91%_100%,0%_100%)]">
          <h1 className="relative text-[#1d1c1c] w-full sm:w-[470px] xm:w-[525px] md:w-[650px] text-center xm:text-left mx-auto text-[3rem] xm:text-[4.5rem] md:text-[5.7rem] font-montserrat font-[700]  py-[0.5rem]">
            RRETH <span className="">Nesh</span>
            <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[10px] xm:h-[15px] bg-[#fcfcfc]"></div>
          </h1>
        </div>
      </div>

      <div className="w-[95%] flex items-center justify-center py-[2rem] lg:w-[90%] xl:w-[1200px] mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[55%] ">
            <p className="text-[1rem] w-full md:w-[90%] font-montserrat font-[400] py-[1rem] mx-auto">
              Maratona e Gjilanit është ndërë organizimet më të mëdha në qytetin
              e Gjilanit, por edhe në rajon. E mbështetur edhe nga Klubi Atletik
              i Kosoves dhe Komuna e Gjilanit, kjo maratonë ka filluar të mbahet
              në vitin 2022 dhe ky është edicioni i 3të i saj.
            </p>
            <p className="text-[1rem] w-full md:w-[90%] font-montserrat font-[400] py-[1rem] mx-auto">
              Maratona e Gjilanit premton më shumë se një garë; është një
              përvojë që bashkon atletë me përvojë, fillimtarë entuziastë dhe
              çdo të kujt i pëlqen sfida. Vendosur në zemër të Gjilanit, kjo
              maratonë zhvillohet para sfondit të peizazheve të bukura të
              komunës sonë, duke kombinuar energjinë urbane me qetësinë e
              natyrës.
            </p>

            <p className="text-[1rem] w-full md:w-[90%] font-montserrat font-[400] py-[1rem] mx-auto">
              Maratona e Gjilanit nuk është vetëm një garë; është një festë e
              bashkimit dhe diversitetit. Kjo ngjarje sjell së bashku individë
              nga të gjitha sferat e jetës, duke kultivuar një ndjenjë
              komuniteti dhe miqësie. Kur të kalosh vijën e fundit, thirrjet dhe
              mbështetja e përbashkët nga vrapuesit dhe shikuesit do të
              përforcojnë triumfin e përbashkët përballë sfidave.
            </p>
          </div>
          <div className="w-full xm:w-[75%] md:w-[32rem] h-[25rem] xm:h-[30rem] xm:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)]">
            <img
              src={"/imgs/main2.jpg"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-[95%] flex flex-col items-center justify-center py-[2rem] lg:w-[90%] xl:w-[1200px] mx-auto">
        <div className="w-full flex flex-col xm:flex-row justify-between items-center gap-[1rem]">
          <div className="w-full sm:w-[80%] xm:w-[60%] h-[250px] xm:h-[250px] md:h-[370px] [clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]">
            <img
              src={"/imgs/47.jpg"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center sm:w-[80%] xm:w-[50%] h-[250px] xm:h-[250px] md:h-[370px]">
            <h1 className="relative w-[23rem] xm:w-[21rem] mx-auto text-[3rem] font-montserrat font-[700]  py-[0.5rem]">
              MISIONI YNË
              <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[8px] bg-[#36ACE2]"></div>
            </h1>
            <p className="text-[1.6rem] font-bold italic py-[10px]">
              - Promovimi i shëndetit dhe aktivitetit fizik
            </p>
            <p className="text-[1.6rem] font-bold italic py-[10px]">
              - Përhapja e vetëdijes dhe kujdesit për mjedisin
            </p>
            <p className="text-[1.6rem] font-bold italic py-[10px]">
              - Edukimi dhe zhvillimi i talentëve lokal
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-[10px] mt-[4rem]">
          <h1 className="relative w-[23rem] xm:w-[28.5rem] mx-auto text-[3rem] xm:text-[4rem] font-montserrat font-[700]  py-[0.5rem]">
            PARTNERËT
            <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[10px] xm:h-[15px] bg-[#36ACE2]"></div>
          </h1>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center space-x-[3rem]">
          <img
            src={"/imgs/komuna.png"}
            className="w-[170px] h-auto object-cover"
            alt=""
          />
          <img
            src={"/imgs/fak.jpeg"}
            className="w-[170px] h-auto object-cover"
            alt=""
          />
          <img
            src={"/imgs/federata2.png"}
            className="w-[170px] h-auto object-cover"
            alt=""
          />
          <img
            src={"/imgs/universiteti.png"}
            className="w-[170px] h-auto object-cover"
            alt=""
          />
          <img
            src={"/imgs/federata.jpg"}
            className="w-[170px] h-auto object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="footer w-full py-[1.5rem] text-[#1d1c1c] flex flex-col items-center justify-center">
        <div className="text-center w-full bg-[#36ACE2] py-[1rem]">
          <div className="w-[200px] mx-auto relative">
            <img src={"/imgs/logo3.png"} className="w-full h-auto" alt="" />
          </div>
          <h1 className="text-[2rem] xm:text-[3rem] text-[#1d1c1c] font-montserrat font-[800] italic">
            GJILANI MARATHON 2024
          </h1>
          <div className="w-full mx-auto flex flex-col items-center justify-center py-[12px]">
            <h1 className="text-[1.3rem] font-semibold flex items-center gap-x-[8px] text-[#fcfcfc]">
              <IoIosPhonePortrait size={"30"} className="text-[#1d1c1c]" />
              +383 43 860 460
            </h1>
            <h1 className="text-[1.3rem] font-semibold flex items-center gap-x-[8px] text-[#fcfcfc]">
              <AiOutlineMail size={"30"} className="text-[#1d1c1c]" />
              Gjilanimarathon@gmail.com
            </h1>
            <h1 className="text-[1.3rem] font-semibold flex items-center gap-x-[8px] text-[#fcfcfc]">
              <IoLocationOutline size={"30"} className="text-[#1d1c1c]" />
              Sheshi Agim Ramadani
            </h1>
          </div>
        </div>
        <p className="text-center text-[1rem] xm:text-[1.3rem] mt-[0.5rem] pt-[1rem] font-semibold text-[#1d1c1c]">
          © Të gjitha të drejtat e rezervuara
        </p>
      </div>
    </>
  );
}

export default About;
