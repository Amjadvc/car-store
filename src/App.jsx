import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CookiesBanner from "./components/CookiesBanner/CookiesBanner";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage from "./pages/Home/Home";
import Catalogue from "./pages/Catalogue/Catalogue";
import ContactUs from "./pages/ContactUs/ContactUs";
import Help from "./pages/Help/Help";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Details from "./pages/Details/Details";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import { CarItemsProvider } from "./context/CarItemsContext";

function App() {
  return (
    <CarItemsProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="help" element={<Help />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="catalogue/details/:userId" element={<Details />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <CookiesBanner />
    </CarItemsProvider>
  );
}

export default App;
