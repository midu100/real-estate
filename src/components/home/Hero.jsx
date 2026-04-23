import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { FiSearch, FiMapPin, FiHome, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Slow Zoom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury Property"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            animation: "slowZoom 20s ease-in-out infinite alternate",
          }}
        />
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.5) 50%, rgba(15,23,42,0.8) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.2s",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.9)",
            fontSize: "13px",
            fontWeight: "500",
            marginBottom: "32px",
          }}
        >
          <FiHome style={{ color: "#818cf8" }} />
          <span>#1 Premium Real Estate Platform</span>
        </div>

        {/* Headline */}
        <h1
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.4s",
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: "700",
            color: "#ffffff",
            lineHeight: "1.1",
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Find Your{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #818cf8, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dream
          </span>{" "}
          Property
        </h1>

        {/* Subtext */}
        <p
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.6s",
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "600px",
            lineHeight: "1.7",
            marginBottom: "48px",
            fontWeight: "300",
          }}
        >
          Discover an exceptional collection of luxury properties. Your perfect
          home awaits with LuxeEstates.
        </p>

        {/* Search Bar */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1)" : "scale(0.9)",
            transition: "all 0.8s ease 0.8s",
            width: "100%",
            maxWidth: "720px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "8px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          {/* Location Input */}
          <div
            style={{
              flex: "1 1 200px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "14px",
            }}
          >
            <FiMapPin style={{ color: "#818cf8", fontSize: "18px" }} />
            <input
              type="text"
              placeholder="Search by location..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#ffffff",
                fontSize: "15px",
                width: "100%",
                fontFamily: "var(--font-inter)",
              }}
            />
          </div>

          {/* Property Type */}
          <div
            style={{
              flex: "1 1 160px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "14px",
            }}
          >
            <FiHome style={{ color: "#818cf8", fontSize: "18px" }} />
            <select
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "rgba(255,255,255,0.6)",
                fontSize: "15px",
                width: "100%",
                fontFamily: "var(--font-inter)",
                cursor: "pointer",
              }}
            >
              <option value="" style={{ background: "#1e293b" }}>
                Property Type
              </option>
              <option value="apartment" style={{ background: "#1e293b" }}>
                Apartment
              </option>
              <option value="villa" style={{ background: "#1e293b" }}>
                Villa
              </option>
              <option value="commercial" style={{ background: "#1e293b" }}>
                Commercial
              </option>
              <option value="land" style={{ background: "#1e293b" }}>
                Land
              </option>
            </select>
          </div>

          {/* Search Button */}
          <Link
            to="/properties"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(99,102,241,0.6)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(99,102,241,0.4)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <FiSearch />
            <span>Search</span>
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 1s",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          {[
            { value: "200+", label: "Premium Properties" },
            { value: "50+", label: "Expert Agents" },
            { value: "1000+", label: "Happy Clients" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#ffffff",
                  fontFamily: "var(--font-playfair)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background:
            "linear-gradient(to top, var(--color-light), transparent)",
          zIndex: 1,
        }}
      />
    </section>
  );
};

export default Hero;
