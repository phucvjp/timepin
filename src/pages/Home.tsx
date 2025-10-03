import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
import chandunghcm from "../assets/hcm.jpg";
import vnflag from "../assets/vnflag.webp";

type Story = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  quote?: string;
  path?: string;
};

const storiesSeed: Story[] = [
  {
    id: "cmt8",
    title: "Cách mạng Tháng 8 (1945)",
    excerpt: "Thời khắc khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    image: cmt8Img,
    content: "Phong trào tổng khởi nghĩa...",
    quote: "Không có gì quý hơn độc lập, tự do.",
    path: "/cach-mang-thang-tam",
  },
  {
    id: "dienbienphu",
    title: "Chiến thắng Điện Biên Phủ (1954)",
    excerpt: "Lừng lẫy năm châu, chấn động địa cầu.",
    image: dbpImg,
    content: "Trận quyết chiến chiến lược...",
    path: "/chien-dich-dien-bien-phu",
  },
  {
    id: "tutuonghcm",
    title: "Tư tưởng Hồ Chí Minh",
    excerpt: "Nền tảng tư tưởng soi đường cho cách mạng Việt Nam.",
    image: tthcmImg,
    content: "Hệ thống quan điểm toàn diện...",
    path: "/tuyen-ngon-doc-lap",
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
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const [activeQuote, setActiveQuote] = useState(0);
  const [openStory, setOpenStory] = useState<Story | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveQuote((q) => (q + 1) % hcmQuotes.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  

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
      { src: cmt10ngaImg, alt: "Cách mạng tháng 10 Nga" },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 text-white font-sans overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-red-500/20 to-yellow-500/10 blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-100, 300]),
            y: useTransform(scrollYProgress, [0, 1], [0, 500]),
          }}
        />
        <motion.div
          className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow-500/10 to-red-500/20 blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [100, -300]),
            y: useTransform(scrollYProgress, [0, 1], [0, -400]),
          }}
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Floating images with parallax */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-50, 100]),
            y: useTransform(scrollYProgress, [0, 1], [0, 150]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 15]),
            left: "5%",
            top: "15%",
          }}
          >
            <motion.img
              className="w-72 h-96 object-cover rounded-2xl shadow-2xl ring-2 ring-yellow-400/30"
              src={chandunghcm}
              alt="Chân dung Chủ tịch Hồ Chí Minh"
              whileHover={{ scale: 1.05, rotate: -5 }}
              style={{ opacity }}
            />
        </motion.div>

        <motion.div
          className="absolute pointer-events-none"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [50, -100]),
            y: useTransform(scrollYProgress, [0, 1], [0, -150]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -15]),
            right: "5%",
            bottom: "10%",
          }}
        >
          <motion.img
            className="w-80 h-64 object-cover rounded-2xl shadow-2xl ring-2 ring-red-400/30"
            src={vnflag}
            alt="Hình ảnh chiến thắng Điện Biên Phủ"
            whileHover={{ scale: 1.05, rotate: 5 }}
            style={{ opacity }}
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ scale }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-yellow-300 text-sm font-medium">✨ Hành trình khám phá lịch sử</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200 bg-clip-text text-transparent animate-pulse">
                Lịch sử
              </span>
              <br />
              <span className="text-white">Hồ Chí Minh</span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Trải nghiệm tương tác đầy cảm hứng về <span className="text-yellow-300 font-semibold">tư tưởng</span> và <span className="text-red-300 font-semibold">di sản</span> của vị lãnh tụ vĩ đại
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('#stories');
                  if (el) (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-lg font-semibold shadow-2xl overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">Khám phá ngay</span>
                <span className="relative z-10">→</span>
              </button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Story Section */}
      <section id="stories" className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-200 to-red-300 bg-clip-text text-transparent">
                Câu chuyện
              </span>{" "}
              lịch sử
            </h2>
            <p className="text-xl text-slate-400">Khám phá những mốc son chói lọi của dân tộc</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storiesSeed.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setOpenStory(s)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-yellow-500/0 group-hover:from-red-500/20 group-hover:to-yellow-500/20 transition-all duration-500"
                    />
                  </div>

                  <div className="p-6 relative">
                    <div className="absolute -top-4 right-6 w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {idx === 0 ? "🏛️" : idx === 1 ? "⭐" : "💡"}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">{s.excerpt}</p>
                    
                    <div className="flex items-center text-yellow-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Tìm hiểu thêm</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Showcase */}
      <section id="quotes" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-transparent" />
        
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 text-9xl text-yellow-500/20 font-serif">"</div>
            <div className="absolute -bottom-8 -right-8 text-9xl text-yellow-500/20 font-serif">"</div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12 px-8 relative"
              >
                <p className="text-3xl md:text-4xl font-medium text-white leading-relaxed mb-8 italic">
                  {hcmQuotes[activeQuote].text}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500" />
                  <span className="text-yellow-400 text-xl font-semibold">{hcmQuotes[activeQuote].meta}</span>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quote indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {hcmQuotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuote(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeQuote ? "w-8 bg-yellow-400" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section id="gallery" className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Kho <span className="bg-gradient-to-r from-red-300 to-yellow-300 bg-clip-text text-transparent">tư liệu</span>
            </h2>
            <p className="text-xl text-slate-400">Hình ảnh quý báu về lịch sử dân tộc</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{g.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Công cụ <span className="bg-gradient-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">học tập</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📘", title: "Bài học nhanh", desc: "Micro-learning với tóm tắt, mốc thời gian, bản đồ tư duy.", color: "from-blue-500 to-cyan-500" },
              { icon: "🧭", title: "Câu hỏi tương tác", desc: "Trắc nghiệm, tình huống mở, gợi ý theo ngữ cảnh.", color: "from-purple-500 to-pink-500" },
              { icon: "🔖", title: "Lưu tư liệu", desc: "Đánh dấu, sưu tầm ảnh, trích dẫn, và ghi chú nhanh.", color: "from-orange-500 to-red-500" },
            ].map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="text-5xl mb-4">{tool.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Banner */}
      {/* <section id="event" className="relative py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-yellow-600 p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 text-6xl opacity-20"
            >
              ⭐
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6"
              >
                🎉 Sự kiện đặc biệt
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Triển lãm: Di sản tư tưởng Hồ Chí Minh
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Không gian tương tác đa phương tiện với trưng bày số, âm thanh, ánh sáng và storytelling sống động
              </p>
              <Link
                to="/exhibition"
                className="inline-block px-10 py-4 bg-white text-red-700 rounded-full font-bold text-lg hover:bg-yellow-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Đăng ký tham gia →
              </Link>
            </div>
          </div>
        </motion.div>
      </section> */}

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-slate-900/50 backdrop-blur-sm px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">
                Lịch sử HCM
              </h4>
              <p className="text-slate-400">Khơi dậy niềm tự hào dân tộc</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-white">Khám phá</h5>
              <div className="space-y-2 text-slate-400">
                <Link to="#" className="block hover:text-white transition-colors">Câu chuyện lịch sử</Link>
                <Link to="#" className="block hover:text-white transition-colors">Kho tư liệu</Link>
                <Link to="#" className="block hover:text-white transition-colors">Sự kiện</Link>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-white">Kết nối</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl transition-all hover:scale-110">
                  🌐
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl transition-all hover:scale-110">
                  📸
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl transition-all hover:scale-110">
                  ▶️
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-slate-400">
            <p>© 2025 — Khơi dậy niềm tự hào dân tộc</p>
          </div>
        </div>
      </footer>

      {/* Story Modal */}
      <AnimatePresence>
        {openStory && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenStory(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl border border-white/20"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:rotate-90"
                onClick={() => setOpenStory(null)}
                aria-label="Đóng"
              >
                ✕
              </button>

              {/* Image header */}
              <div className="relative h-80 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={openStory.image}
                  alt={openStory.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-3xl font-bold text-white mb-2">{openStory.title}</h4>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  {openStory.content}
                </p>
                
                {openStory.quote && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative pl-6 py-4 border-l-4 border-yellow-500 bg-yellow-500/10 rounded-r-lg"
                  >
                    <p className="text-xl text-yellow-100 italic">
                      "{openStory.quote}"
                    </p>
                  </motion.div>
                )}

                <div className="mt-8 flex gap-4">
                  <button
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105"
                    onClick={() => {
                      if (openStory?.path) {
                        navigate(openStory.path);
                      }
                    }}
                  >
                    Đọc toàn bộ
                  </button>
                  <button className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all">
                    Lưu lại
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;