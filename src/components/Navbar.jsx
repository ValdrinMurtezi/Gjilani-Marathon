import React, { useState } from "react";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

import { Link } from "react-router-dom";
import "../index.scss";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const changeNavColor = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <>
      <div
        className={
          navbar
            ? "fixed top-[0rem] z-[20] w-full shadow-lg text-[#0e0d0d] bg-[#fbfbfc] flex flex-col items-center justify-center "
            : "fixed top-[0rem]  w-full text-black flex flex-col bg-[#fcfcfc] items-center justify-center z-[10] "
        }
      >
        <div className="nav w-[95%] lg:w-[90%] py-[0.3rem] xl:w-[1200px] flex items-center md:justify-center justify-between">
          <div className="w-[12rem] block md:hidden">
            <img src={"/imgs/logo2.png"} className="w-full h-auto" alt="" />
          </div>

          <div className="hidden w-full md:flex items-center justify-between">
            <Link to={"/"}>
              <div className="w-[12rem] flex items-center">
                <img src={"/imgs/logo2.png"} className="w-full h-auto" alt="" />
              </div>
            </Link>
            <ul className=" font-openSans font-semibold italic text-[#36ACE2] md:flex space-x-6 lg:space-x-[4rem] text-[20px]  tracking-[1px] font-poppins items-center">
              <Link to={"/"}>
                <li className="hover:text-[#2f2f30] duration-300">Home</li>
              </Link>

              <Link to={"/info"}>
                <li className="hover:text-[#2f2f30] duration-300">About</li>
              </Link>

              <Link to={"/info"}>
                <li className="hover:text-[#2f2f30] duration-300">Events</li>
              </Link>

              <Link to={"/galeria"}>
                <li className="hover:text-[#2f2f30] duration-300">Gallery</li>
              </Link>
              <Link to={"/galeria"}>
                <li className="hover:text-[#2f2f30] duration-300">Results</li>
              </Link>
            </ul>
          </div>
          <div className="flex gap-x-[10px] md:hidden">
            <div className="flex gap-x-[3px] xm:gap-x-[10px] pt-[13px] md:hidden"></div>

            <button onClick={openMenu} className="block md:hidden">
              <CiMenuFries size="30px" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          menu
            ? "w-[18rem] sm:w-[23rem] bg-[#1d1c1c] text-[#fcfcfc] md:hidden flex flex-col justify-between py-[2rem] fixed h-full z-20 top-0 left-0 pt-[2rem] duration-300"
            : "fixed  -top-full z-10 h-full w-1/2 bottom-0 ease-in-out duration-300 left-0"
        }
      >
        <div className="flex flex-col items-center h-full justify-between pl-[1rem]   ">
          <div className="w-full flex flex-col ">
            <div className="flex items-center w-full">
              <Link to={"/"}>
                <div className="w-[12rem] ">
                  <img src={"/imgs/logo2.png"} className="w-full" alt="" />
                </div>
              </Link>
              <div className="w-full  flex justify-end pr-[1rem]">
                <button
                  onClick={closeMenu}
                  className="block md:hidden rounded-full px-[5px]"
                >
                  <CiMenuFries size="30px" />
                </button>
              </div>
            </div>
            <ul className="pt-[4rem] font-semibold italic text-[#fcfcfc] pl-[1rem] flex flex-col space-y-5 text-[1.3rem] xm:text-[1.5rem] tracking-[1px] font-poppins	">
              <Link to={"/"}>
                <li className="hover:text-[#2f2f30] duration-300">Home</li>
              </Link>

              <Link to={"/info"}>
                <li className="hover:text-[#2f2f30] duration-300">About</li>
              </Link>

              <Link to={"/eventet"}>
                <li className="hover:text-[#2f2f30] duration-300">Events</li>
              </Link>
              <Link to={"/galeria"}>
                <li className="hover:text-[#2f2f30] duration-300">Gallery</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
