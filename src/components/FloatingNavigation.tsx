import React, { useState, useEffect } from "react";
import { Home, FileText, Video, Quote, BookOpen } from "lucide-react";
import "../styles/FloatingNavigation.css";

interface NavItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  targetId: string;
}

interface FloatingNavigationProps {
  items?: NavItem[];
  className?: string;
}

const defaultItems: NavItem[] = [
  {
    id: "hero",
    icon: Home,
    label: "Trang chủ",
    targetId: "hero-section",
  },
  {
    id: "summary",
    icon: FileText,
    label: "Tóm tắt",
    targetId: "summary-section",
  },
  {
    id: "media",
    icon: Video,
    label: "Tư liệu",
    targetId: "media-section",
  },
  {
    id: "quote",
    icon: Quote,
    label: "Trích dẫn",
    targetId: "quote-section",
  },
  {
    id: "education",
    icon: BookOpen,
    label: "Giáo trình",
    targetId: "education-section",
  },
];

const FloatingNavigation: React.FC<FloatingNavigationProps> = ({
  items = defaultItems,
  className = "",
}) => {
  const [activeSection, setActiveSection] = useState<string>(
    items[0]?.id || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = items
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.targetId),
        }))
        .filter((section) => section.element);

      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (targetId: string, sectionId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`floating-navigation ${className}`}>
      <div className="floating-nav-container">
        {items.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? "active" : ""}`}
              onClick={() => scrollToSection(item.targetId, item.id)}
              title={item.label}
              aria-label={item.label}
              style={{
                backgroundColor: isActive ? "#f0f0f0" : "transparent",
                borderRadius: "50%",
                padding: "10px",
                margin: "10px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconComponent size={20} className="nav-icon" />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default FloatingNavigation;
