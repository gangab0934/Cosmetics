import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Luxury Lipstick",
    price: 19.99,
    image: "https://www.makeup.com/-/media/project/loreal/brand-sites/mdc/americas/us/articles/2018/may/24-pinklipstick-skintone/makeupcompostgraphicshero2refeaturepinklipstickskintone52418.jpg?w=400&h=400&blr=False&hash=C82ED9C48F8B1F6352227B50F58F1AF8",
    description: "A premium lipstick with long-lasting color and hydration.",
  },
  {
    id: 2,
    name: "Hydrating Face Cream",
    price: 24.99,
    image: "https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw252eda7b/2023/NewSkinAssets_EvergreenSkinAudit/080322_HH-Routine_0068_v3_RGB_IGF.jpg?sw=400&q=90",
    description: "Keeps your skin fresh and moisturized all day long.",
  },
  {
    id: 3,
    name: "Nourishing Hair Oil",
    price: 14.99,
    image: "https://www.northlainehairco.co.uk/wp-content/uploads/Moroccanoil-hydration.jpg",
    description: "Strengthens hair and prevents split ends with natural oils.",
  },
  {
    id: 4,
    name: "Glowing Face Serum",
    price: 29.99,
    image: "https://th.bing.com/th/id/OIP.SX2uVHZ4B0qC8P2if9dWPQHaEx?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Brightens skin and reduces dark spots for a youthful glow.",
  },
];

const Buy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const shippingCost = 5.99; // Fixed shipping cost

  if (!product) {
    return <h2 className="error-message">Product Not Found</h2>;
  }

  const totalPrice = (product.price * quantity + shippingCost).toFixed(2);

  const handleConfirmPurchase = () => {
    alert(`Thank you for purchasing ${product.name}! Your order has been placed.`);
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="buy-container">
      <h2 className="buy-title">Buy {product.name}</h2>
      <div className="buy-content">
        {/* Product Image & Details */}
        <div className="product-details">
          <img src={product.image} alt={product.name} className="buy-image" />
          <h3 className="buy-product-name">{product.name}</h3>
          <p className="buy-description">{product.description}</p>
          <p className="buy-price">Price: ${product.price.toFixed(2)}</p>
        </div>

        {/* Order Details */}
        <div className="order-details">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            min="1"
            className="quantity-input"
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          />

          <label>Payment Method:</label>
          <select className="payment-select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Cash on Delivery</option>
          </select>

          <p className="shipping-cost">Shipping Cost: ${shippingCost.toFixed(2)}</p>
          <p className="total-price">Total Price: ${totalPrice}</p>

          <button className="buy-confirm-btn" onClick={handleConfirmPurchase}>
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;


