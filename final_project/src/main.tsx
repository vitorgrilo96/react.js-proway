import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Home from './pages/Home';
import { NavBar } from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <NavBar />
    <RouterProvider router={router} />
  </StrictMode>
)




