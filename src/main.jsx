import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // This works here because index.css is in the same folder!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);