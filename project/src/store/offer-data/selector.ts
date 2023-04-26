import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Offers, Offer} from '../../types/offer';
import {Reviews} from '../../types/review';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer | null => state[NameSpace.Data].offer;
export const getReview = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getComment = (state: State): Reviews => state[NameSpace.Data].offerComment;
export const getOffersNearby = (state: State): Offers => state[NameSpace.Data].offersNearby;
