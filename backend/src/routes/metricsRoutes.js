const express = require('express');
const { getRealTimeMetrics } = require('../controllers/metricsController');

const router = express.Router();

// GET /metrics/realtime
router.get('/realtime', getRealTimeMetrics);

module.exports = router;
