import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiStar } from "react-icons/fi";
import { testimonials } from "../../data/data";

const Testimonials = () => {
  return (
    <section
      style={{
        padding: "100px 0",
        background: "var(--color-light-2)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--color-primary)",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Testimonials
          </span>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "700",
              color: "var(--color-text-dark)",
              marginTop: "12px",
              marginBottom: "16px",
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-text-body)",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Real stories from real clients who found their dream properties with us
          </p>
        </div>

        {/* Slider */}
        <div className="reveal">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "50px" }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div
                  style={{
                    padding: "36px",
                    borderRadius: "24px",
                    background: "#ffffff",
                    border: "1px solid var(--color-light-3)",
                    transition: "all 0.4s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 16px 50px rgba(99,102,241,0.1)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Stars */}
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      marginBottom: "20px",
                    }}
                  >
                    {[...Array(t.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        style={{
                          color: "#f59e0b",
                          fill: "#f59e0b",
                          fontSize: "16px",
                        }}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--color-text-body)",
                      lineHeight: "1.8",
                      flex: 1,
                      marginBottom: "24px",
                    }}
                  >
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      paddingTop: "20px",
                      borderTop: "1px solid var(--color-light-3)",
                    }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h4
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "var(--color-text-dark)",
                        }}
                      >
                        {t.name}
                      </h4>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--color-text-light)",
                        }}
                      >
                        {t.role}
                      </p>
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
