import React, { useState } from 'react';
import axios from 'axios';

function TotpGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [secret, setSecret] = useState('');
    const [userId, setUserId] = useState(''); // The user identifier, could be username, email, etc.

    const generateTOTP = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/totp/generate-totp', { userId });
            setQrCode(response.data.qrCode);
            setSecret(response.data.secret); // Store the secret for later use in verification
        } catch (error) {
            console.error("Error generating TOTP:", error);
        }
    };

    return (
        <div>
            <h2>Generate TOTP</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            <button onClick={generateTOTP}>Generate TOTP</button>
            {qrCode && (
                <div>
                    <h3>Scan QR Code with your Authenticator App:</h3>
                    <img src={qrCode} alt="QR Code" />
                    <p>Secret: {secret}</p>
                </div>
            )}
        </div>
    );
}

export default TotpGenerator;