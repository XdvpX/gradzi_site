import '/assets/css/main.css';
import '/assets/css/noscript.css';
import '/assets/css/fontawesome-all.min.css';
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

import routes from './routes'

const router = createBrowserRouter(routes)
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
)
