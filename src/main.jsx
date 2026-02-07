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
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import About from './pages/About.jsx';
import TheUltimateBeverage from './pages/TheUltimateBeverage.jsx';
import TheArtOfBrewing from './pages/TheArtOfBrewing.jsx';
import Checkout from './pages/CheckOut.jsx';
import Cart from './pages/Cart.jsx';
import ThankYou from './pages/ThankYou.jsx';
import StoreTermsPolicies from './pages/StoreTermsPolicies';
import Error from './pages/Error.jsx';

import { CartProvider } from './context/CartContext.jsx';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/hot-brew", element: <HotBrew /> },
      { path: "/cold-brew", element: <ColdBrew /> },
      { path: "/vision", element: <Vision /> },
      { path: "/mission", element: <Mission /> },
      { path: "/sustainability", element: <Sustainability /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:slug", element: <ProductDetails /> },
      { path: "/about", element: <About /> },
      { path: "/ultimate-beverage", element: <TheUltimateBeverage /> },
      { path: "/art-of-brewing", element: <TheArtOfBrewing /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/cart", element: <Cart /> },
      { path: "/thank-you", element: <ThankYou /> },
      { path: "/store-terms-and-policies", element: <StoreTermsPolicies /> },
      { path: "*", element: <Error /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routers} />
    </CartProvider>
  </StrictMode>,
)
