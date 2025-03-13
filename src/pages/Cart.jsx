import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid"; // Import trash icon

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">🛒 Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <Link to={`/products/${item.id}`} className="cart-link">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div>
                  <h3 className="cart-name">{item.name}</h3>
                  <p className="cart-price">{item.price}</p>
                </div>
              </Link>
              {/* Delete button with trash icon */}
              <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                <TrashIcon className="delete-icon" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

