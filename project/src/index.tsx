import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
      plasesCount={Setting.plasesCount} email={Setting.email}
    />
  </React.StrictMode>,
);
