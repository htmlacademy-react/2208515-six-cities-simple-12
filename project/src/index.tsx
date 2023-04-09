import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  plasesCount: 312,
  email: 'Oliver.conner@gmail.com',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      plasesCount={Setting.plasesCount}
      email={Setting.email}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
);
