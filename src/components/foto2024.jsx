import React, { useState } from "react";
import GoToTop from "./GoToTop";
import Navbar from "./Navbar";
import "../index.scss";

function Foto2024() {
  const [photos] = useState([
    { img: "/imgs/2024/1.jpg" },
    { img: "/imgs/2024/2.jpg" },
    { img: "/imgs/2024/3.jpg" },
    { img: "/imgs/2024/4.jpg" },
    { img: "/imgs/2024/5.jpg" },
    { img: "/imgs/2024/6.jpg" },
    { img: "/imgs/2024/7.jpg" },
    { img: "/imgs/2024/8.jpg" },
    { img: "/imgs/2024/9.jpg" },
    { img: "/imgs/2024/10.jpg" },
    { img: "/imgs/2024/11.jpg" },
    { img: "/imgs/2024/12.jpg" },
    { img: "/imgs/2024/13.jpg" },
    { img: "/imgs/2024/14.jpg" },
    { img: "/imgs/2024/15.jpg" },
    { img: "/imgs/2024/16.jpg" },
    { img: "/imgs/2024/17.jpg" },
    { img: "/imgs/2024/18.jpg" },
    { img: "/imgs/2024/19.jpg" },
    { img: "/imgs/2024/20.jpg" },
    { img: "/imgs/2024/21.jpg" },
    { img: "/imgs/2024/22.jpg" },
    { img: "/imgs/2024/23.jpg" },
    { img: "/imgs/2024/24.jpg" },
    { img: "/imgs/2024/25.jpg" },
    { img: "/imgs/2024/26.jpg" },
    { img: "/imgs/2024/27.jpg" },
    { img: "/imgs/2024/28.jpg" },
    { img: "/imgs/2024/29.jpg" },
    { img: "/imgs/2024/30.jpg" },
    { img: "/imgs/2024/31.jpg" },
    { img: "/imgs/2024/32.jpg" },
    { img: "/imgs/2024/33.jpg" },
    { img: "/imgs/2024/34.jpg" },
    { img: "/imgs/2024/35.jpg" },
    { img: "/imgs/2024/36.jpg" },
    { img: "/imgs/2024/37.jpg" },
    { img: "/imgs/2024/38.jpg" },
    { img: "/imgs/2024/39.jpg" },
    { img: "/imgs/2024/40.jpg" },
  ]);
  return (
    <>
      <div className="gallery w-full flex items-center cursor-pointer hover:text-[black] duration-200 justify-center py-[6rem] md:py-[8rem]">
        <Navbar />
        <GoToTop />
        <h1 className="text-[2.5rem] md:text-[3rem] text-center relative w-[450px] mx-auto  italic text-[white] font-montserrat font-[700] pt-[3rem]">
          Foto të garës
          <div className="w-[8rem] h-[4px] bg-[orangered] absolute"></div>
        </h1>
      </div>

      <div class="foto-container w-[100] lg:w-[90%] xl:w-[1200px] mx-auto px-5 py-2 pt-[2rem]">
        {photos.map((photo) => {
          return (
            <a href={photo.img}>
              {" "}
              <img
                src={photo.img}
                className="w-full h-full object-cover rounded-[3px]"
                alt=""
              />
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Foto2024;
