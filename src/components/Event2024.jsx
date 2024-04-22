import React from "react";
import Navbar from "./Navbar";
import "../index.scss";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import GoToTop from "./GoToTop";

function Event2024() {
  return (
    <>
      <div className="events w-full bg-[gray] min-h-[100vh] flex items-center justify-center py-[4rem] md:py-[0]">
        <Navbar />
        <GoToTop />
        {/* <div className="w-[95%] flex items-center justify-center h-auto lg:w-[90%] xl:w-[1200px] pt-[5rem]"></div> */}
      </div>

      <div className="w-full xm:w-[85%] md:w-[47rem] py-[0] xm:py-[2rem]">
        <div className="w-full space-x-[3rem] py-[1.5rem] mt-[2rem] xm:mt-[4rem] bg-[#36ACE2] flex flex-wrap items-center justify-center sm:[clip-path:polygon(0_0,100%_0%,91%_100%,0%_100%)]">
          <h1 className="relative text-[#1d1c1c] w-full sm:w-[470px] xm:w-[525px] md:w-[650px] text-center xm:text-left mx-auto text-[3rem] xm:text-[4rem] md:text-[5rem] font-coral font-[500]  py-[0.5rem]">
            RRETH <span className="">Eventit</span>
            <div className="absolute right-[3.5rem] bottom-[10px] w-[10rem] h-[10px] xm:h-[15px] bg-[#fcfcfc]"></div>
          </h1>
        </div>
      </div>
      <div className="w-[95%] mx-auto flex flex-col items-center justify-center h-auto lg:w-[90%] xl:w-[1200px] ">
        <div className="w-full flex flex-col xm:flex-row items-center justify-between gap-[20px] py-[2rem]">
          <div className="w-full xm:w-[55%]">
            <p className="text-[1.2rem] w-full md:w-[90%] font-nn font-[300] py-[1rem] mx-auto">
              Mirë se vini në emocionin e Maratonës së Gjilanit, një ngjarje
              spektakolare e cila u mbajt më 14 prill! Ky event pasuroi shpirtin
              sportiv të qytetit duke sjellë një gamë të gjerë disiplinash, nga
              gjysmëmaratona 21 km, vrapimi i mesëm 10 km, deri te vrapimi i
              shkurtër 5 km.
            </p>
            <p className="text-[1.2rem] w-full md:w-[90%] font-nn font-[300] py-[1rem] mx-auto">
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
          <Link to={"/foto2024"} className="w-full">
            <div className="cursor-pointer foto flex items-center justify-center relative w-full xm:w-[42rem] h-[270px] xm:h-[350px]">
              <h1 className="absolute text-[70px] text-[white] font-semibold font-coral">
                FOTO
              </h1>
            </div>{" "}
          </Link>
          <div className="w-full xm:w-[55%] flex flex-col mx-auto justify-center items-center">
            <div>
              <div>
                <h1 className="text-[2rem] xm:text-[2.5rem] font-[400] font-coral italic text-[#36ACE2]">
                  Diciplinat:
                </h1>
                <ul>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c]">
                    21Km Half Marathon
                  </li>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c]">
                    10Km Free Run
                  </li>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c]">
                    5Km Free Run/Walk
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-[2rem] xm:text-[2.5rem] font-coral italic text-[#36ACE2]">
                  Data:
                </h1>
                <ul>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c]">
                    14 Mars 2024
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-[2rem] xm:text-[2.5rem] font-coral italic text-[#36ACE2]">
                  Start/Finish:
                </h1>
                <ul>
                  <li className="text-[1.3rem] xm:text-[1.5rem] font-nn text-[#1d1c1c]">
                    Sheshi Agim Ramadani, Gjilan
                  </li>
                </ul>
              </div>
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

export default Event2024;
