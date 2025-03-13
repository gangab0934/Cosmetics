import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../pages/CartContext";
import { useLiked } from "../pages/LikedContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const { likedItems } = useLiked();

  return (
    <nav className="navbar">
      <div className="logo">Luminous Glow</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>

      <div className="cart">
        <ul className="icons">
          <li>
            <Link to="/liked" className="icon">
              <HeartIcon className="icon-style" />
              {likedItems.length > 0 && <span className="count">{likedItems.length}</span>}
            </Link>
          </li>

          <li>
            <Link to="/cart" className="icon">
              <ShoppingCartIcon className="cart-icon" />
              {cartItems.length > 0 && <span className="count">{cartItems.length}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





