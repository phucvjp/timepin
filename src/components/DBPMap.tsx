import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, Target, Users, Calendar, X } from "lucide-react";

const DBPMap: React.FC = () => {
  interface Base {
    id: number;
    name: string;
    x: number; // percentage position on X axis
    y: number; // percentage position on Y axis
    status: "destroyed" | "active" | string;
    phase: number;
    description: string;
    casualties: string;
    date: string;
  }

  const [selectedBase, setSelectedBase] = useState<Base | null>(null);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { id: 0, title: "Chuẩn Bị", color: "blue" },
    { id: 1, title: "Đợt 1", color: "red" },
    { id: 2, title: "Đợt 2", color: "orange" },
    { id: 3, title: "Đợt 3", color: "yellow" },
  ];

  const bases: Base[] = [
    {
      id: 1,
      name: "Him Lam",
      x: 25,
      y: 30,
      status: "destroyed",
      phase: 1,
      description:
        "Cứ điểm phòng thủ quan trọng của địch, bị tiêu diệt trong đợt 1",
      casualties: "2,000 địch bị tiêu diệt",
      date: "13/3/1954",
    },
    {
      id: 2,
      name: "Độc Lập",
      x: 45,
      y: 25,
      status: "destroyed",
      phase: 1,
      description: "Cứ điểm trung tâm, nơi địch tập trung lực lượng chính",
      casualties: "3,500 địch bị tiêu diệt",
      date: "15/3/1954",
    },
    {
      id: 3,
      name: "Bản Kéo",
      x: 65,
      y: 35,
      status: "destroyed",
      phase: 1,
      description:
        "Cứ điểm then chốt án ngữ phía nam, bị tiêu diệt trong đợt 1",
      casualties: "1,800 địch bị tiêu diệt",
      date: "17/3/1954",
    },
    {
      id: 4,
      name: "A1",
      x: 30,
      y: 60,
      status: "destroyed",
      phase: 3,
      description: "Cứ điểm ác liệt nhất, then chốt quyết định thắng lợi",
      casualties: "4,200 địch bị tiêu diệt",
      date: "6/5/1954",
    },
    {
      id: 5,
      name: "C1",
      x: 55,
      y: 65,
      status: "destroyed",
      phase: 2,
      description: "Cứ điểm phía nam, bị bao vây và tiêu diệt",
      casualties: "2,800 địch bị tiêu diệt",
      date: "15/4/1954",
    },
    {
      id: 6,
      name: "Hồng Cúm",
      x: 50,
      y: 50,
      status: "destroyed",
      phase: 3,
      description: "Cứ điểm lớn ở phía nam bị cô lập và hạ trong đợt 3",
      casualties: "2,900 địch bị tiêu diệt",
      date: "7/5/1954",
    },
  ];

  const getStatusColor = (base: Base) => {
    if (base.phase <= currentPhase) {
      return "bg-red-500 border-red-400";
    }
    return "bg-blue-500 border-blue-400";
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-2 md:px-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-8">
            BẢN ĐỒ TÁC CHIẾN
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Theo dõi từng bước tiến của quân ta qua các cứ điểm địch
          </p>
        </motion.div>

        {/* Phase Selector */}
        <div className="flex justify-center gap-6 mb-16">
          {phases.map((phase) => (
            <motion.button
              key={phase.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPhase(phase.id)}
              style={{
                background: currentPhase === phase.id ? "red" : "orange",
              }}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
                currentPhase === phase.id
                  ? `bg-${phase.color}-600 text-black shadow-2xl shadow-${phase.color}-500/50`
                  : "bg-black/5 text-black/70 hover:bg-black/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20"
              }`}
            >
              {phase.title}
            </motion.button>
          ))}
        </div>

        {/* Map Container */}
        <div className="relative bg-gradient-to-br from-green-200/40 to-amber-200/40 dark:from-green-900/40 dark:to-brown-900/40 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-yellow-700/20 dark:border-yellow-500/30 shadow-2xl mb-12">
          <div className="relative aspect-video bg-gradient-to-br from-green-100/60 to-amber-100/60 dark:from-green-800/50 dark:to-brown-800/50 rounded-2xl overflow-hidden border-2 border-yellow-700/40 dark:border-yellow-600/50">
            {/* Mountains Background */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,70 20,40 40,60 60,30 80,50 100,60 100,100 0,100"
                fill="currentColor"
                className="text-green-300 dark:text-green-900"
              />
              <polygon
                points="10,80 30,50 50,70 70,45 90,65 100,75 100,100 0,100"
                fill="currentColor"
                className="text-green-200 dark:text-green-800"
              />
            </svg>

            {/* River */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,85 Q25,80 50,85 T100,85 L100,100 L0,100 Z"
                fill="currentColor"
                className="text-blue-400 dark:text-blue-600"
              />
            </svg>

            {/* Bases */}
            {bases.map((base) => (
              <motion.div
                key={base.id}
                className="absolute cursor-pointer group"
                style={{ left: `${base.x}%`, top: `${base.y}%` }}
                onClick={() => setSelectedBase(base)}
                initial={{ scale: 0 }}
                animate={{
                  scale: base.phase <= currentPhase ? [1, 1.2, 1] : 1,
                  opacity: base.phase <= currentPhase ? 0.8 : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: base.phase === currentPhase ? Infinity : 0,
                  repeatDelay: 1,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center transition-all ${getStatusColor(
                    base
                  )}`}
                >
                  {base.phase <= currentPhase ? (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="text-3xl md:text-4xl text-white font-bold"
                    >
                      ×
                    </motion.div>
                  ) : (
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full" />
                  )}
                </div>

                {/* Base Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-base md:text-lg font-bold bg-white/80 text-black border border-black/20 dark:bg-black/70 dark:text-white dark:border-white/20 px-4 py-2 rounded-full"
                >
                  {base.name}
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-black/20 dark:border-white/30 opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            ))}

            {/* Victory Flag at center when phase 3 */}
            {currentPhase === 3 && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Flag className="w-24 h-24 md:w-32 md:h-32 text-yellow-400 drop-shadow-2xl" />
                </motion.div>
              </motion.div>
            )}

            {/* Phase Indicator */}
            <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/70 backdrop-blur-md rounded-lg px-6 py-3 border border-black/10 dark:border-white/20">
              <div className="flex items-center gap-3 text-black dark:text-white">
                <Target className="w-5 h-5" />
                <span className="text-base md:text-lg font-bold">
                  Giai đoạn: {phases[currentPhase].title}
                </span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 flex justify-center gap-12">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-blue-500 border-2 border-blue-400 rounded-full" />
              <span className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Cứ điểm địch
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-red-500 border-2 border-red-400 rounded-full" />
              <span className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Đã tiêu diệt
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-yellow-500 border-2 border-yellow-400 rounded-full" />
              <span className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Chiến thắng
              </span>
            </div>
          </div>
        </div>

        {/* Base Details Modal */}
        <AnimatePresence>
          {selectedBase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedBase(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-10 max-w-lg w-full border border-black/10 dark:border-white/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                    {selectedBase.name}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedBase(null)}
                    className="p-3 bg-black/10 dark:bg-white/10 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-all"
                  >
                    <X className="w-6 h-6 text-black dark:text-white" />
                  </motion.button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-yellow-400" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">
                      {selectedBase.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-red-400" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">
                      {selectedBase.casualties}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Target className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">
                      Giai đoạn {selectedBase.phase + 1}
                    </span>
                  </div>

                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed mt-6 text-lg">
                    {selectedBase.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DBPMap;
