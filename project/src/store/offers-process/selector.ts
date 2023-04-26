import {State} from '../../types/state';
import {City} from '../../types/offer';
import {NameSpace, SortingOption} from '../../const';

export const getCity = (state: State): City => state[NameSpace.Offers].city;
export const getSorting = (state: State): SortingOption => state[NameSpace.Offers].sorting;
