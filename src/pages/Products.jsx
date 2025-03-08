import React from "react";
import { Link } from "react-router-dom";

// Sample product data
const products = [
  {
    id: 1,
    name: "Luxury Lipstick",
    price: "$19.99",
    image: "https://www.makeup.com/-/media/project/loreal/brand-sites/mdc/americas/us/articles/2018/may/24-pinklipstick-skintone/makeupcompostgraphicshero2refeaturepinklipstickskintone52418.jpg?w=400&h=400&blr=False&hash=C82ED9C48F8B1F6352227B50F58F1AF8",
  },
  {
    id: 2,
    name: "Hydrating Face Cream",
    price: "$24.99",
    image: "https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw252eda7b/2023/NewSkinAssets_EvergreenSkinAudit/080322_HH-Routine_0068_v3_RGB_IGF.jpg?sw=400&q=90",
  },
  {
    id: 3,
    name: "Nourishing Hair Oil",
    price: "$14.99",
    image: "https://www.northlainehairco.co.uk/wp-content/uploads/Moroccanoil-hydration.jpg",
  },
  {
    id: 4,
    name: "Glowing Face Serum",
    price: "$29.99",
    image: "https://th.bing.com/th/id/OIP.SX2uVHZ4B0qC8P2if9dWPQHaEx?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const Products = () => {
  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            
            

             {/* Buttons for View & Buy Now */}
             <div className="product-buttons">
              <Link to={`/product/${product.id}`} ></Link>
              <button className="buy-btn">Buy Now</button>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

