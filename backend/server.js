const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const eventRoutes = require("./routes/events");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");

  // Start the server only after successful connection
  app.listen(5000, () => console.log("Server running on port 5000"));
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});

app.use("/api/events", eventRoutes);
