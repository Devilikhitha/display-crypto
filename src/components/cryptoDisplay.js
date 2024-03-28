// // // CryptoPriceDisplay.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './cryptoDisplay.css'; // Import CSS for styling

// // const CryptoPriceDisplay = () => {
// //   const [cryptoPrices, setCryptoPrices] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
// //         setCryptoPrices(response.data.bpi);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div className="crypto-container">
// //       {cryptoPrices &&
// //         Object.keys(cryptoPrices).map(currency => (
// //           <div className="crypto-card" key={currency}>
// //             <h2>{cryptoPrices[currency].description}</h2>
// //             <p>{cryptoPrices[currency].symbol}{cryptoPrices[currency].rate}</p>
// //           </div>
// //         ))}
// //     </div>
// //   );
// // };

// // export default CryptoPriceDisplay;



// // CryptoPriceDisplay.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './cryptoDisplay.css'; // Import CSS for styling

// const CryptoPriceDisplay = () => {
//   const [cryptoData, setCryptoData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
//         setCryptoData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="crypto-container">
//       {cryptoData &&
//         <>
//           <div className="crypto-card">
//             <h2>USD</h2>
//             <img  src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"  alt="USD Coin Logo" className='card1' />
//             <p>Code: {cryptoData.bpi.USD.code}</p>
//             <p>Symbol: {cryptoData.bpi.USD.symbol}</p>
//             <p>Rate: {cryptoData.bpi.USD.rate}</p>
//             <p>Rate Float: {cryptoData.bpi.USD.rate_float}</p>
//           </div>
          
//           {Object.keys(cryptoData.bpi).map(currency => currency !== 'USD' && (
//             <div className="crypto-card" key={currency}>
//               <h2>{cryptoData.bpi[currency].description}</h2>
//               <p>Code: {cryptoData.bpi[currency].code}</p>
//               <p>Symbol: {cryptoData.bpi[currency].symbol}</p>
//               <p>Rate: {cryptoData.bpi[currency].rate}</p>
//               <p>Rate Float: {cryptoData.bpi[currency].rate_float}</p>
//             </div>
//           ))}
//         </>
//       }
//     </div>
//   );
// };

// export default CryptoPriceDisplay;






// // CryptoPriceDisplay.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './cryptoDisplay.css'; // Import CSS for styling

// const CryptoPriceDisplay = () => {
//   const [cryptoData, setCryptoData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
//         setCryptoData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="crypto-container">
//       {cryptoData &&
//         <>
//           <div className="crypto-card">
//             <h2>USD</h2>
//             <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="USD Coin Logo" className='card1' />
//             <p>Code: {cryptoData.bpi.USD.code}</p>
//             <p>Symbol: {cryptoData.bpi.USD.symbol}</p>
//             <p>Rate: {cryptoData.bpi.USD.rate}</p>
//             <p>Rate Float: {cryptoData.bpi.USD.rate_float}</p>
//           </div>

//           <div className="crypto-card">
//             <h2>GBP</h2>
//             <img src="" alt="GBP Coin Logo" className='card1' />
//             <p>Code: {cryptoData.bpi.GBP.code}</p>
//             <p>Symbol: {cryptoData.bpi.GBP.symbol}</p>
//             <p>Rate: {cryptoData.bpi.GBP.rate}</p>
//             <p>Rate Float: {cryptoData.bpi.GBP.rate_float}</p>
//           </div>

//           {Object.keys(cryptoData.bpi).map(currency => currency !== 'USD' && currency !== 'GBP' && (
//             <div className="crypto-card" key={currency}>
//               <h2>{cryptoData.bpi[currency].description}</h2>
//               <p>Code: {cryptoData.bpi[currency].code}</p>
//               <p>Symbol: {cryptoData.bpi[currency].symbol}</p>
//               <p>Rate: {cryptoData.bpi[currency].rate}</p>
//               <p>Rate Float: {cryptoData.bpi[currency].rate_float}</p>
//             </div>
//           ))}
//         </>
//       }
//     </div>
//   );
// };

// export default CryptoPriceDisplay;




// // CryptoPriceDisplay.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './cryptoDisplay.css'; // Import CSS for styling

// const CryptoPriceDisplay = () => {
//   const [cryptoData, setCryptoData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
//         setCryptoData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="crypto-container">
//       {cryptoData &&
//         <>
//           <div className="crypto-card">
//             <h2>USD</h2>
//             <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="USD Coin Logo" className='card1' />
//             <p>Code: {cryptoData.bpi.USD.code}</p>
//             <p>Symbol: {cryptoData.bpi.USD.symbol}</p>
//             <p>Rate: {cryptoData.bpi.USD.rate}</p>
//             <p>Rate Float: {cryptoData.bpi.USD.rate_float}</p>
//           </div>

//           <div className="crypto-card">
//             <h2>GBP</h2>
//             <img src="https://w7.pngwing.com/pngs/793/412/png-transparent-pound-sterling-pound-sign-currency-symbol-bank-british-pounds-text-trademark-logo-thumbnail.png" alt="GBP Coin Logo" className='card1' />
//             <p>Code: {cryptoData.bpi.GBP.code}</p>
//             <p>Symbol: {cryptoData.bpi.GBP.symbol}</p>
//             <p>Rate: {cryptoData.bpi.GBP.rate}</p>
//             <p>Rate Float: {cryptoData.bpi.GBP.rate_float}</p>
//           </div>

//           <div className="crypto-card">
//             <h2>EUR</h2>
//             <img src="https://w7.pngwing.com/pngs/600/963/png-transparent-euro-sign-money-dollar-sign-character-euro-text-trademark-gold-thumbnail.png " alt="EUR Coin Logo" className='card1' />
//             <p>Code: {cryptoData.bpi.EUR.code}</p>
//             <p>Symbol: {cryptoData.bpi.EUR.symbol}</p>
//             <p>Rate: {cryptoData.bpi.EUR.rate}</p>
//             <p>Rate Float: {cryptoData.bpi.EUR.rate_float}</p>
//           </div>

//           {Object.keys(cryptoData.bpi).map(currency => currency !== 'USD' && currency !== 'GBP' && currency !== 'EUR' && (
//             <div className="crypto-card" key={currency}>
//               <h2>{cryptoData.bpi[currency].description}</h2>
//               <p>Code: {cryptoData.bpi[currency].code}</p>
//               <p>Symbol: {cryptoData.bpi[currency].symbol}</p>
//               <p>Rate: {cryptoData.bpi[currency].rate}</p>
//               <p>Rate Float: {cryptoData.bpi[currency].rate_float}</p>
//             </div>
//           ))}
//         </>
//       }
//     </div>
//   );
// };

// export default CryptoPriceDisplay;



// CryptoPriceDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cryptoDisplay.css'; // Import CSS for styling

const CryptoPriceDisplay = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      {cryptoData &&
        <>
          <div className="crypto-card">
            <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="USD Coin Logo" className='crypto-logo' />
            <div className="crypto-details">
              <h2>{cryptoData.bpi.USD.code}</h2>
              <p>{cryptoData.bpi.USD.description}</p>
              <p>Rate: {cryptoData.bpi.USD.rate}</p>
            </div>
          </div>

          <div className="crypto-card">
            <img src="https://w7.pngwing.com/pngs/793/412/png-transparent-pound-sterling-pound-sign-currency-symbol-bank-british-pounds-text-trademark-logo-thumbnail.png" alt="GBP Coin Logo" className='crypto-logo' />
            <div className="crypto-details">
              <h2>{cryptoData.bpi.GBP.code}</h2>
              <p>{cryptoData.bpi.GBP.description}</p>
              <p>Rate: {cryptoData.bpi.GBP.rate}</p>
            </div>
          </div>

          <div className="crypto-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2769/2769424.png" alt="EUR Coin Logo" className='crypto-logo' />
            <div className="crypto-details">
              <h2>{cryptoData.bpi.EUR.code}</h2>
              <p>{cryptoData.bpi.EUR.description}</p>
              <p>Rate: {cryptoData.bpi.EUR.rate}</p>
            </div>
          </div>

          {Object.keys(cryptoData.bpi).map(currency => currency !== 'USD' && currency !== 'GBP' && currency !== 'EUR' && (
            <div className="crypto-card" key={currency}>
              <div className="crypto-details">
                <h2>{cryptoData.bpi[currency].code}</h2>
                <p>{cryptoData.bpi[currency].description}</p>
                <p>Rate: {cryptoData.bpi[currency].rate}</p>
              </div>
            </div>
          ))}
        </>
      }
    </div>
  );
};

export default CryptoPriceDisplay;
