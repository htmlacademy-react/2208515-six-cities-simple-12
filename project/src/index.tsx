import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {store} from './store';

const Setting = {
  email: 'Oliver.conner@gmail.com',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        email={Setting.email}
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
