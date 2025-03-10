// frontend/src/components/TotpVerifier.js

import React, { useState } from 'react';
import axios from 'axios';

function TotpVerifier() {
    const [token, setToken] = useState('');
    const [verificationMessage, setVerificationMessage] = useState('');

    const verifyTOTP = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/totp/verify-totp', {
                token
            });
            setVerificationMessage(response.data.message); // Success message
        } catch (error) {
            setVerificationMessage(error.response.data.error); // Error message
        }
    };

    return (
        <div>
            <h2>Verify TOTP</h2>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter the TOTP from your Authenticator"
            />
            <button onClick={verifyTOTP}>Verify TOTP</button>
            {verificationMessage && <p>{verificationMessage}</p>}
        </div>
    );
}

export default TotpVerifier;
