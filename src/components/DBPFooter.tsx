import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Heart, Star, ArrowUp, Calendar, MapPin, Users } from 'lucide-react';

const DBPFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const yearsSinceVictory = currentYear - 1954;

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-400/10 rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-full mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-24">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-6 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full flex items-center justify-center"
              >
                <Flag className="w-12 h-12 text-white" />
              </motion.div>
              <div>
                <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                  ĐIỆN BIÊN PHỦ
                </h3>
                <p className="text-gray-400 text-lg">Chiến thắng lịch sử</p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed mb-8 max-w-lg text-lg">
              Kỷ niệm {yearsSinceVictory} năm chiến thắng Điện Biên Phủ - Mốc son chói lọi trong lịch sử dân tộc Việt Nam.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-red-900/40 to-yellow-900/40 backdrop-blur-md rounded-xl p-6 border border-yellow-500/30"
            >
              <div className="flex items-center gap-4 mb-3">
                <Heart className="w-6 h-6 text-red-400" />
                <span className="text-white font-bold text-lg">"Quyết chiến, quyết thắng!"</span>
              </div>
              <p className="text-gray-300 text-base">
                Tinh thần bất khuất của dân tộc Việt Nam
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">Thống Kê</h4>
            {[
              { icon: Calendar, label: 'Thời gian', value: '56 ngày đêm' },
              { icon: Users, label: 'Quân ta', value: '55,000 chiến sĩ' },
              { icon: MapPin, label: 'Kết quả', value: '16,200 địch tiêu diệt' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
              >
                <stat.icon className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-base md:text-lg font-semibold">{stat.label}</div>
                  <div className="text-sm md:text-base text-gray-400">{stat.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Significance */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">Ý Nghĩa</h4>
            {[
              'Kết thúc chiến tranh chống Pháp',
              'Miền Bắc hoàn toàn giải phóng',
              'Cổ vũ phong trào giải phóng dân tộc',
              'Chứng minh sức mạnh dân tộc nhỏ'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors"
              >
                <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-base md:text-lg">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-10"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 mb-3 text-lg">
              &copy; {currentYear} TimePin. Kỷ niệm chiến thắng Điện Biên Phủ.
            </p>
            <p className="text-base text-gray-500">
              Kết nối lịch sử và thế hệ trẻ qua những câu chuyện QR.
            </p>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-red-600 px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl shadow-yellow-500/50"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.div>
            Lên đầu trang
          </motion.button>
        </div>

        {/* Victory Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{ 
              textShadow: [
                '0 0 20px rgba(239, 68, 68, 0.5)',
                '0 0 40px rgba(239, 68, 68, 0.8)',
                '0 0 20px rgba(239, 68, 68, 0.5)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-6"
          >
            "LỪNG LẪY NĂM CHÂU, CHẤN ĐỘNG ĐỊA CẦU"
          </motion.div>
          <div className="flex justify-center items-center gap-3 text-gray-400 text-lg">
            <span>Kỷ niệm {yearsSinceVictory} năm chiến thắng</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>
            <span>7/5/1954 - 7/5/{currentYear}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default DBPFooter;
