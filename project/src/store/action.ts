import {createAction} from '@reduxjs/toolkit';
import {Offer, City} from '../types/offer';

export const changeCity = createAction('offers/changeCity', (city: City) => ({
  payload: city
}));

export const fillOffers = createAction('offers/fillOffers', (offers: Offer[]) => ({
  payload: offers
}));
