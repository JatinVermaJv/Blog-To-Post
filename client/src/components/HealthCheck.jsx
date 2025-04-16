'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function HealthCheck() {
  const [status, setStatus] = useState('checking...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.health.check();
        setStatus(response.status);
        setError(null);
      } catch (err) {
        setStatus('error');
        setError(err.message);
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">API Health Check</h2>
      <div className="flex items-center space-x-2">
        <span className={`w-3 h-3 rounded-full ${
          status === 'ok' ? 'bg-green-500' : 
          status === 'checking...' ? 'bg-yellow-500' : 
          'bg-red-500'
        }`} />
        <span>Status: {status}</span>
      </div>
      {error && (
        <p className="mt-2 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
} 