"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';

import srcImageHero from "../../assets/images/img_seater_1.png";

const Hero = () => {
  return (
    <div className=" bg-darker-yellow">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="w-full hero-height relative">
            <div className="z-10 absolute left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 font-medium lg:bottom-[100px] lg:left-[30%]">
              <p className="text-[64px] leading-none">
                Rocket single
                <br />
                seater
              </p>
              <Link href="#" className="text-[24px] border-bottom-custom pb-2">
                Shop Now
              </Link>
            </div>
            <Image
              className="absolute top-10 left-1/2 -translate-x-1/2 w-auto h-[500px] max-h-full lg:h-[700px] lg:left-[60%] scale-125"
              alt="Seater"
              src={srcImageHero}
              sizes="100vh"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full hero-height relative">
            <div className="z-10 absolute left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 font-medium lg:bottom-[100px] lg:left-[30%]">
              <p className="text-[64px] leading-none">
                Rocket single
                <br />
                seater
              </p>
              <Link href="#" className="text-[24px] border-bottom-custom pb-2">
                Shop Now
              </Link>
            </div>
            <Image
              className="absolute top-10 left-1/2 -translate-x-1/2 w-auto h-[500px] max-h-full lg:h-[700px] lg:left-[60%] scale-125"
              alt="Seater"
              src={srcImageHero}
              sizes="100vh"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
