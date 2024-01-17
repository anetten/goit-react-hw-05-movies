// import { useEffect, useState } from 'react';
// import HomePage from './pages/HomePage';
// import { getTrending } from 'movieAPI';
import AppHTTPRequests from 'AppHTTPRequests';

export const App = () => {
  return (
    <div>
      <AppHTTPRequests />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <HomePage trending={trending} /> */}
      </div>
    </div>
  );
};
