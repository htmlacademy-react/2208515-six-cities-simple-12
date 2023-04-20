import {createReducer} from '@reduxjs/toolkit';
import {fillOffers, changeCity} from './action';
import {offers} from '../mocks/offers';
import {CITY} from '../mocks/city';

const initialState = {
  offers: offers,
  city: CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};

