import React, { useState } from "react";
import "../styles/CachMangThangTam.css";

import cachMangThangTamHero from "../assets/cach-mang-thang-tam-hero.jpg";
import hanoiUprising from "../assets/hanoi-uprising.jpg";
import saigonUprising from "../assets/saigon-uprising.jpg";
import dietPhatXit from "../assets/diet-phat-xit.mp3";
import { useNavigate } from "react-router-dom";

const CachMangThangTam: React.FC = () => {
  const [quizAnswer, setQuizAnswer] = useState<string>("");
  const [showQuizResult, setShowQuizResult] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  return (
    <div className="cach-mang-thang-tam">
      {/* Hero Section */}
      <section id="hero-section" className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Cách mạng Tháng Tám 1945</h1>
            <p className="hero-subtitle">
              Dấu mốc khai sinh nước Việt Nam Dân chủ Cộng hòa
            </p>
          </div>
        </div>
        <div className="hero-background">
          <img
            src={cachMangThangTamHero}
            alt="Cách mạng Tháng Tám 1945"
            className="hero-image"
          />
        </div>
      </section>

      {/* Tóm tắt sự kiện */}
      <section id="summary-section" className="summary-section">
        <div className="container">
          <div className="summary-content">
            <p className="summary-text">
              "Cách mạng Tháng Tám năm 1945 là cuộc tổng khởi nghĩa của toàn dân
              Việt Nam dưới sự lãnh đạo của Đảng Cộng sản. Diễn ra trong nửa
              cuối tháng 8, cuộc cách mạng đã lật đổ ách thống trị thực
              dân-phong kiến, thành lập nên nước Việt Nam Dân chủ Cộng hòa, mở
              ra kỷ nguyên độc lập, tự do cho dân tộc."
            </p>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media-section" className="media-section">
        <div className="container">
          <h2 className="section-title">Tư liệu lịch sử</h2>

          {/* Video YouTube */}
          <div className="media-item">
            <h3>Video tài liệu</h3>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/u7kjhRCfj2o?si=7mAxW2tlEtKCGf2x"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
            <p className="media-description">
              Thước phim tư liệu quý giá tái hiện không khí sục sôi ngày
              19/8/1945 tại Hà Nội, khi nhân dân vùng lên khởi nghĩa giành chính
              quyền, mở đầu thắng lợi Cách mạng Tháng Tám. Sự kiện lịch sử trọng
              đại này chấm dứt ách thống trị thực dân – phong kiến và đặt nền
              móng cho sự ra đời nước Việt Nam Dân chủ Cộng hòa.
            </p>
          </div>

          {/* Hình ảnh sự kiện */}
          <div className="images-grid">
            <div className="image-item">
              <img
                src={hanoiUprising}
                alt="Cuộc khởi nghĩa ở Hà Nội"
                className="historical-image"
              />
              <div className="image-caption">
                <strong>Hình 1:</strong> Hình ảnh quần chúng cách mạng và tự vệ
                chiến đấu Hà Nội chiếm Phủ Khâm sai (Bắc Bộ phủ), ngày
                19-8-1945. Sự kiện này đánh dấu thắng lợi của cuộc khởi nghĩa
                tại thủ đô, góp phần đưa chính quyền về tay nhân dân.
              </div>
            </div>

            <div className="image-item">
              <img
                src={saigonUprising}
                alt="Cuộc khởi nghĩa ở miền Nam"
                className="historical-image"
              />
              <div className="image-caption">
                <strong>Hình 2:</strong> Hình ảnh quần chúng nhân dân Sài Gòn
                biểu tình trên đại lộ Nô-Đô-Rôm (nay là đường Đồng Khởi) trong
                ngày Tổng khởi nghĩa giành chính quyền ở Nam Bộ, ngày 25-8-1945.
                Cuộc khởi nghĩa đã lan tỏa khắp ba miền, thể hiện tinh thần đoàn
                kết toàn dân.
              </div>
            </div>
          </div>

          {/* Audio/Podcast */}
          <div className="audio-section">
            <h3>Bài hát: Diệt Phát Xít - Nguyễn Đình Thi</h3>
            <div className="audio-player">
              <audio controls className="audio-control">
                <source src={dietPhatXit} type="audio/mpeg" />
                Trình duyệt của bạn không hỗ trợ phát audio.
              </audio>
            </div>
            <p className="audio-description">
              Diệt Phát Xít là bài ca cách mạng hào hùng, ra đời trong những
              ngày sục sôi của Cách mạng Tháng Tám 1945. Với nhịp điệu mạnh mẽ,
              lời ca dứt khoát, tác phẩm khơi dậy lòng yêu nước, ý chí quật
              cường và tinh thần kháng chiến bất khuất của dân tộc Việt Nam, trở
              thành biểu tượng âm nhạc khích lệ tinh thần đấu tranh giành độc
              lập.
            </p>
          </div>
        </div>
      </section>

      {/* Trích dẫn nổi bật */}
      <section id="quote-section" className="quote-section">
        <div className="container">
          <div className="quote-content">
            <div className="quote-icon">"</div>
            <blockquote className="quote-text">
              Nhờ tinh thần anh dũng và lòng yêu nước của toàn thể nhân dân Việt
              Nam, Cách mạng tháng Tám đã thắng lợi.
            </blockquote>
            <cite className="quote-author">– Chủ tịch Hồ Chí Minh</cite>
          </div>
        </div>
      </section>

      {/* Liên hệ môn học và tương tác */}
      <section id="education-section" className="education-section">
        <div className="container">
          <div className="education-grid">
            {/* Liên hệ môn học */}
            <div className="education-content">
              <h2>Theo giáo trình Tư tưởng Hồ Chí Minh</h2>
              <p>
                Thắng lợi của Cách mạng Tháng Tám là một minh chứng sống động,
                khẳng định tính đúng đắn và sáng tạo của tư tưởng Hồ Chí Minh về
                cách mạng giải phóng dân tộc. Sự kiện này là đỉnh cao của quá
                trình đấu tranh lâu dài, từ đó khai sinh ra Nhà nước Việt Nam
                Dân chủ Cộng hòa.
              </p>
              <p>
                Trong giáo trình Tư tưởng Hồ Chí Minh, sự kiện này được nghiên
                cứu trong mối liên hệ mật thiết với các nội dung như "Tư tưởng
                Hồ Chí Minh về vấn đề dân tộc và cách mạng giải phóng dân tộc"
                và "Tư tưởng Hồ Chí Minh về xây dựng nhà nước của dân, do dân,
                vì dân". Thắng lợi của cuộc cách mạng đã hiện thực hóa tư tưởng
                của Người về một nhà nước độc lập, tự do, hạnh phúc.
              </p>
            </div>

            {/* Mini-quiz / Tương tác */}
            <div id="interaction-section" className="interactive-section">
              <div className="quiz-container">
                <h3>Mini Quiz</h3>
                <div className="quiz-question">
                  <p>
                    <strong>Câu hỏi:</strong> Nhận xét nào sau đây là không đúng
                    về cuộc Cách mạng Tháng Tám năm 1945 ở Việt Nam?
                  </p>

                  <div className="quiz-options">
                    <label className="quiz-option">
                      <input
                        type="radio"
                        name="quiz"
                        value="A"
                        onChange={(e) => setQuizAnswer(e.target.value)}
                      />
                      A. Đây là cuộc cách mạng có tính chất dân tộc điển hình.
                    </label>

                    <label className="quiz-option">
                      <input
                        type="radio"
                        name="quiz"
                        value="B"
                        onChange={(e) => setQuizAnswer(e.target.value)}
                      />
                      B. Đây là cuộc cách mạng có tính chất dân chủ điển hình.
                    </label>

                    <label className="quiz-option">
                      <input
                        type="radio"
                        name="quiz"
                        value="C"
                        onChange={(e) => setQuizAnswer(e.target.value)}
                      />
                      C. Diễn ra với sự kết hợp khởi nghĩa ở cả nông thôn và
                      thành thị.
                    </label>

                    <label className="quiz-option">
                      <input
                        type="radio"
                        name="quiz"
                        value="D"
                        onChange={(e) => setQuizAnswer(e.target.value)}
                      />
                      D. Toàn bộ quá trình diễn ra hoàn toàn bằng phương pháp
                      hòa bình, không có đổ máu.
                    </label>
                  </div>

                  <button
                    className="btn btn-primary quiz-submit"
                    onClick={handleQuizSubmit}
                    disabled={!quizAnswer}
                  >
                    Gửi câu trả lời
                  </button>

                  {showQuizResult && (
                    <div className="quiz-result">
                      <p
                        className={`result-text ${
                          quizAnswer === "D" ? "correct" : "incorrect"
                        }`}
                      >
                        {quizAnswer === "D"
                          ? "✓ Chính xác!"
                          : "✗ Chưa chính xác"}
                      </p>
                      <p className="explanation">
                        <strong>Đáp án đúng: D.</strong> Mặc dù cuộc Tổng khởi
                        nghĩa diễn ra nhanh chóng, gọn gàng và ít đổ máu hơn so
                        với các cuộc chiến tranh khác, nhưng đây vẫn là một cuộc
                        đấu tranh chính trị kết hợp với đấu tranh vũ trang. Có
                        sự giằng co và đổ máu tại một số địa phương trong quá
                        trình giành chính quyền.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Trở về trang chủ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CachMangThangTam;
