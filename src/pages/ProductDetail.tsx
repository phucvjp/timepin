import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { auth } from "../firebase/config";
import { useAuth } from "../contexts/AuthContext";
import AuthModal from "../components/AuthModal";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  qrCodeUrl: string;
}

interface CheckoutForm {
  customerName: string;
  email: string;
  phone: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState<CheckoutForm>({
    customerName: "",
    email: auth.currentUser?.email || "",
    phone: "",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      setCheckoutForm((prev) => ({
        ...prev,
        customerName: currentUser.displayName || "",
        email: currentUser.email || "",
      }));
    }
  }, [currentUser]);

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (productId: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        import.meta.env.VITE_API_URL + `/products/${productId}`
      );
      setProduct(response.data);
    } catch (err) {
      setError(
        "Failed to fetch product details. Make sure the server is running."
      );
      console.error("Error fetching product:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckoutForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    try {
      setSubmitting(true);
      await axios.post(import.meta.env.VITE_API_URL + "/orders", {
        ...checkoutForm,
        productId: product._id,
      });
      setOrderSuccess(true);
      setShowCheckout(false);
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">Product not found</div>;

  if (orderSuccess) {
    return (
      <div className="order-success">
        <div className="container">
          <div className="success-card">
            <h1>🎉 Order Placed Successfully!</h1>
            <p>
              Thank you for choosing TimePin. Your order has been received and
              will be processed soon.
            </p>
            <p>We'll send you an email confirmation shortly.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setOrderSuccess(false);
                setCheckoutForm({
                  customerName: currentUser?.displayName || "",
                  email: currentUser?.email || "",
                  phone: "",
                });
              }}
            >
              Place Another Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail">
          <div className="product-image-section">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-detail-image"
            />
          </div>

          <div className="product-info-section">
            <h1>{product.name}</h1>
            <div className="price">{product.price}đ</div>
            <p className="description">{product.description}</p>

            <div className="qr-section">
              <h3>Sample QR Code</h3>
              <img src={product.qrCodeUrl} alt="QR Code" className="qr-code" />
              <p>Scan this code to preview the TimePin experience</p>
            </div>

            <button
              className="btn btn-primary btn-large"
              onClick={() => {
                if (currentUser) {
                  setShowCheckout(true);
                } else {
                  setShowAuthModal(true);
                }
              }}
            >
              Buy Now - {product.price}đ
            </button>
          </div>
        </div>

        {showCheckout && (
          <div className="checkout-modal">
            <div
              className="modal-overlay"
              onClick={() => setShowCheckout(false)}
            ></div>
            <div className="modal-content">
              <h2>Complete Your Purchase</h2>
              <p>
                Product: {product.name} - {product.price}đ
              </p>

              <form onSubmit={handleSubmitOrder} className="checkout-form">
                <div className="form-group">
                  <label htmlFor="customerName">Full Name *</label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={checkoutForm.customerName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={checkoutForm.email}
                    onChange={handleInputChange}
                    disabled
                    hidden
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={checkoutForm.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setShowCheckout(false)}
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? "Processing..." : "Place Order"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
