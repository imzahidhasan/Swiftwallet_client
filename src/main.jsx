import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/authentication/Register.jsx'
import Login from './components/authentication/Login.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'






const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/register',
    element:<Register/>
  },
  {
    path: '/dashboard',
    element:<Dashboard/>
  },
  {
    path: '/login',
    element:<Login/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
