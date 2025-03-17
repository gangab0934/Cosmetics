import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useLiked } from "./LikedContext";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";

const products = [
  { id: 1, name: "Luxury Lipstick", price: "$19.99", offer: "Buy 1 Get 1 Free", image: "https://www.makeup.com/-/media/project/loreal/brand-sites/mdc/americas/us/articles/2018/may/24-pinklipstick-skintone/makeupcompostgraphicshero2refeaturepinklipstickskintone52418.jpg?w=400&h=400&blr=False&hash=C82ED9C48F8B1F6352227B50F58F1AF8" },
  { id: 2, name: "Hydrating Face Cream", price: "$24.99", offer: "10% Off for Members", image: "https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw252eda7b/2023/NewSkinAssets_EvergreenSkinAudit/080322_HH-Routine_0068_v3_RGB_IGF.jpg?sw=400&q=90" },
  { id: 3, name: "Nourishing Hair Oil", price: "$14.99", offer: "Flat 20% Off", image: "https://www.northlainehairco.co.uk/wp-content/uploads/Moroccanoil-hydration.jpg" },
  { id: 4, name: "Glowing Face Serum", price: "$29.99", offer: "Free Sample on Orders Above $50", image: "https://th.bing.com/th/id/OIP.SX2uVHZ4B0qC8P2if9dWPQHaEx?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 5, name: "Makeup Kit", price: "$15.99", offer: "Combo Offer: Save 15%", image: "https://th.bing.com/th/id/OPAC.ZsOJmFgbVUMeLw474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1" },
  { id: 6, name: "Neo Cushion Glow", price: "$30.99", offer: "Exclusive Gift with Purchase", image: "https://th.bing.com/th/id/OPAC.D5Va1qczUtpT3Q474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1" },
  { id: 7, name: "Phyto Teint Perfection Luminous Mat", price: "$60.99", offer: "Limited Edition 5% Off", image: "https://a.cdnsbn.com/images/products/l/34003383102.jpg" },
  { id: 8, name: "Mascara 8.5Gm", price: "$29.99", offer: "Free Shipping on Orders Above $40", image: "https://th.bing.com/th/id/OPAC.N0GPNFeJJAtTNQ474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1" },
  { id: 9, name: "Matte Foundation", price: "$34.99", offer: "15% Off for First-Time Buyers", image: "https://cdn.mall.adeptmind.ai/https://www.sephora.com/productimages/sku/s2508224-av-25-zoom.jpg_640x.jpg" },
  { id: 10, name: "Brightening Under Eye Cream", price: "$22.99", offer: "Special 2+1 Free Deal", image: "https://m.media-amazon.com/images/I/71Z4e1T4WfL._SX522_.jpg " },
]
const Offers = () => {
  const { addToCart } = useCart();
  const { likedItems, toggleLike } = useLiked();

  return (
    <div className="products-container">
      <h2 className="products-title">Exclusive Offers</h2>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-offer">⭐ {product.offer}</p>

            <div className="product-buttons">
              <Link to={`/buy/${product.id}`} className="buy-btn1">Buy Now</Link>
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>

              <button className="like-btn" onClick={() => toggleLike(product)}>
                <HeartIcon className={`heart-icon ${likedItems.some((item) => item.id === product.id) ? "liked" : "not-liked"}`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
