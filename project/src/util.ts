import { Offers } from './types/offer';
import {SortingOption} from './const';
import {Reviews} from './types/review';

export const sortingOffers = (offers: Offers, type: string): Offers => {
  switch (type) {
    case SortingOption.PriceLow:
      offers.sort((a, b) => a.price - b.price);
      break;
    case SortingOption.PriceHigh:
      offers.sort((a, b) => b.price - a.price);
      break;
    case SortingOption.Top:
      offers.sort((a, b) => b.rating - a.rating);
      break;
  }

  return offers;
};

export const sortingReviews = (reviews: Reviews): Reviews => {
  [...reviews].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return Math.sign(dateB - dateA);
  });

  return reviews;
};

