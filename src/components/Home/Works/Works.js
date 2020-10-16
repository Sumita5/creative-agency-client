import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import carouselOne from '../../../images/carousel-1.png';
import carouselTwo from '../../../images/carousel-2.png';
import carouselThree from '../../../images/carousel-3.png';
import carouselFour from '../../../images/carousel-4.png';
import carouselFive from '../../../images/carousel-5.png';

SwiperCore.use([Pagination]);


const Works = () => {
    return (
        <section className="ourWorks text-light text-center  p-5" style={{ backgroundColor: "#111430" }}>
        
            
                <h2>Here are some of <span className="text-brand">our works</span></h2>
        
            <br /><br />
            <div className="worksForLargeScreen">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

            >
                <SwiperSlide><img height="300" src={carouselOne} alt="" /></SwiperSlide>
                <SwiperSlide><img height="300" src={carouselTwo} alt="" /></SwiperSlide>
                <SwiperSlide><img width="400" height="300" src={carouselThree} alt="" /></SwiperSlide>
                <SwiperSlide><img height="300" src={carouselFour} alt="" /></SwiperSlide>
                <SwiperSlide><img height="300" src={carouselFive} alt="" /></SwiperSlide>

            </Swiper>
            </div>
            <div className="worksForSmallScreen d-md-none">
            <img className="img-fluid mb-3" src={carouselOne} alt="" />
            <img className="img-fluid mb-3" src={carouselTwo} alt="" />
            <img className="img-fluid mb-3" src={carouselThree} alt="" />
            <img className="img-fluid mb-3" src={carouselFour} alt="" />
            <img className="img-fluid mb-3" src={carouselFive} alt="" />
            </div>

        
        </section>
    );
};

export default Works;