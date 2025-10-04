import React from "react";
import { motion } from "framer-motion";
import { Flag, Sword, Mountain, Trophy, Play, ArrowDown } from "lucide-react";

const DBPHero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
        {/* Particles */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-400/20 rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-yellow-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center flex flex-col items-center justify-center">
        {/* Title */}
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight pt-16 md:pt-24"
        >
          <span className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
            ĐIỆN BIÊN PHỦ
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 md:mt-8 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/95 tracking-wide"
        >
          13/3 – 7/5/1954
          <span className="block text-base md:text-lg lg:text-xl font-normal text-gray-300 mt-2">
            (1 tháng, 3 tuần và 3 ngày)
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl mx-auto"
        >
          Chiến thắng lừng lẫy năm châu, chấn động địa cầu
          <br className="hidden sm:block" />
          <span className="block mt-4 text-yellow-400 font-bold text-xl sm:text-2xl md:text-3xl">
            "Quyết chiến, quyết thắng!"
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 md:mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white font-bold text-xl shadow-2xl shadow-red-500/50 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <div className="relative flex items-center gap-4">
              <Play className="w-7 h-7" />
              Khám Phá Lịch Sử
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "White",
            }}
            className="group px-10 py-5 bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/30 rounded-full text-gray-900 dark:text-white font-bold text-xl hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <Flag className="w-7 h-7" />
              Tìm Hiểu Thêm
            </div>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-24 md:mt-32"
        >
          {[
            { icon: Sword, label: "56 Ngày", value: "Đêm Chiến Đấu" },
            { icon: Mountain, label: "55,000", value: "Chiến Sĩ" },
            { icon: Trophy, label: "16,200", value: "Địch Tiêu Diệt" },
            { icon: Flag, label: "100%", value: "Thắng Lợi" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, y: -8 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 text-center min-h-[180px] flex flex-col justify-center shadow-2xl shadow-black/20"
            >
              <stat.icon className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 text-yellow-400" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-base md:text-lg text-gray-300">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <ArrowDown className="w-6 h-6" />
          <span className="text-sm">Cuộn xuống</span>
        </motion.div>
      </div>
    </section>
  );
};

export default DBPHero;
