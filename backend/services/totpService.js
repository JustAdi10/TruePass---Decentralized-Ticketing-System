// backend/services/totpService.js

const { totp } = require('otplib');  // Import otplib for TOTP
const qrcode = require('qrcode');   // For generating QR codes

// Generate a new secret key for TOTP
function generateSecret() {
    return totp.generateSecret(); // Generates a new secret key
}

// Generate TOTP URL (used for displaying QR code)
function generateTOTPUrl(userId, secret) {
    return totp.keyuri(userId, 'TruePassNFT', secret); // Replace 'TruePassNFT' with your app name
}

// Verify the TOTP provided by the user
function verifyTOTP(token, secret) {
    return totp.verify({ token, secret }); // Verifies the TOTP token
}

// Generate a QR code that users can scan with their Authenticator app
async function generateQRCode(totpUrl) {
    try {
        const qrCodeDataUrl = await qrcode.toDataURL(totpUrl);
        return qrCodeDataUrl;
    } catch (err) {
        throw new Error('Error generating QR code');
    }
}

module.exports = { generateSecret, generateTOTPUrl, verifyTOTP, generateQRCode };
