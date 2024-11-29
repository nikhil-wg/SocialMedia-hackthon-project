import React, { useEffect } from 'react';
import { fetchRealTimeMetrics } from '../services/apiService'; // Correct import

const Dashboard = () => {
  useEffect(() => {
    const getMetrics = async () => {
      try {
        const metrics = await fetchRealTimeMetrics({ platform: 'Instagram', id: '123' });
        console.log(metrics);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };

    getMetrics();
  }, []);

  return <div>Dashboard Page</div>;
};

export default Dashboard;
