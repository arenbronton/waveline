import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

import './index.scss'

let router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path: '/',
    element: <HomePage />,
  }
])

document.documentElement.setAttribute("data-theme", "dark");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
