'use client'
import './home.css'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Mousewheel } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import { dirname } from 'path';


export default function Home(){
console.log(dirname)
    return(
        <div className='main-swiper'>
           <Swiper
                navigation={true}
                pagination={{clickable: true,}}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Swiper
                            className="mySwiper2 swiper-v"
                            direction={"vertical"}
                            spaceBetween={50}
                            pagination={{
                              clickable: true,
                            }}
                            mousewheel={true}
                            modules={[Pagination, Mousewheel]}
                        >
                            <SwiperSlide><img src="imgs/shoe1.jpg"/></SwiperSlide>
                            <SwiperSlide><img src='imgs/shoe2.jpg'/></SwiperSlide>
                            <SwiperSlide><img src='imgs/shoe3.jpg'/></SwiperSlide>
                            <SwiperSlide><img src='imgs/shoe4.jpg'/></SwiperSlide>
                            <SwiperSlide>
                                <div className='footer-div'>

                                </div>
                            </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        direction={"vertical"}
                        spaceBetween={50}
                        pagination={{
                          clickable: true,
                        }}
                        mousewheel={true}
                        modules={[Pagination, Mousewheel]}
                    >
                        <SwiperSlide>Vertical Slide 1</SwiperSlide>
                        <SwiperSlide>Vertical Slide 2</SwiperSlide>
                        <SwiperSlide>Vertical Slide 3</SwiperSlide>
                        <SwiperSlide>Vertical Slide 4</SwiperSlide>
                        <SwiperSlide>Vertical Slide 5</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        direction={"vertical"}
                        spaceBetween={50}
                        pagination={{
                          clickable: true,
                        }}
                        mousewheel={true}
                        modules={[Pagination, Mousewheel]}
                    >
                        <SwiperSlide>Vertical Slide 1</SwiperSlide>
                        <SwiperSlide>Vertical Slide 2</SwiperSlide>
                    </Swiper>
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
};