import { useEffect, useState } from 'react';
import { fetchRealTimeMetrics } from '../services/apiService';

const useRealTimeMetrics = (platform, id, token) => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await fetchRealTimeMetrics(platform, id, token);
        setMetrics(data);
      } catch (error) {
        console.error('Error fetching real-time metrics:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, [platform, id, token]);

  return { metrics, loading };
};

export default useRealTimeMetrics;
