import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1 className="error-title">Trang không tìm thấy</h1>
          <p className="error-description">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển
            đi.
          </p>
          <div className="error-actions">
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate("/")}
            >
              Về trang chủ
            </button>
            <button
              className="btn btn-outline btn-large"
              onClick={() => navigate(-1)}
            >
              Quay lại
            </button>
          </div>
          <div className="error-suggestions">
            <h3>Có thể bạn đang tìm:</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => navigate("/")}>
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  className="link-button"
                  onClick={() => navigate("/products")}
                >
                  Danh sách sản phẩm
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="error-illustration">
          <div className="error-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
              <line x1="8" y1="11" x2="14" y2="11" />
              <line x1="8" y1="14" x2="10" y2="14" />
            </svg>
          </div>
          <p>Không tìm thấy nội dung</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
