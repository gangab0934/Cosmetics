import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import LikedProducts from "./pages/LikedProducts";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Buy from "./pages/Buy";
import { CartProvider } from "./pages/CartContext";
import { LikedProvider } from "./pages/LikedContext";
import Offers from "./pages/Offers";


function App() {
  return (
    <CartProvider> {/* Wrap everything inside CartProvider */}
      <LikedProvider> {/* Wrap everything inside LikedProvider */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/liked" element={<LikedProducts />} />
            <Route path="/buy/:id" element={<Buy />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/offers" element={<Offers />} />
      
          </Routes>
      </LikedProvider>
    </CartProvider>
  );
}


export default App;

