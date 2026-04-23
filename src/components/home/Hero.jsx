import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FiGrid } from "react-icons/fi";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
      title: "REDEFINING HAPPINESS",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
      title: "ELEVATING LIFESTYLE",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      title: "BUILDING TRUST",
    }
  ];

  return (
    <section style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        style={{ width: "100%", height: "100%" }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <img src={slide.image} alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              {/* Overlay gradient */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)" }}></div>
              
              {/* Text Content */}
              <div style={{ position: "absolute", bottom: "100px", left: "5%", zIndex: 10 }}>
                <h2 style={{ 
                  fontFamily: "var(--font-montserrat)", 
                  fontSize: "clamp(36px, 5vw, 68px)", 
                  fontWeight: "800", 
                  color: "#ffffff", 
                  textTransform: "uppercase", 
                  letterSpacing: "4px",
                  textShadow: "2px 4px 15px rgba(0,0,0,0.4)",
                  margin: 0,
                  opacity: 0.95
                }}>
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Bar for Explore Projects */}
      <div style={{ 
        position: "absolute", 
        bottom: 0, left: 0, right: 0, 
        background: "rgba(10, 10, 10, 0.75)", 
        backdropFilter: "blur(5px)", 
        zIndex: 20,
        padding: "20px 5%" 
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#ffffff", cursor: "pointer", transition: "opacity 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.opacity = 0.8} onMouseLeave={(e) => e.currentTarget.style.opacity = 1} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <FiGrid size={24} />
            <span style={{ fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>Explore Projects</span>
          </div>
          
          <div className="hero-tabs" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
            <span style={{ width: "0", height: "0", borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid #ffffff", opacity: 0.8 }}></span>
            <span style={{ color: "#ffffff", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer", opacity: 0.8, transition: "opacity 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}>Ongoing</span>
            <span style={{ color: "#ffffff", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer", opacity: 0.8, transition: "opacity 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}>Handed Over</span>
            <span style={{ color: "#ffffff", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer", opacity: 0.8, transition: "opacity 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}>Upcoming</span>
            <span style={{ color: "#ffffff", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer", opacity: 0.8, transition: "opacity 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}>Ready</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-swiper .swiper-pagination {
          position: absolute;
          right: 40px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 30;
        }
        .hero-swiper .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: #ffffff !important;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.5);
        }
        @media (max-width: 768px) {
          .hero-tabs { display: none !important; }
          .hero-swiper .swiper-pagination { right: 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
