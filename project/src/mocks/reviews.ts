import {Reviews} from '../types/review';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Reviews = [
  {
    id: '1',
    avatar: 'img/avatar-max.jpg',
    nameAuthor: 'Max',
    evaluation: 4,
    data: 'April 2019',
    feedback: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    id: '2',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    nameAuthor: 'Misha',
    evaluation: 5,
    data: 'April 2020',
    feedback: 'Very good',
  },
  {
    id: '3',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    nameAuthor: 'Misha',
    evaluation: 1,
    data: 'May 2019',
    feedback: 'Everything was bad',
  },
  {
    id: '4',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    nameAuthor: 'Sanya',
    evaluation: 3,
    data: 'May 2024',
    feedback: ':)',
  },
];

