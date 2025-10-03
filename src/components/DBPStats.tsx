import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Flag, Users, Mountain, Calendar, Target, Award } from 'lucide-react';

const DBPStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState('military');
  const [counters, setCounters] = useState({
    days: 0,
    soldiers: 0,
    enemies: 0,
    victory: 0
  });

  const tabs = [
    { id: 'military', label: 'Quân Sự', icon: Trophy },
    { id: 'political', label: 'Chính Trị', icon: Flag },
    { id: 'people', label: 'Nhân Dân', icon: Users },
    { id: 'international', label: 'Quốc Tế', icon: Mountain }
  ];

  const militaryStats = [
    {
      icon: Calendar,
      label: 'Thời gian chiến đấu',
      value: '56',
      unit: 'ngày đêm',
      color: 'from-blue-500 to-blue-700',
      description: 'Từ 13/3 đến 7/5/1954'
    },
    {
      icon: Users,
      label: 'Quân ta tham gia',
      value: '55,000',
      unit: 'chiến sĩ',
      color: 'from-green-500 to-green-700',
      description: 'Từ khắp các tỉnh miền Bắc'
    },
    {
      icon: Target,
      label: 'Địch bị tiêu diệt',
      value: '16,200',
      unit: 'quân địch',
      color: 'from-red-500 to-red-700',
      description: 'Bao gồm cả bắt sống'
    },
    {
      icon: Trophy,
      label: 'Tỷ lệ thắng lợi',
      value: '100',
      unit: '%',
      color: 'from-yellow-500 to-yellow-700',
      description: 'Chiến thắng hoàn toàn'
    }
  ];

  const politicalStats = [
    {
      title: 'Hiệp định Genève',
      date: '21/7/1954',
      description: 'Pháp buộc phải ký hiệp định chấm dứt chiến tranh',
      impact: 'Kết thúc 9 năm kháng chiến chống Pháp'
    },
    {
      title: 'Miền Bắc giải phóng',
      date: '1954',
      description: 'Toàn bộ miền Bắc Việt Nam được giải phóng',
      impact: 'Mở ra kỷ nguyên xây dựng chủ nghĩa xã hội'
    },
    {
      title: 'Công nhận độc lập',
      date: '1954',
      description: 'Quốc tế công nhận quyền độc lập của Việt Nam',
      impact: 'Thành lập nước Việt Nam Dân chủ Cộng hòa'
    }
  ];

  const peopleStats = [
    {
      icon: Users,
      label: 'Dân công',
      value: '260,000',
      description: 'Người dân tham gia vận chuyển lương thực'
    },
    {
      icon: Mountain,
      label: 'Đường giao thông',
      value: '400',
      unit: 'km',
      description: 'Xây dựng qua núi rừng Trường Sơn'
    },
    {
      icon: Target,
      label: 'Lương thực',
      value: '20,000',
      unit: 'tấn',
      description: 'Vận chuyển đến chiến trường'
    },
    {
      icon: Award,
      label: 'Anh hùng',
      value: '1,000+',
      description: 'Chiến sĩ được phong tặng danh hiệu'
    }
  ];

  const internationalStats = [
    {
      title: 'Cổ vũ phong trào giải phóng',
      description: 'Điện Biên Phủ trở thành biểu tượng cho các dân tộc đấu tranh giải phóng',
      countries: 'Châu Á - Phi',
      impact: 'Hàng chục quốc gia giành độc lập'
    },
    {
      title: 'Chứng minh sức mạnh dân tộc',
      description: 'Dân tộc nhỏ có thể đánh thắng cường quốc',
      countries: 'Toàn thế giới',
      impact: 'Thay đổi cục diện chính trị quốc tế'
    },
    {
      title: 'Điện Biên Phủ trên không',
      description: 'Hà Nội 1972 - Mỹ học bài học từ Pháp',
      countries: 'Việt Nam',
      impact: 'Chiến thắng trong cuộc kháng chiến chống Mỹ'
    }
  ];

  // Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (start: number, end: number, key: keyof typeof counters) => {
      let current = start;
      const increment = (end - start) / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    animateCounter(0, 56, 'days');
    animateCounter(0, 55000, 'soldiers');
    animateCounter(0, 16200, 'enemies');
    animateCounter(0, 100, 'victory');
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'military':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {militaryStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 border border-white/20 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-12 h-12 text-white" />
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {stat.value}
                  <span className="text-xl text-gray-400 ml-1">{stat.unit}</span>
                </div>
                <div className="text-lg text-gray-300 mb-4">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        );

      case 'political':
        return (
          <div className="space-y-10">
            {politicalStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl p-10 border border-blue-500/30"
              >
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Flag className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{stat.title}</h3>
                    <div className="text-blue-400 font-semibold text-lg mb-4">{stat.date}</div>
                    <p className="text-gray-300 mb-6 text-lg">{stat.description}</p>
                    <div className="text-base text-blue-300 bg-blue-900/30 rounded-lg p-5">
                      <strong>Tác động:</strong> {stat.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'people':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {peopleStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-green-900/40 to-teal-900/40 backdrop-blur-md rounded-2xl p-10 border border-green-500/30 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center"
                >
                  <stat.icon className="w-12 h-12 text-white" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {stat.value}
                  {stat.unit && <span className="text-xl text-gray-400 ml-1">{stat.unit}</span>}
                </div>
                <div className="text-lg text-gray-300 mb-4">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        );

      case 'international':
        return (
          <div className="space-y-10">
            {internationalStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.02, x: -10 }}
                className="bg-gradient-to-r from-orange-900/40 to-red-900/40 backdrop-blur-md rounded-2xl p-10 border border-orange-500/30"
              >
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{stat.title}</h3>
                    <div className="text-orange-400 font-semibold text-lg mb-4">{stat.countries}</div>
                    <p className="text-gray-300 mb-6 text-lg">{stat.description}</p>
                    <div className="text-base text-orange-300 bg-orange-900/30 rounded-lg p-5">
                      <strong>Tầm ảnh hưởng:</strong> {stat.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-full mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-8">
            Ý NGHĨA LỊCH SỬ
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Chiến thắng Điện Biên Phủ không chỉ là thắng lợi quân sự mà còn là mốc son lịch sử
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24"
        >
          {[
            { label: 'Ngày đêm', value: counters.days, unit: '', icon: Calendar },
            { label: 'Chiến sĩ', value: counters.soldiers.toLocaleString(), unit: '', icon: Users },
            { label: 'Địch tiêu diệt', value: counters.enemies.toLocaleString(), unit: '', icon: Target },
            { label: 'Thắng lợi', value: counters.victory, unit: '%', icon: Trophy },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mx-auto mb-6 text-yellow-400"
              >
                <stat.icon className="w-full h-full" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-4">
                {stat.value}{stat.unit}
              </div>
              <div className="text-base md:text-lg text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-4 px-8 py-4 rounded-full font-bold text-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-600 to-red-600 text-white shadow-2xl shadow-yellow-500/50'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <tab.icon className="w-6 h-6" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 bg-gradient-to-r from-yellow-900/40 via-red-900/40 to-yellow-900/40 backdrop-blur-md rounded-2xl p-12 md:p-16 border-2 border-yellow-500/50 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-yellow-400"
          >
            "LỪNG LẪY NĂM CHÂU, CHẤN ĐỘNG ĐỊA CẦU"
          </motion.div>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
            Chiến thắng Điện Biên Phủ đã đi vào lịch sử như một kỳ tích của ý chí và sức mạnh dân tộc,
            mở ra kỷ nguyên mới cho Việt Nam và các dân tộc đấu tranh giải phóng trên thế giới.
          </p>
          <div className="flex justify-center mt-10">
            <div className="flex gap-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: i * 0.1, duration: 0.5, repeat: Infinity }}
                  className="w-5 h-5 bg-yellow-400 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DBPStats;
