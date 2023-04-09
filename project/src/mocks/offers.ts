import {Offers} from '../types/offer';

export const offers: Offers = [
  {
    id: '1',
    picture: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    heading: 'Beautiful & luxurious Apartment at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: true,
    type: 'Apartment',
    rating: 4.6,
    countBedrooms: 3,
    maxAdult: 4,
    price: 120,
    inside: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    infoByHost: {
      src: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  },
  {
    id: '2',
    picture: [
      'img/room.jpg'
    ],
    heading: 'Nice Private Room',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    isPremium: false,
    type: 'Private Room',
    rating: 4.0,
    countBedrooms: 1,
    maxAdult: 3,
    price: 100,
    inside: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    infoByHost: {
      src: 'img/avatar-max.jpg',
      name: 'Max',
      isPro: true
    }
  },
  {
    id: '3',
    picture: [
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-02.jpg',
    ],
    heading: 'Spacious House in a quiet location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: false,
    type: 'House',
    rating: 3.0,
    countBedrooms: 5,
    maxAdult: 10,
    price: 200,
    inside: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Fridge'
    ],
    infoByHost: {
      src: 'img/avatar-angelina.jpg',
      name: 'Anna',
      isPro: true
    }
  },
  {
    id: '4',
    picture: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
    heading: 'New Hotel in the city center',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: true,
    type: 'Hotel',
    rating: 5.0,
    countBedrooms: 2,
    maxAdult: 2,
    price: 240,
    inside: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    infoByHost: {
      src: 'img/avatar-max.jpg',
      name: 'Ivan',
      isPro: false
    }
  }
];

// Для авторизованных пользователей отображается форма отправки нового отзыва.

