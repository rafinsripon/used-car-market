import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './contexts/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
          <App />
          <Toaster />
        </AuthProvider>
    </QueryClientProvider>
    </>
);
