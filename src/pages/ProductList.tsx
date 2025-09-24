import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  qrCodeUrl: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/products"
      );
      setProducts(response.data);
    } catch (err) {
      setError("Failed to fetch products. Make sure the server is running.");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-list-page">
      <div className="container">
        <h1>Our TimePin Collection</h1>
        <p className="page-subtitle">
          Choose the perfect TimePin for your story
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">{product.price}đ</div>
                <div className="product-actions">
                  <Link
                    to={`/products/${product._id}`}
                    className="btn btn-outline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && !loading && (
          <div className="no-products">
            <p>No products available yet. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
