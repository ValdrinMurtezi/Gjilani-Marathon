import React, { useState } from "react";
import GoToTop from "./GoToTop";
import Navbar from "./Navbar";
import "../index.scss";

function Gallery() {
  const [photos] = useState([
    { img: "/imgs/gallery/1.jpg" },
    { img: "/imgs/gallery/2.jpg" },
    { img: "/imgs/gallery/3.jpg" },
    { img: "/imgs/gallery/4.jpg" },
    { img: "/imgs/gallery/5.jpg" },
    { img: "/imgs/gallery/6.jpg" },
    { img: "/imgs/gallery/7.jpg" },
    { img: "/imgs/gallery/8.jpg" },
    { img: "/imgs/gallery/9.jpg" },
    { img: "/imgs/gallery/10.jpg" },
    { img: "/imgs/gallery/11.jpg" },
    { img: "/imgs/gallery/12.jpg" },
    { img: "/imgs/gallery/13.jpg" },
    { img: "/imgs/gallery/14.jpg" },
    { img: "/imgs/gallery/15.jpg" },
    { img: "/imgs/gallery/16.jpg" },
    { img: "/imgs/gallery/17.jpg" },
    { img: "/imgs/gallery/18.jpg" },
    { img: "/imgs/gallery/19.jpg" },
    { img: "/imgs/gallery/20.jpg" },
    { img: "/imgs/gallery/21.jpg" },
    { img: "/imgs/gallery/22.jpg" },
    { img: "/imgs/gallery/23.jpg" },
    { img: "/imgs/gallery/24.jpg" },
    { img: "/imgs/gallery/25.jpg" },
    { img: "/imgs/gallery/26.jpg" },
    { img: "/imgs/gallery/27.jpg" },
    { img: "/imgs/gallery/28.jpg" },
    { img: "/imgs/gallery/29.jpg" },
    { img: "/imgs/gallery/30.jpg" },
    { img: "/imgs/gallery/31.jpg" },
    { img: "/imgs/gallery/32.jpg" },
    { img: "/imgs/gallery/33.jpg" },
    { img: "/imgs/gallery/34.jpg" },
    { img: "/imgs/gallery/35.jpg" },
    { img: "/imgs/gallery/36.jpg" },
    { img: "/imgs/gallery/37.jpg" },
    { img: "/imgs/gallery/38.jpg" },
    { img: "/imgs/gallery/39.jpg" },
    { img: "/imgs/gallery/40.jpg" },
  ]);
  return (
    <>
      <div className="gallery w-full flex items-center cursor-pointer hover:text-[black] duration-200 justify-center py-[6rem] md:py-[8rem]">
        <Navbar />
        <GoToTop />
        <h1 className="text-[3rem] xm:text-[4.5rem] text-center relative  xm:w-[330px] mx-auto  italic text-[white] font-montserrat font-[700] pt-[3rem]">
          GALERIA
          <div className="w-[7rem] h-[4px] bg-[#36ACE2] absolute left-[7rem] xm:left-[13.5rem]"></div>
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

export default Gallery;
