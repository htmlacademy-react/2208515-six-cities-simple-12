import {createReducer} from '@reduxjs/toolkit';
import {CITIES} from '../const';
import {AuthorizationStatus} from '../const';
import {Offers, Offer, City} from '../types/offer';
import {Reviews} from '../types/review';
import {
  fillOffers,
  changeCity,
  loadOffers,
  loadOffer,
  loadReview,
  requireAuthorization,
  getUserInfo,
  setError,
  setOffersDataLoadingStatus
} from './action';
import { UserData } from '../types/user-data';

type InitalState = {
  offers: Offers;
  offer: Offer | undefined | null;
  reviews: Reviews;
  city: City;
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | null;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: InitalState = {
  offers: [],
  offer: null,
  reviews: [],
  city: CITIES[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  error: null,
  isOffersDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadReview, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};

