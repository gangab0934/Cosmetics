import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-container">
        <img 
          src="https://png.pngtree.com/background/20230414/original/pngtree-makeup-skin-care-products-cosmetics-beauty-photography-advertising-background-picture-image_2424108.jpg"
          alt="Cosmetics Background"
          className="hero-image"
        />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Glow Like Never Before</h1>
          <p className="hero-text">
            Discover the best beauty and skincare products for your daily routine.
          </p>
          <Link to="/products">
            <button className="hero-button">Shop Now</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;



