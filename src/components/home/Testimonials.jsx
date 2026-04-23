import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { FiArrowLeft, FiArrowRight, FiPlay } from "react-icons/fi";
import { testimonials } from "../../data/data";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section style={{ padding: "100px 0", background: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "14px", letterSpacing: "2px", color: "#888888", textTransform: "uppercase", marginBottom: "16px", fontWeight: "600" }}>
            Testimonial
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "800", color: "#003b5c", lineHeight: "1.2", textTransform: "uppercase" }}>
            What Customers<br/>Say About Us
          </h2>
        </div>

        <div className="reveal">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", alignItems: "center" }}>
                  {/* Left: Video Thumbnail */}
                  <div style={{ flex: "1 1 450px", position: "relative" }}>
                    <img src={t.image} alt="Video Thumbnail" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)" }}></div>
                    
                    {/* Play Button */}
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "70px", height: "70px", background: "#ffffff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 15px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                        <FiPlay style={{ fontSize: "28px", color: "#003b5c", marginLeft: "4px" }} />
                      </div>
                    </div>
                    
                    {/* Caption Overlay */}
                    <div style={{ position: "absolute", bottom: "30px", left: "0", right: "0", textAlign: "center", color: "#ffffff" }}>
                       <p style={{ fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Our journey with</p>
                       <p style={{ fontSize: "16px", fontWeight: "700" }}>Edison has been smooth and pleasant</p>
                    </div>
                  </div>

                  {/* Right: Text Content */}
                  <div style={{ flex: "1 1 450px", padding: "20px 0" }}>
                    {/* Large Quote Mark background */}
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", top: "-40px", left: "-20px", fontSize: "120px", color: "#f4f4f4", fontFamily: "serif", lineHeight: "1", zIndex: -1 }}>
                        "
                      </div>
                      <h3 style={{ fontSize: "26px", fontWeight: "700", color: "#003b5c", marginBottom: "24px", position: "relative", zIndex: 1 }}>
                        Cherished Moments from Our Homeowner
                      </h3>
                      <p style={{ fontSize: "15px", color: "#333333", lineHeight: "1.9", marginBottom: "40px", fontWeight: "500" }}>
                        {t.text}
                      </p>
                      <div>
                        <h4 style={{ fontSize: "16px", fontWeight: "800", color: "#000000", marginBottom: "6px" }}>{t.name}</h4>
                        <p style={{ fontSize: "13px", color: "#000000", fontWeight: "500" }}>{t.role}</p>
                      </div>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div style={{ display: "flex", gap: "24px", marginTop: "50px" }}>
                      <button ref={prevRef} style={{ background: "none", border: "none", cursor: "pointer", color: "#000000", padding: "5px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#003b5c"} onMouseLeave={(e) => e.currentTarget.style.color = "#000000"}>
                        <FiArrowLeft size={24} />
                      </button>
                      <button ref={nextRef} style={{ background: "none", border: "none", cursor: "pointer", color: "#000000", padding: "5px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#003b5c"} onMouseLeave={(e) => e.currentTarget.style.color = "#000000"}>
                        <FiArrowRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
