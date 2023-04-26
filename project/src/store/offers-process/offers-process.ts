import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, NameSpace, SortingOption} from '../../const';
import {City} from '../../types/offer';

type OffersProcess = {
  city: City;
  sorting: SortingOption;
}

const initialState: OffersProcess = {
  city: CITIES[0],
  sorting: SortingOption.Popular,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction <City>) => {
      state.city = action.payload;
    },
    changeSorting: (state, action: PayloadAction<SortingOption>) => {
      state.sorting = action.payload;
    },
  },
});

export const {changeCity, changeSorting} = offersProcess.actions;
