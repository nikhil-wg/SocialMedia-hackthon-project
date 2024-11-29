const axios = require('axios');

// Instagram API
const fetchInstagramMetrics = async (userId, accessToken) => {
  const url = `https://graph.instagram.com/${userId}/insights?metric=reach,impressions&access_token=${accessToken}`;
  const response = await axios.get(url);
  return response.data;
};

// Twitter API
const fetchTwitterMetrics = async (tweetId, bearerToken) => {
  const url = `https://api.twitter.com/2/tweets?ids=${tweetId}&tweet.fields=public_metrics`;
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${bearerToken}` },
  });
  return response.data;
};

// Facebook API
const fetchFacebookMetrics = async (pageId, accessToken) => {
  const url = `https://graph.facebook.com/${pageId}/insights?metric=post_impressions_unique&access_token=${accessToken}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = {
  fetchInstagramMetrics,
  fetchTwitterMetrics,
  fetchFacebookMetrics,
};
