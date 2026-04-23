import React from "react";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const CTASection = () => {
  return (
    <section
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Gradient Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #4f46e5, #6366f1, #8b5cf6, #7c3aed, #6366f1)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 6s ease infinite",
        }}
      />

      {/* Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="reveal">
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "rgba(255,255,255,0.7)",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Get Started
          </span>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: "700",
              color: "#ffffff",
              marginTop: "16px",
              marginBottom: "20px",
              lineHeight: "1.2",
              maxWidth: "600px",
            }}
          >
            Ready to List Your Property?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "500px",
              margin: "0 auto 40px",
              lineHeight: "1.7",
            }}
          >
            Join thousands of property owners who trust LuxeEstates to showcase
            their premium listings.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                borderRadius: "9999px",
                background: "#ffffff",
                color: "#4f46e5",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 40px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.15)";
              }}
            >
              List Your Property <FiArrowRight />
            </Link>
            <Link
              to="/properties"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                borderRadius: "9999px",
                background: "transparent",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
