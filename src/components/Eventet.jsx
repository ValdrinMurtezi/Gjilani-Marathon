import React from "react";
import Navbar from "./Navbar";
import "../index.scss";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import GoToTop from "./GoToTop";

function Events() {
  return (
    <>
      <div className="events w-full bg-[gray] min-h-[100vh] flex items-center justify-center py-[4rem] md:py-[0]">
        <Navbar />
        <GoToTop />
        {/* <div className="w-[95%] flex items-center justify-center h-auto lg:w-[90%] xl:w-[1200px] pt-[5rem]"></div> */}
      </div>

      <div className="w-full xm:w-[85%] md:w-[47rem] py-[0] xm:py-[2rem]">
        <div className="w-full space-x-[3rem] py-[1.5rem] mt-[2rem] xm:mt-[4rem] bg-[#36ACE2] flex flex-wrap items-center justify-center sm:[clip-path:polygon(0_0,100%_0%,91%_100%,0%_100%)]">
          <h1 className="relative text-[#1d1c1c] w-full sm:w-[470px] xm:w-[525px] md:w-[650px] text-center xm:text-left mx-auto text-[3rem] xm:text-[4rem] md:text-[5rem] font-montserrat font-[700]  py-[0.5rem]">
            RRETH <span className="">Eventit</span>
            <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[10px] xm:h-[15px] bg-[#fcfcfc]"></div>
          </h1>
        </div>
      </div>
      <div className="w-[95%] mx-auto flex flex-col items-center justify-center h-auto lg:w-[90%] xl:w-[1200px] ">
        <div className="w-full flex flex-col xm:flex-row items-center justify-between gap-[20px] py-[2rem]">
          <div className="w-full xm:w-[55%]">
            <p className="text-[1rem] w-full md:w-[90%] font-montserrat font-[400] py-[1rem] mx-auto">
              Mirë se vini në emocionin e Maratonës së Gjilanit, një ngjarje
              spektakolare e cila do të mbahet më 14 prill! Ky event pasuron
              shpirtin sportiv të qytetit duke sjellë një gamë të gjerë
              disiplinash, nga gjysmëmaratona 21 km, vrapimi i mesëm 10 km, deri
              te vrapimi i shkurtër 5 km.
            </p>
            <p className="text-[1rem] w-full md:w-[90%] font-montserrat font-[400] py-[1rem] mx-auto">
              Nëse jeni një maratonas me përvojë që synon një rekord personal
              ose një fillimtar që pranon sfidën, Maratona e Gjilanit ofron
              kategori të ndryshme që përshtaten me të gjitha nivelet e
              kondicionit fizik. Ekipi i organizatorëve tanë të përkushtuar ka
              hartuar me kujdes një rrugë që shfaq bukurinë, trashëgiminë dhe
              frymën e komunës sone.
            </p>
          </div>
          <div className="w-full xm:w-[30rem] h-[270px] xm:h-[350px] bg-slate-200 xm:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)]">
            <img
              src={"/imgs/3.jpg"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse xm:flex-row mx-auto items-center justify-between gap-[20px] py-[0rem] xm:py-[2rem]">
          <div
            className="w-full xm:w-[42rem] h-[270px] xm:h-[350px] bg-slate-200 xm:[clip-path:polygon(0_0,100%_0%,75%_100%,0%_100%)]
"
          >
            <img src={"/imgs/1.jpg"} className="w-full h-full " alt="" />
          </div>
          <div className="w-full xm:w-[55%] flex flex-col mx-auto justify-center items-center">
            <div>
              <div>
                <h1 className="text-[2rem] xm:text-[2.5rem] font-semibold font-abel italic text-[#36ACE2]">
                  Diciplinat:
                </h1>
                <ul>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-medium text-[#1d1c1c]">
                    21Km Half Marathon
                  </li>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-medium text-[#1d1c1c]">
                    10Km Free Run
                  </li>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-medium text-[#1d1c1c]">
                    5Km Free Run/Walk
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-[2rem] xm:text-[2.5rem] font-semibold font-abel italic text-[#36ACE2]">
                  Data
                </h1>
                <ul>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-medium text-[#1d1c1c]">
                    14 Mars 2024
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-[2rem] xm:text-[2.5rem] font-semibold font-abel italic text-[#36ACE2]">
                  Start/Finish:
                </h1>
                <ul>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-medium text-[#1d1c1c]">
                    Sheshi Agim Ramadani, Gjilan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[2rem] flex items-center justify-center">
        <a
          href="https://www.kosovopass.com/pass/482/a?fbclid=IwAR2n19KbVknXgIk5cnr0TFHqUS8S358821G71V7PbrkkCGAQnnj6j5s6Oy4"
          target="_blank"
          rel="noreferrer"
          className="bg-[#36ACE2] border-[2px] border-[#1d1c1c] rounded-[15px] hover:bg-[#fcfcfc] hover:text-[#36ACE2] duration-200 text-[#fcfcfc] px-[5px] mt-[2rem] text-[28px] font-montserrat font-bold"
        >
          REGJISTROHU
        </a>
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

export default Events;
