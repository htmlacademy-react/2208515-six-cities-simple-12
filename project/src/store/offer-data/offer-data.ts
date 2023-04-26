import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Offers, Offer} from '../../types/offer';
import {Reviews} from '../../types/review';
import {fetchOfferAction, fetchOfferIdAction, fetchReviewAction, sendReviewAction, fetchNearbyOffersAction} from '../api-action';

type OffersData = {
  offers: Offers;
  offer: Offer | null;
  reviews: Reviews;
  isOffersDataLoading: boolean;
  offerComment: Reviews;
  offersNearby: Offers;
}

const initialState: OffersData = {
  offers: [],
  offer: null,
  reviews: [],
  isOffersDataLoading: false,
  offerComment: [],
  offersNearby: [],
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offers = [];
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferIdAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.offersNearby = [];
        state.isOffersDataLoading = false;
      })
      .addCase(fetchReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviewAction.rejected, (state) => {
        state.reviews = [];
        state.isOffersDataLoading = false;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

