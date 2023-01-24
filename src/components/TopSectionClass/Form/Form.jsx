import React from 'react';

import { SelectDate } from './SelectDate';

import '../../../scss/components/Form.scss';
import { hotelsAPI } from '../../../API';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.searchValue,
      availableHotels: this.props.availableHotels
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    hotelsAPI
      .searchAvailableHotels(this.state.value)
      .then(availableHotels => {
        this.props.getAvailableHotels(availableHotels);
      });
    this.props.getSearch(this.state.value);
  }

  render() {
    return (
      <>
        <form className="content__form" onSubmit={this.handleSubmit}>
          <input
            value={this.state.value}
            onChange={this.onInputChange}
            className="content__form_destination col-lg-5 col-sm-6"
            id="destination"
            name="destination"
            type="text"
            placeholder="Your destination or hotel name"
          />
          <SelectDate />
          <div className="select__wrapper col-lg-3 col-sm-6">
            <div className="input-wrapper">
              <input
                className="content__form_adults select-item col-lg-4"
                id="adults"
                value="1Adults"
                name="adults"
                disabled="disabled"
              />
            </div>
            <div className="input-wrapper">
              <input
                className="content__form_children select-item col-lg-4"
                id="children"
                value="0Children"
                name="children"
                disabled="disabled"
              />
            </div>
            <div className="input-wrapper">
              <input
                className="content__form_room select-item col-lg-4"
                id="rooms"
                value="1Rooms"
                name="room"
                disabled="disabled"
              />
            </div>
          </div>
          <button
            className="content__form_button col-lg-2 col-sm-6"
            type="submit"
          >
            Search
          </button>
          <div className="filter__wrapper hide">
            <div className="filter__item">
              <p className="item__title item__title--adults">
                Adults
              </p>
              <div className="filter__item-counter">
                <button className="filter__button--adults filter__button--dec">
                  -
                </button>
                <div className="filter__input-wrapper">
                  <input
                    className="item__counter--adults"
                    value="1"
                    type="text"
                    disabled="disabled"
                  />
                </div>
                <button className="filter__button--adults filter__button--inc">
                  +
                </button>
              </div>
            </div>
            <div className="filter__item">
              <p className="item__title item__title--children">
                Children
              </p>
              <div className="filter__item-counter">
                <button className="filter__button--children filter__button--dec filter__button--children--dec">
                  -
                </button>
                <div className="filter__input-wrapper">
                  <input
                    className="item__counter--children"
                    value="0"
                    type="text"
                    disabled="disabled"
                  />
                </div>
                <button className="filter__button--children filter__button--inc filter__button--children--inc">
                  +
                </button>
              </div>
            </div>
            <div className="filter__item">
              <p className="item__title item__title--rooms">Rooms</p>
              <div className="filter__item-counter">
                <button className="filter__button--rooms filter__button--dec">
                  -
                </button>
                <div className="filter__input-wrapper">
                  <input
                    className="item__counter--rooms"
                    value="1"
                    type="text"
                    disabled="disabled"
                  />
                </div>
                <button className="filter__button--rooms filter__button--inc">
                  +
                </button>
              </div>
            </div>
            <div className="filter__additional-content hide">
              <p className="filter__additional-text">
                What is the age of the child you’re travelling with?
              </p>
            </div>
          </div>
        </form>
      </>
    );
  }
}
