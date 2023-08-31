'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MySwiper() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="rounded-[48px] bg-my flex flex-col justify-center items-center gap-2 p-4 w-96 h-96 grad-main">
                        <h3 className="text-white text-4xl uppercase text-center font-extrabold">Exportações Ilimitadas</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-[48px] bg-my flex flex-col justify-center items-center gap-2 p-4 w-96 h-96 grad-main">
                        <h3 className="text-white text-4xl uppercase text-center font-extrabold">Visualização em tabela</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-[48px] bg-my flex flex-col justify-center items-center gap-2 p-4 w-96 h-96 grad-main">
                        <h3 className="text-white text-4xl uppercase text-center font-extrabold">Intuitivo e prático</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}