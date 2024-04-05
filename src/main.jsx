import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import { Home } from './components/Home/Home'
import { Training } from './components/Training/Training'
import { Calendar } from './components/Calendar/Calendar'
import { Settings } from './components/Settings/Settings'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/training",
    element: <Training />
  },
  {
    path: "/calendar",
    element: <Calendar />
  },
  {
    path: "/settings",
    element: <Settings />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='wrap'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
