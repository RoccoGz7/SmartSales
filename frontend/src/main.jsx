import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './normalize.css'
import { ContextOrderProvider } from './contexts/ContextOrder.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <BrowserRouter>
        <ContextOrderProvider>
          <App />
        </ContextOrderProvider>
      </BrowserRouter>
    </CssBaseline>
  </React.StrictMode>,
)