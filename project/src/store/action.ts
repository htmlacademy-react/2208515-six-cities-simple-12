import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers, City} from '../types/offer';
import {Reviews} from '../types/review';
import {AuthorizationStatus, AppRoute} from '../const';
import {UserData} from '../types/user-data';

export const changeCity = createAction('offers/changeCity', (city: City) => ({
  payload: city
}));

export const fillOffers = createAction('offers/fillOffers', (offers: Offer[]) => ({
  payload: offers
}));

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offers/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('offers/redirectToRoute');

export const loadReview = createAction<Reviews>('data/loadReview');

export const getUserInfo = createAction<UserData>('user/getUserInfo');

