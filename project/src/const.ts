import {City} from './types/offer';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id'
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const DEFAULT_CITY = 'Amsterdam';

export const CITIES: City[] = [
  {
    location: {
      latitude: 48.853456,
      longitude: 2.348896,
      zoom: 10
    },
    name: 'Paris'
  },
  {
    location: {
      latitude: 50.933356,
      longitude: 6.953096,
      zoom: 10
    },
    name: 'Cologne'
  },
  {
    location: {
      latitude: 50.850346,
      longitude: 4.351716,
      zoom: 10
    },
    name: 'Brussels'
  },
  {
    location: {
      latitude: 52.390955,
      longitude: 4.853096,
      zoom: 10
    },
    name: 'Amsterdam'
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993686,
      zoom: 10
    },
    name: 'Hamburg'
  },
  {
    location: {
      latitude: 51.227741,
      longitude: 6.773456,
      zoom: 10
    },
    name: 'Dusseldorf'
  }
];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Hotels = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export const TIMEOUT_SHOW_ERROR = 2000;
export const MAX_IMAGES_COUNT = 6;
export const MAX_COMMENTS_COUNT = 10;
export const MIN_LENGTH_COMMENT = 50;
export const MAX_LENGTH_COMMENT = 300;
export const PASSWORD_REG_EXP = (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/);

export enum NameSpace {
  Data = 'DATA',
  Offers = 'OFFERS',
  User = 'USER',
}

export const RATING_LABELS = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

export enum SortingOption {
  Popular = 'Popular',
  PriceLow = 'Price: low to high',
  PriceHigh = 'Price: high to low',
  Top = 'Top rated first',
}
