// /backend/models/Ticket.js
const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  buyer: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ticket", TicketSchema);
