import React from 'react';
import { array } from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';

import { SliderButton } from '../../UI';

// Import Swiper styles
import 'swiper/swiper.min.css';
import './SliderAvailable.scss';

export const SliderAvailable = ({ availableHotels }) => {
  return (
    <Swiper
      loop={availableHotels.length > 4}
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
      {availableHotels.length > 4 && <SliderButton />}

      <>
        {availableHotels.map(hotel => (
          <SwiperSlide key={hotel.id}>
            <NavLink className="slide" to={`hotels/${hotel.id}`}>
              <div className="slide-image">
                <img
                  className={'slide-image-item'}
                  src={hotel.imageUrl}
                  alt={hotel.name}
                />
              </div>
              <p className="slide-title">{hotel.name}</p>
              <h3 className="slide-subtitle">
                {hotel.city}, {hotel.country}
              </h3>
            </NavLink>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

SliderAvailable.propTypes = {
  availableHotels: array
};
