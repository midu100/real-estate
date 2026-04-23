import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FiMapPin, FiMaximize, FiHeart, FiShare2, FiCheck,
  FiPhone, FiMail, FiArrowLeft,
} from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { properties } from "../data/data";
import useScrollReveal from "../hooks/useScrollReveal";

const PropertyDetails = () => {
  useScrollReveal();
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <section style={{ paddingTop: "140px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "32px", color: "var(--color-text-dark)" }}>
          Property not found
        </h2>
        <Link to="/properties" style={{ color: "var(--color-primary)", marginTop: "16px", display: "inline-block" }}>
          ← Back to Properties
        </Link>
      </section>
    );
  }

  return (
    <section style={{ paddingTop: "100px", paddingBottom: "80px", background: "var(--color-light)" }}>
      <div className="container">
        {/* Back Button */}
        <Link
          to="/properties"
          className="reveal"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "14px", color: "var(--color-text-body)", textDecoration: "none",
            marginBottom: "24px", transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-body)")}
        >
          <FiArrowLeft /> Back to Properties
        </Link>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "36px" }}>
          {/* Left: Images & Details */}
          <div style={{ flex: "1 1 580px" }}>
            {/* Image Gallery */}
            <div className="reveal" style={{ borderRadius: "24px", overflow: "hidden", marginBottom: "28px" }}>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={(s) => setActiveImg(s.activeIndex)}
                style={{ borderRadius: "24px" }}
              >
                {property.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
                      <img
                        src={img}
                        alt={`${property.title} ${i + 1}`}
                        style={{
                          width: "100%", height: "100%", objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnails */}
            <div className="reveal" style={{ display: "flex", gap: "12px", marginBottom: "36px", flexWrap: "wrap" }}>
              {property.images.map((img, i) => (
                <div
                  key={i}
                  style={{
                    width: "80px", height: "60px", borderRadius: "12px", overflow: "hidden",
                    border: activeImg === i ? "2px solid var(--color-primary)" : "2px solid transparent",
                    opacity: activeImg === i ? 1 : 0.6, cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>

            {/* Title & Price Row */}
            <div className="reveal" style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <div style={{
                    display: "inline-block", padding: "5px 14px", borderRadius: "9999px",
                    background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))",
                    color: "var(--color-primary)", fontSize: "13px", fontWeight: "600", marginBottom: "12px",
                  }}>
                    {property.type}
                  </div>
                  <h1 style={{
                    fontFamily: "var(--font-playfair)", fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: "700", color: "var(--color-text-dark)", marginBottom: "8px",
                  }}>
                    {property.title}
                  </h1>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-text-light)", fontSize: "15px" }}>
                    <FiMapPin style={{ color: "var(--color-primary)" }} /> {property.location}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    fontSize: "clamp(24px, 3vw, 34px)", fontWeight: "700",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                    ${property.price.toLocaleString()}
                  </div>
                  <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                    <button style={{
                      width: "42px", height: "42px", borderRadius: "12px",
                      background: "var(--color-light-2)", border: "1px solid var(--color-light-3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--color-text-light)", fontSize: "18px", cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}>
                      <FiHeart />
                    </button>
                    <button style={{
                      width: "42px", height: "42px", borderRadius: "12px",
                      background: "var(--color-light-2)", border: "1px solid var(--color-light-3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--color-text-light)", fontSize: "18px", cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}>
                      <FiShare2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="reveal" style={{
              display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px 28px",
              borderRadius: "20px", background: "#ffffff", border: "1px solid var(--color-light-3)",
              marginBottom: "36px",
            }}>
              {property.bedrooms > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--color-primary)", fontSize: "18px",
                  }}>
                    <IoBedOutline />
                  </div>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-dark)" }}>{property.bedrooms}</div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-light)" }}>Bedrooms</div>
                  </div>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--color-primary)", fontSize: "18px",
                  }}>
                    <LuBath />
                  </div>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-dark)" }}>{property.bathrooms}</div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-light)" }}>Bathrooms</div>
                  </div>
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--color-primary)", fontSize: "18px",
                }}>
                  <FiMaximize />
                </div>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-dark)" }}>{property.area.toLocaleString()}</div>
                  <div style={{ fontSize: "12px", color: "var(--color-text-light)" }}>Sq Ft</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="reveal" style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "16px" }}>
                Description
              </h3>
              <p style={{ fontSize: "15px", color: "var(--color-text-body)", lineHeight: "1.9" }}>
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="reveal" style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "16px" }}>
                Amenities
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {property.amenities.map((a, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", alignItems: "center", gap: "8px",
                      padding: "10px 18px", borderRadius: "12px",
                      background: "#ffffff", border: "1px solid var(--color-light-3)",
                      fontSize: "14px", color: "var(--color-text-body)",
                    }}
                  >
                    <FiCheck style={{ color: "var(--color-primary)" }} />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="reveal" style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "16px" }}>
                Location
              </h3>
              <div style={{
                borderRadius: "20px", overflow: "hidden", height: "300px",
                background: "var(--color-light-2)", border: "1px solid var(--color-light-3)",
              }}>
                <iframe
                  title="Property Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1681234567890"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Agent Card (Sticky) */}
          <div style={{ flex: "0 0 340px", maxWidth: "340px" }}>
            <div
              className="reveal-right"
              style={{
                position: "sticky", top: "100px",
                padding: "32px", borderRadius: "24px",
                background: "#ffffff", border: "1px solid var(--color-light-3)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              }}
            >
              {/* Agent Info */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  style={{
                    width: "56px", height: "56px", borderRadius: "16px", objectFit: "cover",
                  }}
                />
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-dark)" }}>
                    {property.agent.name}
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--color-text-light)" }}>
                    Listed Agent
                  </p>
                </div>
              </div>

              {/* Agent Contacts */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                <a href={`tel:${property.agent.phone}`} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "12px 16px", borderRadius: "14px",
                  background: "var(--color-light-2)", textDecoration: "none",
                  color: "var(--color-text-body)", fontSize: "14px", transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-light-2)";
                }}
                >
                  <FiPhone style={{ color: "var(--color-primary)" }} /> {property.agent.phone}
                </a>
                <a href={`mailto:${property.agent.email}`} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "12px 16px", borderRadius: "14px",
                  background: "var(--color-light-2)", textDecoration: "none",
                  color: "var(--color-text-body)", fontSize: "14px", transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-light-2)";
                }}
                >
                  <FiMail style={{ color: "var(--color-primary)" }} /> {property.agent.email}
                </a>
              </div>

              {/* Contact Form */}
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "16px" }}>
                Send a Message
              </h4>
              <form style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    padding: "12px 16px", borderRadius: "14px",
                    background: "var(--color-light-2)", border: "1px solid var(--color-light-3)",
                    fontSize: "14px", outline: "none", color: "var(--color-text-dark)",
                    fontFamily: "var(--font-inter)", transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-light-3)")}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    padding: "12px 16px", borderRadius: "14px",
                    background: "var(--color-light-2)", border: "1px solid var(--color-light-3)",
                    fontSize: "14px", outline: "none", color: "var(--color-text-dark)",
                    fontFamily: "var(--font-inter)", transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-light-3)")}
                />
                <textarea
                  rows="4"
                  placeholder="I'm interested in this property..."
                  style={{
                    padding: "12px 16px", borderRadius: "14px",
                    background: "var(--color-light-2)", border: "1px solid var(--color-light-3)",
                    fontSize: "14px", outline: "none", color: "var(--color-text-dark)",
                    fontFamily: "var(--font-inter)", resize: "vertical",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-light-3)")}
                />
                <button
                  type="submit"
                  style={{
                    padding: "14px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
                    fontFamily: "var(--font-inter)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 8px 25px rgba(99,102,241,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(99,102,241,0.3)";
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .container > div > div:last-child {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PropertyDetails;
