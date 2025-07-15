// File: SmoothGallery.jsx
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, LayoutGroup } from "framer-motion";
import "./SmoothGallery.css";
import GoTop from "../../Svg/Project/GoTop.svg";
import GoBottom from "../../Svg/Project/GoBottom.svg";
import Pause from "../../Svg/Project/Pause.svg";
import Play from "../../Svg/Project/Play.svg";

const SmoothGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(false);
  const scrollRef = useRef(null);
  const location = useLocation();
  const isEnglish = location.pathname.endsWith("/en");

  // تكرار الصور لو أقل من 6
  const minLength = 6;
  const displayImages =
    images.length < minLength
      ? Array(Math.ceil(minLength / images.length))
          .fill(images)
          .flat()
      : images;

  const total = displayImages.length;

  // التشغيل التلقائي
  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoScroll, total]);

  // التحكم في الترتيب النسبي لكل صورة
  const getPosition = (index) => {
    const relativeIndex = (index - activeIndex + total) % total;
    return relativeIndex;
  };

  // التحكم بالفأرة (scroll يدوي)
  useEffect(() => {
    const container = scrollRef.current;
    const handleWheel = (e) => {
      container.scrollBy({ top: e.deltaY, behavior: "smooth" });
    };
    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // السحب بالماوس (drag scroll)
  useEffect(() => {
    const el = scrollRef.current;
    let isDown = false;
    let startY, scrollTop;

    const mouseDown = (e) => {
      isDown = true;
      startY = e.pageY - el.offsetTop;
      scrollTop = el.scrollTop;
    };
    const mouseUp = () => (isDown = false);
    const mouseLeave = () => (isDown = false);
    const mouseMove = (e) => {
      if (!isDown) return;
      const y = e.pageY - el.offsetTop;
      const walk = (y - startY) * 1.5;
      el.scrollTop = scrollTop - walk;
    };

    el.addEventListener("mousedown", mouseDown);
    el.addEventListener("mouseup", mouseUp);
    el.addEventListener("mouseleave", mouseLeave);
    el.addEventListener("mousemove", mouseMove);

    return () => {
      el.removeEventListener("mousedown", mouseDown);
      el.removeEventListener("mouseup", mouseUp);
      el.removeEventListener("mouseleave", mouseLeave);
      el.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // زر التكبير
  const [lightboxVisible, setLightboxVisible] = useState(false);

  return (
    <div className="gallery-wrapper">
      {/* Main Image */}
      <div className="main-image-box" onClick={() => setLightboxVisible(true)}>
        <motion.img
          key={displayImages[activeIndex]}
          src={displayImages[activeIndex]}
          className="main-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Thumbnail Column */}
      <div className="thumbnail-column">
        <button className="scroll-btn up" onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}>
          <img src={GoTop} alt="" className="GoTB" />
        </button>

        <div className="thumbnail-track" ref={scrollRef}>
          <LayoutGroup>
            {displayImages.map((img, i) => {
              const pos = getPosition(i);
              return (
                <motion.div
                  className={`thumbnail ${i === activeIndex ? "active" : ""}`}
                  key={img + i}
                  layout
                  onClick={() => setActiveIndex(i)}
                  animate={window.innerWidth > 768 ? { top: pos * 170, opacity: pos > 6 ? 0 : 1, scale: i === activeIndex ? 1 : 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 300,
                  }}
                >
                  <img src={img} alt={`thumb-${i}`} />
                </motion.div>
              );
            })}
          </LayoutGroup>
        </div>

        <button className="scroll-btn down" onClick={() => setActiveIndex((prev) => (prev + 1) % total)}>
          <img src={GoBottom} alt="" className="GoTB" />
        </button>
        <button className="button-92" onClick={() => setAutoScroll((prev) => !prev)}>
          <img src={autoScroll ? Pause : Play} alt={autoScroll ? (isEnglish ? "Pause" : "إيقاف") : isEnglish ? "Play" : "تشغيل"} className="auto-scroll-icon" />
          {autoScroll ? (isEnglish ? "Pause" : "إيقاف") : isEnglish ? "Auto Play" : "تشغيل تلقائى"}
        </button>
      </div>

      {/* Lightbox */}
      {lightboxVisible && (
        <div className="lightbox" onClick={() => setLightboxVisible(false)}>
          <img src={displayImages[activeIndex]} alt="Zoomed" />
        </div>
      )}
    </div>
  );
};

export default SmoothGallery;
