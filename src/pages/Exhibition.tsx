
const ExhibitionScreen = () => {
    //return simple div

    return <>  </>
}
// const ExhibitionScreen = () => {
//   const [currentSection, setCurrentSection] = useState(0);
//   const [soundEnabled, setSoundEnabled] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [animationState, setAnimationState] = useState('enter');
//   const [glowIntensity, setGlowIntensity] = useState(0);
//   const [lightEffect, setLightEffect] = useState({ x: 0, y: 0 });
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   // Per-tile 3D transform and shine state for the right panel gallery
//   const [tileTransforms, setTileTransforms] = useState<string[]>([]);
//   const [tileLight, setTileLight] = useState<Array<{ x: number; y: number }>>([]);

//   const sections = [
//     {
//       title: "Tư Tưởng Độc Lập Dân Tộc",
//       subtitle: "Nền tảng của cách mạng Việt Nam",
//       quote: "Không có gì quý hơn độc lập, tự do",
//       content: "Chủ tịch Hồ Chí Minh khẳng định độc lập dân tộc là quyền thiêng liêng, là điều kiện tiên quyết để dân tộc phát triển. Tư tưởng này thấm đẫm trong Tuyên ngôn Độc lập năm 1945.",
//       color: "from-red-600 via-orange-600 to-yellow-500",
//       accent: "bg-gradient-to-r from-red-500 to-yellow-500",
//       images: [
//         { type: 'icon', content: '🇻🇳', caption: 'Cờ Tổ quốc' },
//         { type: 'icon', content: '📜', caption: 'Tuyên ngôn độc lập' },
//         { type: 'icon', content: '⭐', caption: 'Ngôi sao vàng' }
//       ],
//       audioFreq: 440,
//       videoPlaceholder: "Clip: Lễ Độc lập 2/9/1945"
//     },
//     {
//       title: "Tư Tưởng Đại Đoàn Kết",
//       subtitle: "Sức mạnh của toàn dân",
//       quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công",
//       content: "Người nhấn mạnh sức mạnh của khối đại đoàn kết toàn dân tộc, đoàn kết các tầng lớp nhân dân, các dân tộc trong cả nước, đoàn kết quốc tế.",
//       color: "from-blue-600 via-indigo-600 to-purple-600",
//       accent: "bg-gradient-to-r from-blue-500 to-purple-500",
//       images: [
//         { type: 'icon', content: '🤝', caption: 'Đoàn kết' },
//         { type: 'icon', content: '👥', caption: 'Nhân dân' },
//         { type: 'icon', content: '🌏', caption: 'Quốc tế' }
//       ],
//       audioFreq: 523,
//       videoPlaceholder: "Video: Khối đại đoàn kết dân tộc"
//     },
//     {
//       title: "Tư Tưởng Dân Làm Chủ",
//       subtitle: "Dân là gốc, dân là chủ",
//       quote: "Dân là chủ, nước là nhà chung. Việc nước, việc nhà ai cũng phải lo",
//       content: "Chủ tịch Hồ Chí Minh khẳng định nhân dân là chủ thể của lịch sử, là nguồn gốc của mọi quyền lực. Quyền lực thuộc về nhân dân, do nhân dân, vì nhân dân.",
//       color: "from-green-600 via-emerald-600 to-teal-600",
//       accent: "bg-gradient-to-r from-green-500 to-teal-500",
//       images: [
//         { type: 'icon', content: '⚖️', caption: 'Công bằng' },
//         { type: 'icon', content: '🗳️', caption: 'Dân chủ' },
//         { type: 'icon', content: '✊', caption: 'Quyền lực' }
//       ],
//       audioFreq: 587,
//       videoPlaceholder: "Phóng sự: Dân chủ trong thực tiễn"
//     },
//     {
//       title: "Tư Tưởng Nhân Văn",
//       subtitle: "Con người là trung tâm",
//       quote: "Vì lợi ích mười năm phải trồng cây, vì lợi ích trăm năm phải trồng người",
//       content: "Người coi trọng con người, phát triển con người toàn diện. Con người vừa là mục đích, vừa là động lực của sự phát triển. Giáo dục, y tế, văn hóa là then chốt.",
//       color: "from-pink-600 via-rose-600 to-red-600",
//       accent: "bg-gradient-to-r from-pink-500 to-red-500",
//       images: [
//         { type: 'icon', content: '📚', caption: 'Giáo dục' },
//         { type: 'icon', content: '❤️', caption: 'Nhân ái' },
//         { type: 'icon', content: '🌱', caption: 'Phát triển' }
//       ],
//       audioFreq: 659,
//       videoPlaceholder: "Tư liệu: Bác Hồ với thiếu nhi"
//     },
//     {
//       title: "Tư Tưởng Đạo Đức Cách Mạng",
//       subtitle: "Nền tảng của người cách mạng",
//       quote: "Đạo đức cách mạng là nền tảng, là cái gốc của người cách mạng",
//       content: "Chủ tịch Hồ Chí Minh đề cao đạo đức cách mạng: Cần, Kiệm, Liêm, Chính, Chí Công Vô Tư. Đây là chuẩn mực đạo đức cho mọi cán bộ, đảng viên và nhân dân.",
//       color: "from-amber-600 via-orange-600 to-red-600",
//       accent: "bg-gradient-to-r from-amber-500 to-red-500",
//       images: [
//         { type: 'icon', content: '💎', caption: 'Liêm chính' },
//         { type: 'icon', content: '🎯', caption: 'Mục tiêu cao' },
//         { type: 'icon', content: '🌟', caption: 'Gương sáng' }
//       ],
//       audioFreq: 698,
//       videoPlaceholder: "Chuyên đề: Di sản đạo đức Hồ Chí Minh"
//     }
//   ];

//   // Ambient sound effect
//   useEffect(() => {
//     if (soundEnabled && audioRef.current) {
//       const AudioContextCtor = (window as unknown as { AudioContext: typeof AudioContext }).AudioContext;
//       const audioContext = new AudioContextCtor();
//       const oscillator = audioContext.createOscillator();
//       const gainNode = audioContext.createGain();
      
//       oscillator.connect(gainNode);
//       gainNode.connect(audioContext.destination);
      
//       oscillator.frequency.value = sections[currentSection].audioFreq;
//       oscillator.type = 'sine';
//       gainNode.gain.value = 0.03;
      
//       oscillator.start();
      
//       return () => {
//         oscillator.stop();
//         audioContext.close();
//       };
//     }
//   }, [soundEnabled, currentSection]);

//   // Glow animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGlowIntensity(prev => (prev + 0.05) % 1);
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   // Mouse move light effect
//   const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setLightEffect({
//       x: ((e.clientX - rect.left) / rect.width) * 100,
//       y: ((e.clientY - rect.top) / rect.height) * 100
//     });
//   };

//   const nextSection = () => {
//     setAnimationState('exit');
//     setTimeout(() => {
//       setCurrentSection((prev) => (prev + 1) % sections.length);
//       setAnimationState('enter');
//     }, 300);
//   };

//   const prevSection = () => {
//     setAnimationState('exit');
//     setTimeout(() => {
//       setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
//       setAnimationState('enter');
//     }, 300);
//   };

//   const currentData = sections[currentSection];

//   // Initialize/reset tile states when section changes
//   useEffect(() => {
//     const tileCount = currentData.images.length;
//     setTileTransforms(Array(tileCount).fill('rotateX(0deg) rotateY(0deg) scale(1)'));
//     setTileLight(Array(tileCount).fill({ x: 50, y: 50 }));
//   }, [currentSection]);

//   const handleTileMouseMove = (e: ReactMouseEvent<HTMLDivElement>, idx: number) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const relX = (e.clientX - rect.left) / rect.width;
//     const relY = (e.clientY - rect.top) / rect.height;
//     const rotateY = (relX - 0.5) * 24; // left/right
//     const rotateX = (0.5 - relY) * 24; // up/down
//     const nextTransforms = [...tileTransforms];
//     nextTransforms[idx] = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
//     setTileTransforms(nextTransforms);

//     const nextLight = [...tileLight];
//     nextLight[idx] = { x: relX * 100, y: relY * 100 };
//     setTileLight(nextLight);
//   };

//   const handleTileMouseLeave = (idx: number) => {
//     const nextTransforms = [...tileTransforms];
//     nextTransforms[idx] = 'rotateX(0deg) rotateY(0deg) scale(1)';
//     setTileTransforms(nextTransforms);
//   };

//   return (
//     <div 
//       className="w-full min-h-screen bg-black relative"
//       onMouseMove={handleMouseMove}
//     >
//       <Navigation />
//       {/* Dynamic background gradient */}
//       <div 
//         className={`absolute inset-0 bg-gradient-to-br ${currentData.color} opacity-20 transition-all duration-1000`}
//         style={{
//           transform: `scale(${1 + glowIntensity * 0.1})`,
//         }}
//       />
      
//       {/* Spotlight effect */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `radial-gradient(circle 600px at ${lightEffect.x}% ${lightEffect.y}%, rgba(255,255,255,0.1), transparent)`,
//           transition: 'background 0.3s ease'
//         }}
//       />

//       {/* Animated particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white rounded-full opacity-30"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-20px) translateX(10px); }
//         }
//         @keyframes pulse-glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.3); }
//           50% { box-shadow: 0 0 40px rgba(255,255,255,0.6); }
//         }
//         @keyframes slide-in {
//           from { opacity: 0; transform: translateX(50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slide-out {
//           from { opacity: 1; transform: translateX(0); }
//           to { opacity: 0; transform: translateX(-50px); }
//         }
//         .animate-slide-in { animation: slide-in 0.5s ease-out; }
//         .animate-slide-out { animation: slide-out 0.3s ease-out; }
//       `}</style>

//       {/* Main content */}
//       <div className="relative min-h-screen flex flex-col p-8 z-10">
        
//         {/* Header with controls */}
//         <div className="flex justify-between items-start mb-8">
//           <div className={`${animationState === 'enter' ? 'animate-slide-in' : 'animate-slide-out'}`}>
//             <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
//               Tư Tưởng Hồ Chí Minh
//             </h1>
//             <div className={`h-1 w-32 ${currentData.accent} rounded-full`} 
//                  style={{ animation: 'pulse-glow 2s infinite' }} />
//           </div>
          
//           <div className="flex gap-4">
//             <button
//               onClick={() => setSoundEnabled(!soundEnabled)}
//               className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all"
//             >
//               {soundEnabled ? <Volume2 className="text-white" /> : <VolumeX className="text-white" />}
//             </button>
//             <button
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all"
//             >
//               {isPlaying ? <Pause className="text-white" /> : <Play className="text-white" />}
//             </button>
//           </div>
//         </div>

//         {/* Main exhibition area */}
//         <div className="flex-1 grid grid-cols-3 gap-6">
          
//           {/* Left panel - Text content */}
//           <div className={`col-span-2 space-y-6 ${animationState === 'enter' ? 'animate-slide-in' : 'animate-slide-out'}`}>
//             <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
//               <Sparkles className="text-yellow-400 w-8 h-8 mb-4" />
//               <h2 className="text-4xl font-bold text-white mb-3">{currentData.title}</h2>
//               <p className="text-xl text-gray-300 mb-6">{currentData.subtitle}</p>
//               <div className={`h-1 w-full ${currentData.accent} rounded-full mb-6`} />
//               <blockquote className="text-2xl italic text-yellow-300 mb-6 leading-relaxed">
//                 "{currentData.quote}"
//               </blockquote>
//               <p className="text-lg text-gray-200 leading-relaxed">
//                 {currentData.content}
//               </p>
//             </div>

//             {/* Video player */}
//             <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
//               <div className="flex items-center gap-3 mb-4">
//                 <Film className="text-blue-400 w-6 h-6" />
//                 <h3 className="text-xl font-semibold text-white">Tư liệu hình ảnh</h3>
//               </div>
//               <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
//                 <div className="relative z-10 text-center">
//                   <Play className="w-16 h-16 text-white mx-auto mb-3 group-hover:scale-110 transition-transform" />
//                   <p className="text-white text-lg">{currentData.videoPlaceholder}</p>
//                 </div>
//                 {/* Video would be embedded here in production */}
//               </div>
//             </div>
//           </div>

//           {/* Right panel - Image gallery */}
//           <div className={`space-y-6 ${animationState === 'enter' ? 'animate-slide-in' : 'animate-slide-out'}`} style={{ animationDelay: '0.1s', perspective: '1000px' }}>
//             <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
//               <div className="flex items-center gap-3 mb-4">
//                 <Image className="text-pink-400 w-6 h-6" />
//                 <h3 className="text-xl font-semibold text-white">Biểu tượng</h3>
//               </div>
//               <div className="space-y-4">
//                 {currentData.images.map((img, idx) => (
//                   <div 
//                     key={idx}
//                     className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 transition-transform duration-150 cursor-pointer border border-white/10 will-change-transform"
//                     style={{
//                       animationDelay: `${idx * 0.1}s`,
//                       transformStyle: 'preserve-3d',
//                       transform: tileTransforms[idx] || 'rotateX(0deg) rotateY(0deg) scale(1)'
//                     }}
//                     onMouseMove={(e) => handleTileMouseMove(e, idx)}
//                     onMouseLeave={() => handleTileMouseLeave(idx)}
//                   >
//                     {/* Shine overlay */}
//                     <div
//                       className="pointer-events-none absolute inset-0 rounded-2xl"
//                       style={{
//                         background: `radial-gradient(600px circle at ${tileLight[idx]?.x ?? 50}% ${tileLight[idx]?.y ?? 50}%, rgba(255,255,255,0.18), transparent 40%)`,
//                         mixBlendMode: 'screen',
//                         transform: 'translateZ(1px)'
//                       }}
//                     />
//                     <div className="text-6xl mb-3 text-center" style={{ transform: 'translateZ(24px)' }}>{img.content}</div>
//                     <p className="text-white text-center font-medium" style={{ transform: 'translateZ(16px)' }}>{img.caption}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Audio visualizer */}
//             <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
//               <h3 className="text-xl font-semibold text-white mb-4">Âm thanh môi trường</h3>
//               <div className="flex items-end justify-center gap-2 h-24">
//                 {[...Array(12)].map((_, i) => (
//                   <div
//                     key={i}
//                     className={`w-3 ${currentData.accent} rounded-full transition-all`}
//                     style={{
//                       height: soundEnabled 
//                         ? `${30 + Math.sin((glowIntensity * 10 + i) * 0.5) * 40}%`
//                         : '20%',
//                       opacity: soundEnabled ? 0.8 : 0.3
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-between items-center mt-6">
//           <button
//             onClick={prevSection}
//             className="group p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"
//           >
//             <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={32} />
//           </button>

//           <div className="flex gap-3">
//             {sections.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => {
//                   setAnimationState('exit');
//                   setTimeout(() => {
//                     setCurrentSection(idx);
//                     setAnimationState('enter');
//                   }, 300);
//                 }}
//                 className={`h-3 rounded-full transition-all ${
//                   idx === currentSection 
//                     ? `w-12 ${currentData.accent}` 
//                     : 'w-3 bg-white/30'
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={nextSection}
//             className="group p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"
//           >
//             <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={32} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default ExhibitionScreen;