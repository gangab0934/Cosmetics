import React from "react";
import { Link } from "react-router-dom";
import { useLiked } from "./LikedContext";
import { HeartIcon } from "@heroicons/react/24/solid"; // Solid heart for liked

const LikedProducts = () => {
  const { likedItems, toggleLike } = useLiked();

  return (
    <div className="liked-container">
      <h2 className="liked-title">Liked Products</h2>

      {likedItems.length === 0 ? (
        <p className="empty-message">You haven't liked any products yet.</p>
      ) : (
        <div className="liked-grid">
          {likedItems.map((product) => (
            <div key={product.id} className="liked-card">
              <img src={product.image} alt={product.name} className="liked-image" />
              <h3 className="liked-name">{product.name}</h3>
              <p className="liked-price">{product.price}</p>

              <div className="liked-buttons">
                {/* Heart icon for Unlike (Red when liked) */}
                <button className="heart-btn" onClick={() => toggleLike(product)}>
                  <HeartIcon className="heart-icon liked" />
                </button>
                
                <Link to={`/buy/${product.id}`} className="buy-btn">Buy Now</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedProducts;

