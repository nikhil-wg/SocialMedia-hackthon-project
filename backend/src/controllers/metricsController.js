const {
    fetchInstagramMetrics,
    fetchTwitterMetrics,
    fetchFacebookMetrics,
  } = require('../services/socialMediaService');
  
  // Fetch metrics from APIs
  const getRealTimeMetrics = async (req, res) => {
    try {
      const { platform, id, token } = req.query;
  
      let metrics;
      switch (platform) {
        case 'instagram':
          metrics = await fetchInstagramMetrics(id, token);
          break;
        case 'twitter':
          metrics = await fetchTwitterMetrics(id, token);
          break;
        case 'facebook':
          metrics = await fetchFacebookMetrics(id, token);
          break;
        default:
          return res.status(400).json({ error: 'Unsupported platform' });
      }
  
      res.status(200).json(metrics);
    } catch (error) {
      console.error('Error fetching metrics:', error);
      res.status(500).json({ error: 'Failed to fetch real-time metrics' });
    }
  };
  
  module.exports = { getRealTimeMetrics };
  