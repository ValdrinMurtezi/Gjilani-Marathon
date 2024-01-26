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
              Mirë se vini në botën emocionuese të Maratonës së Gjilanit - një
              garë e qëndrueshmërisë, pasionit dhe triumfit! Ndërsa përgatitemi
              për edicionin e 3-të të këtij eventi spektakolarë, që do të
              zhvillohet më 24 prill 2024, ju ftojmë të bëheni pjesë e një dite
              të mbushur me pasion, vendosmëri dhe emocion të paharruar.
            </p>
            <p className="text-[1rem] w-full md:w-[90%] font-montserrat font-[400] py-[1rem] mx-auto">
              Mirë se vini në botën emocionuese të Maratonës së Gjilanit - një
              garë e qëndrueshmërisë, pasionit dhe triumfit! Ndërsa përgatitemi
              për edicionin e 3-të të këtij eventi spektakolarë, që do të
              zhvillohet më 24 prill 2024, ju ftojmë të bëheni pjesë e një dite
              të mbushur me pasion, vendosmëri dhe emocion të paharruar.
            </p>
            <p className="text-[1rem] w-full md:w-[90%] font-montserrat font-[400] py-[1rem] mx-auto">
              Mirë se vini në botën emocionuese të Maratonës së Gjilanit - një
              garë e qëndrueshmërisë, pasionit dhe triumfit! Ndërsa përgatitemi
              për edicionin e 3-të të këtij eventi spektakolarë, që do të
              zhvillohet më 24 prill 2024, ju ftojmë të bëheni pjesë e një dite
              të mbushur me pasion, vendosmëri dhe emocion të paharruar.
            </p>
          </div>
          <div className="w-full xm:w-[75%] md:w-[32rem] bg-[gray] h-[25rem] xm:h-[30rem] xm:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)]">
            <img
              src={"/imgs/main2.jpg"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
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
