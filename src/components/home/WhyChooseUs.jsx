import React from "react";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const WhyChooseUs = () => {
  return (
    <section style={{ padding: "120px 0", background: "#ffffff" }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
          <div className="reveal-left" style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "700", color: "#1a1a1a", marginBottom: "32px", lineHeight: "1.2" }}>
              Redefining your<br/>standard of living
            </h2>
            <p style={{ fontSize: "16px", color: "#666666", lineHeight: "1.8", marginBottom: "24px" }}>
              LuxeEstates was founded with the aim to enhance aspects of life for people by providing premium real estate, reliable properties, and a wide range of services. We merge value and innovation in the evolving real estate sector.
            </p>
            <p style={{ fontSize: "16px", color: "#666666", lineHeight: "1.8", marginBottom: "40px" }}>
              Through considerable focus on design, structural dimension, and feasibility in the sense of space and resource conservation; we deliver you optimum support in residential and commercial accommodation.
            </p>
            <Link to="/about" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: "4px", textTransform: "uppercase", letterSpacing: "1px", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-primary)"; e.currentTarget.style.borderColor = "var(--color-primary)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "#1a1a1a"; e.currentTarget.style.borderColor = "#1a1a1a"; }}>
              Learn More <FiArrowRight />
            </Link>
          </div>
          <div className="reveal-right" style={{ flex: "1 1 500px", position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80" alt="Living Standard" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "180px", height: "180px", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", padding: "30px", color: "#fff", textAlign: "center" }}>
              <div>
                <div style={{ fontSize: "42px", fontFamily: "var(--font-playfair)", fontWeight: "700", marginBottom: "8px" }}>15+</div>
                <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "500" }}>Years of<br/>Trust</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
