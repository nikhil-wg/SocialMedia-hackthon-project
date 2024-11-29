import axios from 'axios';

export const fetchRealTimeMetrics = async (platform, id, token) => {
  const response = await axios.get('/metrics/realtime', {
    params: { platform, id, token },
  });
  return response.data;
};
