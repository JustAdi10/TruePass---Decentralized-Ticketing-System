const express = require('express');
const { generateSecret, generateTOTPUrl, verifyTOTP, generateQRCode } = require('../services/totpService');
const router = express.Router();

// Route to generate and return TOTP secret and QR code
router.post('/generate-totp', async (req, res) => {
    const { userId } = req.body;
    const secret = generateSecret();
    const totpUrl = generateTOTPUrl(userId, secret);
    
    // Generate QR code
    try {
        const qrCode = await generateQRCode(totpUrl);
        res.json({ secret, qrCode });  // Send the secret and QR code to the frontend
    } catch (err) {
        res.status(500).send({ error: 'Error generating QR code' });
    }
});

// Route to verify the TOTP token
router.post('/verify-totp', (req, res) => {
    const { token, secret } = req.body;
    
    if (verifyTOTP(token, secret)) {
        res.json({ message: 'TOTP Verified!' });
    } else {
        res.status(400).send({ error: 'Invalid TOTP' });
    }
});

module.exports = router;
