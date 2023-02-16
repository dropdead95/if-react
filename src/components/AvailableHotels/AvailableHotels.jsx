import React, {
  useRef,
  useEffect,
  useContext,
  useState
} from 'react';
import { CircleLoader } from 'react-spinners';

import { Container } from '../Container';
import { SliderAvailable } from './SliderAvailable';

import { fetchData, wrapPromise } from '../../utils/wrapPromise';

import '../../scss/components/AvailableHotels.scss';

import { AppContext } from '../App/App';
import { hotelsAPI } from '../../API';

function AvailableHotels() {
  const availableHotelsRef = useRef(null);
  const [availableHotels, setAvailableHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { context } = useContext(AppContext);
  const availableHotelsRequest = wrapPromise(
    fetchData('hotels', context.searchValue)
  );

  useEffect(() => {
    setIsLoading(true);
    hotelsAPI.searchAvailableHotels(context.searchValue).then(() => {
      setAvailableHotels(availableHotelsRequest);
      setIsLoading(false);
    });
  }, [
    context.searchValue,
    context.adults,
    context.selectedDate,
    context.kids,
    context.rooms
  ]);

  useEffect(() => {
    availableHotelsRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }, [availableHotels, isLoading]);

  return (
    <section ref={availableHotelsRef} className="available-hotels">
      <Container className="available__container">
        <h2 className="title-section">Available Hotels</h2>
        {isLoading ? (
          <CircleLoader
            color="#1a71f4"
            cssOverride={{
              display: 'block',
              margin: '20% auto'
            }}
            size="100px"
          />
        ) : (
          <SliderAvailable
            availableHotels={availableHotelsRequest}
          />
        )}
      </Container>
    </section>
  );
}

export default AvailableHotels;
