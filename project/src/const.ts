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
      lat: 48.8534564043902,
      lng: 2.34889676406198,
      zoom: 10
    },
    name: 'Paris'
  },
  {
    location: {
      lat: 50.9333564043902,
      lng: 6.95309676406198,
      zoom: 10
    },
    name: 'Cologne'
  },
  {
    location: {
      lat: 50.8503464043902,
      lng: 4.35171676406198,
      zoom: 10
    },
    name: 'Brussels'
  },
  {
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 10
    },
    name: 'Amsterdam'
  },
  {
    location: {
      lat: 53.5510864043902,
      lng: 9.99368676406198,
      zoom: 10
    },
    name: 'Hamburg'
  },
  {
    location: {
      lat: 51.2277414043902,
      lng: 6.77345676406198,
      zoom: 10
    },
    name: 'Dusseldorf'
  }
];

