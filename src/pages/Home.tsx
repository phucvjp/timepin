import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">TimePin</h1>
        <p className="hero-subtitle">
          A modern badge connecting history and youth through QR stories
        </p>
        <p className="hero-description">
          Discover the past, connect with the present, and inspire the future
          with every scan. TimePin bridges generations through interactive
          storytelling and meaningful connections.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary">
            Explore Products
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Why Choose TimePin?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🔗 Connect Stories</h3>
              <p>
                Each TimePin contains unique QR codes that unlock personal
                stories and historical connections.
              </p>
            </div>
            <div className="feature">
              <h3>🌟 Bridge Generations</h3>
              <p>
                Connect young minds with historical wisdom through interactive
                and engaging experiences.
              </p>
            </div>
            <div className="feature">
              <h3>📱 Modern Technology</h3>
              <p>
                Simple QR code scanning reveals rich multimedia content and
                immersive storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

