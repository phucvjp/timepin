import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import "../styles/Home.css";
import cmt8Img from "../assets/cmt8.jpg";
import dbpImg from "../assets/dbp.jpg";
import tthcmImg from "../assets/tthcm.jpg";

import cachMangThangTamHeroImg from "../assets/cach-mang-thang-tam-hero.jpg";
import cmt10ngaImg from "../assets/cmt10nga.jpg";
import hanoiUprisingImg from "../assets/hanoi-uprising.jpg";
import hcmandchildrenImg from "../assets/hcmandchildren.jpg";
import hcmvisitfarmerImg from "../assets/hcmvisitfarmer.jpg";
import saigonUprisingImg from "../assets/saigon-uprising.jpg";
import sg1960sImg from "../assets/sg1960s.jpg";
import hcmdoctuyenngondoclapImg from "../assets/hcmdoctuyenngondoclap.jpg";
type Story = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  quote?: string;
};

const storiesSeed: Story[] = [
  {
    id: "cmt8",
    title: "Cách mạng Tháng 8 (1945)",
    excerpt: "Thời khắc khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    image: cmt8Img,
    content: "Phong trào tổng khởi nghĩa...",
    quote: "Không có gì quý hơn độc lập, tự do.",
  },
  {
    id: "dienbienphu",
    title: "Chiến thắng Điện Biên Phủ (1954)",
    excerpt: "Lừng lẫy năm châu, chấn động địa cầu.",
    image: dbpImg,
    content: "Trận quyết chiến chiến lược...",
  },
  {
    id: "tutuonghcm",
    title: "Tư tưởng Hồ Chí Minh",
    excerpt: "Nền tảng tư tưởng soi đường cho cách mạng Việt Nam.",
    image: tthcmImg,
    content: "Hệ thống quan điểm toàn diện...",
  },
];
const hcmQuotes = [
  {
    text: "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam.",
    meta: "Hồ Chí Minh",
  },
  { text: "Không có gì quý hơn độc lập, tự do.", meta: "Hồ Chí Minh" },
  {
    text: "Học để làm việc, làm người, làm cán bộ. Học để phục vụ Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại.",
    meta: "Hồ Chí Minh",
  },
];

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const [activeQuote, setActiveQuote] = useState(0);
  const [openStory, setOpenStory] = useState<Story | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveQuote((q) => (q + 1) % hcmQuotes.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenStory(null);
      }
    };
    if (openStory) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openStory]);

const gallery = useMemo(
  () => [
    { src: tthcmImg, alt: "Hồ Chí Minh" },
    { src: dbpImg, alt: "Điện Biên Phủ" },
    { src: cmt8Img, alt: "Cách mạng Tháng 8" },
    { src: hcmdoctuyenngondoclapImg, alt: "Biểu trưng nghệ thuật" },
    { src: cmt10ngaImg, alt: "Khoảnh khắc lịch sử 10 Nga" },
    { src: cachMangThangTamHeroImg, alt: "Anh hùng Cách mạng Tháng 8" },
    { src: hanoiUprisingImg, alt: "Khởi nghĩa Hà Nội" },
    { src: saigonUprisingImg, alt: "Khởi nghĩa Sài Gòn" },
    { src: sg1960sImg, alt: "Sài Gòn thập niên 1960" },
    { src: hcmandchildrenImg, alt: "Hồ Chí Minh và thiếu nhi" },
    { src: hcmvisitfarmerImg, alt: "Bác Hồ thăm nông dân" },
  ],
  []
);

  return (
    <div className="homepage">
      <div className="texture-layer" />

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="parallax">
          <motion.div className="flag-wave" style={{ y: parallaxY }} />
          <motion.img
            className="layer"
            src="/tthcm.jpg"
            alt="Hồ Chí Minh"
            style={{ top: "10%", left: "-6%", width: 360, y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
          />
          <motion.img
            className="layer"
            src="/dbp.jpg"
            alt="Điện Biên Phủ"
            style={{ bottom: "6%", right: "-4%", width: 320, y: useTransform(scrollYProgress, [0, 1], [0, -70]) }}
          />
        </div>
        <div className="hero-inner">
          <motion.h1
            className="headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Khám phá <em>Lịch sử</em> & Tư tưởng Hồ Chí Minh
          </motion.h1>
          <motion.p
            className="subtext"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Một góc nhìn sáng tạo, tương tác và truyền cảm hứng cho thế hệ trẻ.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Link to="#stories" className="cta-primary">Bắt đầu hành trình</Link>
          </motion.div>
        </div>
      </section>

      {/* Interactive Story Section */}
      <section className="stories" id="stories">
        <h2>Những câu chuyện lịch sử</h2>
        <div className="stories-track">
          {storiesSeed.map((s) => (
            <motion.article
              key={s.id}
              className="story-card"
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              onClick={() => setOpenStory(s)}
            >
              <img src={s.image} alt={s.title} />
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Quote Showcase */}
      <section className="quotes" id="quotes">
        <div className="quote-shell">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
            >
              <p className="quote-text">“{hcmQuotes[activeQuote].text}”</p>
              <div className="quote-meta">— {hcmQuotes[activeQuote].meta}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="gallery" id="gallery">
        <h2 className="headline" style={{ fontSize: 28, textAlign: "center", marginBottom: 18 }}>Kho tư liệu</h2>
        <div className="masonry">
          {gallery.map((g, i) => (
            <motion.figure key={i} className="tile" whileHover={{ y: -4 }}>
              <img src={g.src} alt={g.alt} />
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Community / Useful Tools Section */}
      <section className="tools" id="tools">
        <h2>Bạn có thể…</h2>
        <div className="tool-grid">
          <div className="tool">
            <h3>📘 Tìm hiểu bài học nhanh</h3>
            <p>Micro-learning với tóm tắt, mốc thời gian, bản đồ tư duy.</p>
          </div>
          <div className="tool">
            <h3>🧭 Tương tác câu hỏi lịch sử</h3>
            <p>Câu hỏi trắc nghiệm, tình huống mở, gợi ý theo ngữ cảnh.</p>
          </div>
          <div className="tool">
            <h3>🔖 Lưu tư liệu để ôn tập</h3>
            <p>Đánh dấu, sưu tầm ảnh, trích dẫn, và ghi chú nhanh.</p>
          </div>
        </div>
      </section>

      {/* Event Banner Section */}
      <section className="event-banner" id="event">
        <motion.div
          className="event-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="headline" style={{ fontSize: 26 }}>Triển lãm: Di sản tư tưởng Hồ Chí Minh</h3>
          <p style={{ marginTop: 8, color: "#564c45" }}>
            Không gian tương tác đa phương tiện: trưng bày số, âm thanh, ánh sáng và kể chuyện.
          </p>
          <div style={{ marginTop: 12 }}>
            <Link to="#" className="btn-secondary">Xem chi tiết sự kiện</Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div style={{ marginBottom: 6 }}>
          <Link to="#">Giới thiệu</Link>|
          <Link to="#" style={{ marginLeft: 8 }}>Tư liệu</Link>|
          <Link to="#" style={{ marginLeft: 8 }}>Liên hệ</Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 8 }}>
          <a href="#" aria-label="Facebook">🌐</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="YouTube">▶️</a>
        </div>
        <div>© 2025 — Khơi dậy niềm tự hào dân tộc.</div>
      </footer>

      {/* Story Modal */}
      <AnimatePresence>
        {openStory && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenStory(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-x" onClick={() => setOpenStory(null)}>✕</button>
              <img className="modal-img" src={openStory.image} alt={openStory.title} />
              <div className="modal-body">
                <h4 className="modal-title">{openStory.title}</h4>
                <p style={{ color: "#4c433c" }}>{openStory.content}</p>
                {openStory.quote && (
                  <p style={{ marginTop: 10, fontStyle: "italic", color: "#6a5f56" }}>
                    “{openStory.quote}”
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
