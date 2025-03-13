import React from "react";
import { useParams } from "react-router-dom";

// Sample product data (Replace this with backend data later)
const products = [
  { id: 1, name: "Luxury Lipstick", price: "$19.99", image: "https://www.makeup.com/-/media/project/loreal/brand-sites/mdc/americas/us/articles/2018/may/24-pinklipstick-skintone/makeupcompostgraphicshero2refeaturepinklipstickskintone52418.jpg?w=400&h=400&blr=False&hash=C82ED9C48F8B1F6352227B50F58F1AF8" },
  { id: 2, name: "Hydrating Face Cream", price: "$24.99", image: "https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw252eda7b/2023/NewSkinAssets_EvergreenSkinAudit/080322_HH-Routine_0068_v3_RGB_IGF.jpg?sw=400&q=90" },
  { id: 3, name: "Nourishing Hair Oil", price: "$14.99", image: "https://www.northlainehairco.co.uk/wp-content/uploads/Moroccanoil-hydration.jpg" },
  { id: 4, name: "Glowing Face Serum", price: "$29.99", image: "https://th.bing.com/th/id/OIP.SX2uVHZ4B0qC8P2if9dWPQHaEx?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
];

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-page-img" />
      <h2 className="product-page-title">{product.name}</h2>
      <p className="product-page-price">{product.price}</p>
      <button className="buy-now-btn">Buy Now</button>
    </div>
  );
};

export default ProductPage;
