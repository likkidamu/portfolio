import React, { useContext } from 'react';
import './portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'; // Import fade effect for cool transitions

// Import Swiper core and modules directly from 'swiper'
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper/modules';

// Import images
import Ecom from '../assets/img/ecommerce.png';
import Music from '../assets/img/musicapp.png';
import Shopease from '../assets/img/shopease.jpg';
import Trade from '../assets/img/trade.jpg';
import weather from '../assets/img/Weatherapp.jpg';
import news from '../assets/img/news.jpg'
import { themeContext } from "../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkTheme = theme.state.darkmode;

  return (
    <div className="ProjectsSwiper" id="Projects">
      <span style={{ color: darkTheme ? 'white' : 'black' }}>My Recent</span>
      <span>Projects</span>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectFade]}
        spaceBetween={30} // Space between slides
        slidesPerView={1} // One slide per view (perfect for showcasing projects)
        grabCursor={true} // Enable cursor grab
        navigation // Enable navigation buttons (next/prev)
        pagination={{
          clickable: true, // Enable clickable dots at the bottom
          dynamicBullets: true, // Make the pagination bullets dynamic
        }}
        scrollbar={{ draggable: true }} // Enable draggable scrollbar
        autoplay={{
          delay: 2500, // Delay between transitions
          disableOnInteraction: false, // Keep autoplay even after user interaction
        }}
        effect="fade" // Use fade effect for smooth transitions
        className="ProjectsSwiper-slider"
      >
        <SwiperSlide>
          <img src={Ecom} alt="E-commerce project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Music} alt="Music App project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={weather} alt="E-commerce project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shopease} alt="shopease" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Trade} alt="Trade App project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={news} alt="Trade App project" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
