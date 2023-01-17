import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderButton } from '../../UI';

import 'swiper/swiper.min.css';
import './SliderHomes.scss';

export const SliderHomes = ({ hotels }) => {
  return (
    <Swiper
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
    >
      <SliderButton />
      <>
        {hotels.map(hotel => (
          <SwiperSlide className="slide" key={hotel.id}>
            <div className="slide-image">
              <img
                className={'slide-image-item'}
                src={hotel.imageUrl}
                alt={hotel.name}
              />
            </div>
            <a href="#" className="slide-title">
              {hotel.name}
            </a>
            <h3 className="slide-subtitle">
              {hotel.city}, {hotel.country}
            </h3>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};
