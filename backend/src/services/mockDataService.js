const { saveMetric } = require('./socialMediaService');

const seedMetrics = async () => {
  const platforms = ['Instagram', 'Twitter', 'Facebook'];
  for (const platform of platforms) {
    const reach = Math.floor(Math.random() * 1000) + 100; // Random reach
    await saveMetric(platform, reach);
  }
  console.log('Mock data seeded!');
};

module.exports = { seedMetrics };
