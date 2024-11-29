const mongoose = require('mongoose');

const SocialMetricsSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  reach: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SocialMetrics', SocialMetricsSchema);
