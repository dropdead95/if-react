import React from 'react';
import { useSwiper } from 'swiper/react';

import { Arrow } from '../../icons';

import style from './SliderButton.module.scss';

export const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div
      className={style.wrapper}
      onClick={() => swiper.slideNext()}
    >
      <Arrow />
    </div>
  );
};
