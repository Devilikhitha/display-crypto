// App.js
import React from 'react';
import CryptoPriceDisplay from './components/cryptoDisplay';
import './App.css'; // Assuming you have a global CSS file for styles

function App() {
  return (
    <div >
      <h1 className='heading'>Cryptocurrency Prices</h1>
      <CryptoPriceDisplay />
    </div>
  );
}

export default App;
