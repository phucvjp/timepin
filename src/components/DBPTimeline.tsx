import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword, Mountain, Flag, Users, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const DBPTimeline: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const phases = [
    {
      id: 0,
      title: 'Chuẩn Bị',
      date: 'Tháng 11-12/1953',
      description: 'Vận chuyển vũ khí, lương thực qua đường Trường Sơn. Hàng nghìn dân công xây dựng đường giao thông.',
      icon: Users,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-900/40 to-blue-700/40',
      details: [
        'Huy động 55,000 chiến sĩ',
        'Vận chuyển 20,000 tấn lương thực',
        'Xây dựng 400km đường giao thông',
        'Chuẩn bị 200 khẩu pháo'
      ]
    },
    {
      id: 1,
      title: 'Đợt 1: Tấn Công',
      date: '13/3 - 17/3/1954',
      description: 'Tiêu diệt Him Lam (13/3), Độc Lập (15/3), Bản Kéo (17/3). Đánh chiếm sân bay Mường Thanh.',
      icon: Sword,
      color: 'from-red-500 to-red-700',
      bgColor: 'from-red-900/40 to-red-700/40',
      details: [
        'Him Lam – 13/3/1954',
        'Độc Lập – 15/3/1954',
        'Bản Kéo – 17/3/1954',
        'Chiếm sân bay Mường Thanh'
      ]
    },
    {
      id: 2,
      title: 'Đợt 2: Mở Rộng',
      date: '30/3 - 26/4/1954',
      description: 'Phá hủy 5 cứ điểm phía đông, siết chặt vòng vây. Địch co cụm phòng thủ trung tâm.',
      icon: Mountain,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'from-orange-900/40 to-orange-700/40',
      details: [
        'Phá hủy 5 cứ điểm phía đông',
        'Siết chặt vòng vây',
        'Địch co cụm phòng thủ',
        'Chuẩn bị đợt tấn công cuối'
      ]
    },
    {
      id: 3,
      title: 'Đợt 3: Quyết Định',
      date: '1/5 - 7/5/1954',
      description: 'Tổng tấn công cuối cùng: cao điểm A1 (6/5) và Hồng Cúm, 7/5/1954 địch đầu hàng.',
      icon: Flag,
      color: 'from-yellow-500 to-yellow-700',
      bgColor: 'from-yellow-900/40 to-yellow-700/40',
      details: [
        'Đánh chiếm A1 – 6/5/1954',
        'Hồng Cúm bị cô lập và hạ – 7/5/1954',
        'Địch đầu hàng 7/5/1954',
        'Chiến thắng hoàn toàn'
      ]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentPhase(prev => (prev + 1) % phases.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, phases.length]);

  const nextPhase = () => setCurrentPhase(prev => (prev + 1) % phases.length);
  const prevPhase = () => setCurrentPhase(prev => (prev - 1 + phases.length) % phases.length);

  return (
    <div className="py-20 px-4 md:py-24 md:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24 px-4"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-6">
            TIẾN TRÌNH CHIẾN DỊCH
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hành trình 56 ngày đêm chiến đấu anh dũng, từ chuẩn bị đến chiến thắng vang dội
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mb-16 px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevPhase}
            className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white font-bold text-lg md:text-xl shadow-2xl shadow-red-500/50"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            {isPlaying ? 'Tạm dừng' : 'Tự động'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextPhase}
            className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </motion.button>
        </div>

        {/* Timeline */}
        <div className="relative mb-20 px-2 md:px-6">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full transform -translate-y-1/2" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full transform -translate-y-1/2"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentPhase + 1) / phases.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />

          {/* Phase Indicators */}
          <div className="flex justify-between gap-8 px-4 md:px-8">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              const isActive = currentPhase === idx;
              const isCompleted = idx < currentPhase;

              return (
                <motion.div
                  key={phase.id}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.button
                    onClick={() => setCurrentPhase(idx)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full border-4 flex items-center justify-center transition-all ${
                      isActive
                        ? 'border-yellow-400 bg-gradient-to-br from-yellow-400 to-red-500 shadow-2xl shadow-yellow-500/50'
                        : isCompleted
                        ? 'border-green-400 bg-gradient-to-br from-green-400 to-green-600'
                        : 'border-white/30 bg-white/10 backdrop-blur-md hover:border-white/50'
                    }`}
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Icon
                      className={`w-8 h-8 md:w-10 md:h-10 ${
                        isActive
                          ? 'text-white'
                          : isCompleted
                          ? 'text-white'
                          : 'text-white/70'
                      }`}
                    />
                    {isCompleted && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-white text-xs">✓</span>
                      </motion.div>
                    )}
                  </motion.button>

                  <motion.div
                    className="mt-6 text-center"
                    animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                  >
                    <div
                      className={`text-base md:text-lg font-bold ${
                        isActive
                          ? 'text-yellow-400'
                          : isCompleted
                          ? 'text-green-400'
                          : 'text-white/70'
                      }`}
                    >
                      {phase.title}
                    </div>
                    <div className="text-sm text-gray-400 mt-2">{phase.date}</div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current Phase Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="mt-20 px-2 md:px-4"
          >
            <div
              className={`bg-gradient-to-br ${phases[currentPhase].bgColor} backdrop-blur-md rounded-3xl p-12 md:p-16 border border-white/20 shadow-2xl`}
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <motion.div whileHover={{ scale: 1.05, rotate: 5 }} className="flex-shrink-0">
                  <div
                    className={`w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br ${phases[currentPhase].color} flex items-center justify-center shadow-2xl`}
                  >
                    {React.createElement(phases[currentPhase].icon, {
                      className: 'w-16 h-16 md:w-20 md:h-20 text-white',
                    })}
                  </div>
                </motion.div>

                <div className="flex-1 text-center lg:text-left">
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(255, 255, 255, 0.5)',
                        '0 0 40px rgba(251, 191, 36, 0.8)',
                        '0 0 20px rgba(255, 255, 255, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {phases[currentPhase].title}
                  </motion.h3>

                  <div className="text-yellow-400 font-semibold text-2xl mb-6">
                    {phases[currentPhase].date}
                  </div>

                  <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
                    {phases[currentPhase].description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 p-2 md:p-4">
                    {phases[currentPhase].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 bg-black/30 rounded-xl p-4"
                      >
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <span className="text-gray-200 text-base md:text-lg">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DBPTimeline;
