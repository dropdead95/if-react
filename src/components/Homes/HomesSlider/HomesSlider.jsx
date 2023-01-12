import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { SliderButton } from '../../UI/SliderButton';

import { data } from '../homesData';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';

import './HomesSlider.css';

export const HomesSlider = () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      slidesPerView={4}
      spaceBetween={16}
      breakpoints={{
        320: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 4
        }
      }}
      modules={[Navigation]}
    >
      <SliderButton />
      <>
        {data.map(({ id, city, country, imageUrl, name }) => (
          <SwiperSlide className="homes__slide" key={id}>
            <div className="homes__slide-image">
              <img
                className="homes__slide-image-item"
                src={imageUrl}
                alt={name}
              />
            </div>
            <a href="#" className="homes__slide-title">
              {name}
            </a>
            <h3 className="homes__slide-subtitle">
              {city}, {country}
            </h3>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};
