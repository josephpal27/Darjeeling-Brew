import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS
import "aos/dist/aos.css"; // Import AOS CSS

import App from './App.jsx';
import Home from './pages/Home.jsx';
import HotBrew from './pages/HotBrew.jsx';
import ColdBrew from './pages/ColdBrew.jsx';
import Vision from './pages/Vision.jsx';
import Mission from './pages/Mission.jsx';
import Sustainability from './pages/Sustainability.jsx';
import Error from './pages/Error.jsx';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    // errorElement: <Error />,
    children: [
      {path: "/", element: <Home />},
      {path: "/hot-brew", element: <HotBrew />},
      {path: "/cold-brew", element: <ColdBrew />},
      {path: "/vision", element: <Vision />},
      {path: "/mission", element: <Mission />},
      {path: "/sustainability", element: <Sustainability />},
      {path: "*", element: <Error />},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
