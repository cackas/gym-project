import { Home } from './Home/Home'
import { Training } from './Training/Training'
import { CalendarPage } from './Calendar/Calendar'
import { Settings } from './Settings/Settings'
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
    element: <CalendarPage />
  },
  {
    path: "/settings",
    element: <Settings />
  },
])

export function App() {
	return(
		<div className='wrap'>
			<RouterProvider router={router} />
		</div>
	)
}
