import React, { useEffect, useRef, useState } from "react";
import epDoanKet from "../assets/Chủ tịch Hồ Chí Minh và tư tưởng đại đoàn kết toàn dân tộc.mp3";
import epLeChiVien from "../assets/Kỳ Án Lệ Chi Viên – Nguyễn Trãi Có Thực Sự Bị Oan.mp3";
import epNguyenAiQuoc from "../assets/Nguyễn Ái Quốc - Ẩn số từ nước Pháp.mp3";
import epTomTatLSVN from "../assets/TÓM TẮT LỊCH SỬ VIỆT NAM.mp3";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AuthModal from "./AuthModal";

const Navigation: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isPodcastPlaying, setIsPodcastPlaying] = useState(false);
  const [podcastProgress, setPodcastProgress] = useState(0);
  const [podcastDuration, setPodcastDuration] = useState(0);
  const [showEpisodeList, setShowEpisodeList] = useState(false);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const episodes = [
    {
      id: "ep-doan-ket",
      title: "Tư tưởng đại đoàn kết toàn dân tộc",
      author: "TimePin Studio",
      src: epDoanKet,
      coverEmoji: "🤝",
    },
    {
      id: "ep-le-chi-vien",
      title: "Kỳ án Lệ Chi Viên – Nguyễn Trãi",
      author: "TimePin Studio",
      src: epLeChiVien,
      coverEmoji: "⚖️",
    },
    {
      id: "ep-nguyen-ai-quoc",
      title: "Nguyễn Ái Quốc – Ẩn số từ nước Pháp",
      author: "TimePin Studio",
      src: epNguyenAiQuoc,
      coverEmoji: "🇫🇷",
    },
    {
      id: "ep-tom-tat-lsvn",
      title: "Tóm tắt lịch sử Việt Nam",
      author: "TimePin Studio",
      src: epTomTatLSVN,
      coverEmoji: "📚",
    },
  ];

  const currentEpisode = episodes[currentEpisodeIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setPodcastProgress(audio.currentTime || 0);
    const onDur = () => setPodcastDuration(audio.duration || 0);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("durationchange", onDur);
    audio.addEventListener("ended", () => setIsPodcastPlaying(false));
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("durationchange", onDur);
    };
  }, []);

  // When episode changes, load new source, reset progress, auto-play if previously playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPodcastProgress(0);
    audio.load();
    if (isPodcastPlaying) {
      audio.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEpisodeIndex]);

  const togglePodcast = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPodcastPlaying) {
      audio.pause();
      setIsPodcastPlaying(false);
    } else {
      audio.play();
      setIsPodcastPlaying(true);
    }
  };

  const formatTime = (s: number) => {
    if (!isFinite(s) || s < 0) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${sec}`;
  };

  const handleAuthClick = () => {
    setShowAuthModal(true);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setShowUserMenu(false);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const getUserDisplayName = () => {
    if (currentUser?.displayName) {
      return currentUser.displayName;
    }
    if (currentUser?.email) {
      return currentUser.email.split("@")[0];
    }
    return "User";
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background:
            "linear-gradient(to right, rgba(2,6,23,0.7), rgba(127,29,29,0.35), rgba(2,6,23,0.7))",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="nav-container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0.75rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            className="nav-logo"
            style={{
              fontWeight: 800,
              fontSize: "1.25rem",
              background: "linear-gradient(90deg, #fde68a, #fca5a5)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textDecoration: "none",
            }}
          >
            TimePin
          </Link>
          <div
            className="nav-content"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <div className="nav-links" style={{ display: "flex", gap: "1rem" }}>
              <Link
                to="/"
                className="nav-link"
                style={{ color: "#e5e7eb", textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="nav-link"
                style={{ color: "#e5e7eb", textDecoration: "none" }}
              >
                Products
              </Link>
              <Link
                to="/exhibition"
                className="nav-link"
                style={{ color: "#e5e7eb", textDecoration: "none" }}
              >
                Exhibition
              </Link>
            </div>

            {/* Podcast mini-player with episode list */}
            <div style={{ position: "relative" }}>
              <div
                className="podcast-mini"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.4rem 0.6rem",
                  borderRadius: "9999px",
                  background: isPodcastPlaying
                    ? "rgba(34,197,94,0.15)"
                    : "rgba(255,255,255,0.06)",
                  border: isPodcastPlaying
                    ? "1px solid rgba(34,197,94,0.35)"
                    : "1px solid rgba(255,255,255,0.08)",
                  transition: "all .2s ease",
                  cursor: "pointer",
                }}
                onClick={togglePodcast}
                title={isPodcastPlaying ? "Pause podcast" : "Play podcast"}
              >
                <div style={{ fontSize: 18 }}>{currentEpisode.coverEmoji}</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: isPodcastPlaying ? "#86efac" : "#e5e7eb",
                      fontWeight: 700,
                    }}
                  >
                    {currentEpisode.title}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: isPodcastPlaying ? "#bbf7d0" : "#9ca3af",
                    }}
                  >
                    {currentEpisode.author}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePodcast();
                  }}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isPodcastPlaying
                      ? "rgba(34,197,94,0.25)"
                      : "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "white",
                    padding: 0,
                    lineHeight: 0,
                  }}
                  aria-label={isPodcastPlaying ? "Pause" : "Play"}
                >
                  {isPodcastPlaying ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      style={{ display: "block" }}
                    >
                      <rect
                        x="6"
                        y="5"
                        width="4"
                        height="14"
                        fill="currentColor"
                        rx="1"
                      />
                      <rect
                        x="14"
                        y="5"
                        width="4"
                        height="14"
                        fill="currentColor"
                        rx="1"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      style={{
                        display: "block",
                        transform: "translateX(0.5px)",
                      }}
                    >
                      <polygon points="7,5 18,12 7,19" fill="currentColor" />
                    </svg>
                  )}
                </button>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    minWidth: 120,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    style={{
                      position: "relative",
                      flex: 1,
                      height: 6,
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: 9999,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: podcastDuration
                          ? `${(podcastProgress / podcastDuration) * 100}%`
                          : "0%",
                        background: isPodcastPlaying ? "#22c55e" : "#e5e7eb",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 11, color: "#e5e7eb" }}>
                    {formatTime(podcastProgress)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowEpisodeList((s) => !s);
                  }}
                  aria-label="Choose episode"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "white",
                    fontSize: 12,
                    padding: 0,
                    lineHeight: 0,
                  }}
                  title="Chọn tập"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    style={{ display: "block" }}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <audio
                  ref={audioRef}
                  src={currentEpisode.src}
                  preload="metadata"
                />
              </div>

              {showEpisodeList && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "110%",
                    width: 280,
                    background: "rgba(2,6,23,0.9)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    padding: 8,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                    zIndex: 60,
                  }}
                >
                  <div style={{ maxHeight: 320, overflowY: "auto" }}>
                    {episodes.map((ep, i) => (
                      <button
                        key={ep.id}
                        onClick={() => {
                          setCurrentEpisodeIndex(i);
                          setShowEpisodeList(false);
                          setIsPodcastPlaying(true);
                        }}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          display: "flex",
                          gap: 10,
                          alignItems: "center",
                          padding: "10px 12px",
                          borderRadius: 10,
                          background:
                            i === currentEpisodeIndex
                              ? "rgba(34,197,94,0.12)"
                              : "transparent",
                          border:
                            i === currentEpisodeIndex
                              ? "1px solid rgba(34,197,94,0.35)"
                              : "1px solid transparent",
                          color: "#e5e7eb",
                        }}
                      >
                        <span style={{ fontSize: 18 }}>{ep.coverEmoji}</span>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            lineHeight: 1.1,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              color:
                                i === currentEpisodeIndex ? "#86efac" : "#fff",
                            }}
                          >
                            {ep.title}
                          </span>
                          <span style={{ fontSize: 12, color: "#9ca3af" }}>
                            {ep.author}
                          </span>
                        </div>
                        {i === currentEpisodeIndex && (
                          <span
                            style={{ marginLeft: "auto", color: "#22c55e" }}
                          >
                            ●
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="auth-section">
              {currentUser ? (
                <div className="user-menu">
                  <button
                    className="user-button"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  >
                    <div className="user-avatar">
                      {getUserDisplayName().charAt(0).toUpperCase()}
                    </div>
                    <span className="user-name">{getUserDisplayName()}</span>
                    <svg
                      className={`dropdown-arrow ${showUserMenu ? "open" : ""}`}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </button>
                  {showUserMenu && (
                    <div className="user-dropdown">
                      <div className="user-info">
                        <div className="user-email">{currentUser.email}</div>
                      </div>
                      <hr />
                      <button
                        className="dropdown-item logout-button"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="auth-buttons">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleAuthClick}
                  >
                    Sign In with Google
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default Navigation;
