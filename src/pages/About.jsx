import React from "react";
import { FiAward, FiUsers, FiHome, FiTrendingUp } from "react-icons/fi";
import { agents } from "../data/data";
import useScrollReveal from "../hooks/useScrollReveal";
import useCountUp from "../hooks/useCountUp";

const StatCard = ({ end, label, suffix = "" }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} style={{ textAlign: "center", flex: "1 1 140px" }}>
      <div style={{
        fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "800",
        fontFamily: "var(--font-playfair)",
        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "14px", color: "var(--color-text-body)", marginTop: "6px", fontWeight: "500" }}>
        {label}
      </div>
    </div>
  );
};

const About = () => {
  useScrollReveal();

  return (
    <section style={{ paddingTop: "120px", paddingBottom: "80px", background: "var(--color-light)" }}>
      <div className="container">
        {/* Hero / Story Section */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center", marginBottom: "100px" }}>
          {/* Left Image */}
          <div className="reveal-left" style={{ flex: "1 1 400px", position: "relative" }}>
            <div style={{
              borderRadius: "24px", overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="About LuxeEstates"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Floating Card */}
            <div style={{
              position: "absolute", bottom: "-30px", right: "-20px",
              padding: "24px 32px", borderRadius: "20px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#ffffff", boxShadow: "0 12px 40px rgba(99,102,241,0.4)",
            }}>
              <div style={{ fontSize: "36px", fontWeight: "800", fontFamily: "var(--font-playfair)" }}>15+</div>
              <div style={{ fontSize: "14px", opacity: 0.9 }}>Years of Excellence</div>
            </div>
          </div>

          {/* Right Text */}
          <div className="reveal-right" style={{ flex: "1 1 400px" }}>
            <span style={{
              fontSize: "14px", fontWeight: "600", color: "var(--color-primary)",
              textTransform: "uppercase", letterSpacing: "3px",
            }}>
              Our Story
            </span>
            <h1 style={{
              fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "700", color: "var(--color-text-dark)",
              marginTop: "12px", marginBottom: "20px", lineHeight: "1.2",
            }}>
              Redefining <span className="gradient-text">Luxury</span> Real Estate
            </h1>
            <p style={{
              fontSize: "16px", color: "var(--color-text-body)", lineHeight: "1.9", marginBottom: "20px",
            }}>
              Founded in 2010, Brickon Ltd has been at the forefront of luxury real estate,
              connecting discerning buyers with exceptional properties. Our passion for
              excellence and deep market knowledge have established us as the premier
              destination for premium real estate.
            </p>
            <p style={{
              fontSize: "16px", color: "var(--color-text-body)", lineHeight: "1.9", marginBottom: "32px",
            }}>
              We believe every property tells a story, and every client deserves a
              personalized experience. Our team of expert agents combines industry
              expertise with cutting-edge technology to deliver unparalleled service.
            </p>

            {/* Small highlights */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {[
                { icon: <FiAward />, text: "Award Winning" },
                { icon: <FiUsers />, text: "Client Focused" },
                { icon: <FiHome />, text: "Premium Listings" },
                { icon: <FiTrendingUp />, text: "Market Leaders" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "10px 18px", borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))",
                  fontSize: "14px", fontWeight: "500", color: "var(--color-text-dark)",
                }}>
                  <span style={{ color: "var(--color-primary)" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="reveal" style={{
          padding: "60px 40px", borderRadius: "24px",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          display: "flex", flexWrap: "wrap", gap: "32px",
          justifyContent: "center", marginBottom: "100px",
        }}>
          <StatCard end={200} label="Properties Sold" suffix="+" />
          <StatCard end={1500} label="Happy Clients" suffix="+" />
          <StatCard end={50} label="Expert Agents" suffix="+" />
          <StatCard end={15} label="Years Experience" suffix="+" />
        </div>

        {/* Team Highlight */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{
            fontSize: "14px", fontWeight: "600", color: "var(--color-primary)",
            textTransform: "uppercase", letterSpacing: "3px",
          }}>
            Our Team
          </span>
          <h2 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: "700", color: "var(--color-text-dark)", marginTop: "12px",
          }}>
            Leadership Team
          </h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
          {agents.slice(0, 4).map((agent, i) => (
            <div
              key={agent.id}
              className="reveal"
              style={{
                flex: "1 1 240px", maxWidth: "280px", textAlign: "center",
                padding: "32px 24px", borderRadius: "24px",
                background: "#ffffff", border: "1px solid var(--color-light-3)",
                transition: "all 0.4s ease", animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 50px rgba(99,102,241,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={agent.image}
                alt={agent.name}
                style={{
                  width: "90px", height: "90px", borderRadius: "50%",
                  objectFit: "cover", marginBottom: "16px",
                  border: "3px solid var(--color-light-3)",
                }}
              />
              <h4 style={{ fontSize: "17px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "4px" }}>
                {agent.name}
              </h4>
              <p style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: "500" }}>
                {agent.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;