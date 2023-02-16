import React from 'react';
import { array, bool } from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderButton } from '../../UI';
import { Skeleton } from '../../UI/Skeleton';

import 'swiper/swiper.min.css';
import './SliderHomes.scss';

export const SliderHomes = ({ isLoading, hotels }) => {
  return (
    <>
      {isLoading ? (
        <Swiper
          loop={false}
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
            {[...new Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <Skeleton />
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      ) : (
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
            {hotels.map(({ id, imageUrl, name, city, country }) => (
              <SwiperSlide className="slide" key={id}>
                <div className="slide-image">
                  <img
                    className={'slide-image-item'}
                    src={imageUrl}
                    alt={name}
                  />
                </div>
                <a href="#" className="slide-title">
                  {name}
                </a>
                <h3 className="slide-subtitle">
                  {city}, {country}
                </h3>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      )}
    </>
  );
};

SliderHomes.propTypes = {
  isLoading: bool,
  hotels: array
};
