import React, { useEffect, useState } from 'react';

import styles from './HotelPage.module.scss';

import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { useParams } from 'react-router-dom';

import { hotelsAPI } from '../../API';

export const HotelPage = () => {
  const [hotel, setHotel] = useState({});
  const { id } = useParams();

  useEffect(() => {
    hotelsAPI.getHotel(id).then(hotel => setHotel(hotel));
  }, []);

  return (
    <div>
      <Header className={styles['hotel-header']} />
      <Container>
        <div className={styles.content}>
          <img
            className={styles.image}
            src={hotel.imageUrl}
            alt={hotel.name}
          />
          <div className={styles.desc}>
            <h1 className={styles.title}>{hotel.name}</h1>
            <h3 className={styles.city}>{hotel.city}</h3>
            <h3 className={styles.country}>{hotel.country}</h3>
          </div>
        </div>
      </Container>
    </div>
  );
};
