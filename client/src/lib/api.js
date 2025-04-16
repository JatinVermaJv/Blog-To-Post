const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const api = {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important for cookies/sessions
    };

    // Get the backend token from the session using absolute URL
    const session = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/auth/session`).then(res => res.json());
    if (session?.backendToken) {
      defaultOptions.headers['Authorization'] = `Bearer ${session.backendToken}`;
    }

    try {
      const response = await fetch(url, {
        ...defaultOptions,
        ...options,
        headers: {
          ...defaultOptions.headers,
          ...options.headers,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }

      return response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Auth endpoints
  auth: {
    google: (data) => api.request('/api/auth/google', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  },

  // Content endpoints
  content: {
    generate: (data) => api.request('/api/content/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    getHistory: () => api.request('/api/content/history'),
  },

  // Posts endpoints
  posts: {
    create: (data) => api.request('/api/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    getAll: () => api.request('/api/posts'),
    getById: (id) => api.request(`/api/posts/${id}`),
    update: (id, data) => api.request(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    delete: (id) => api.request(`/api/posts/${id}`, {
      method: 'DELETE',
    }),
  },

  // Analytics endpoints
  analytics: {
    getStats: () => api.request('/api/analytics/stats'),
    getPlatformStats: (platform) => api.request(`/api/analytics/platform/${platform}`),
  },

  // User endpoints
  users: {
    getProfile: () => api.request('/api/users/profile'),
    updateProfile: (data) => api.request('/api/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  },

  // Health check
  health: {
    check: () => api.request('/api/health'),
  },
};

export default api; 