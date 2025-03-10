// backend/server.js
const express = require('express');
const cors = require('cors'); // Add this line
const app = express();

app.use(cors()); // This will allow all origins by default. If you need more security, you can configure it further

// Your existing code...
app.use(express.json());
app.use('/api/totp', require('./routes/totpRoutes')); // Your route imports

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
