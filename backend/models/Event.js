// filepath: d:\repos\TruePass---Decentralized-Ticketing-System\backend\models\Event.js
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  category: String,
  capacity: Number,
  date: String,
  location: String,
  description: String,
  status: { type: String, enum: ["upcoming", "past", "draft"], default: "upcoming" }
});

module.exports = mongoose.model("Event", EventSchema);
