// frontend/src/App.js

import React from 'react';
import TotpGenerator from './components/TotpGenerator';
import TotpVerifier from './components/TotpVerifier';

function App() {
    return (
        <div className="App">
            <h1>TruePass NFT - TOTP Authentication</h1>
            <TotpGenerator />
            <TotpVerifier />
        </div>
    );
}

export default App;
