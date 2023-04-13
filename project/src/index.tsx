import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {CITY} from './mocks/city';

const Setting = {
  email: 'Oliver.conner@gmail.com',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      email={Setting.email}
      offers={offers}
      reviews={reviews}
      location={CITY.location}
    />
  </React.StrictMode>,
);
