import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { agents } from "../data/data";
import useScrollReveal from "../hooks/useScrollReveal";

const Agents = () => {
  useScrollReveal();

  return (
    <section style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh", background: "var(--color-light)" }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{
            fontSize: "14px", fontWeight: "600", color: "var(--color-primary)",
            textTransform: "uppercase", letterSpacing: "3px",
          }}>
            Our Team
          </span>
          <h1 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: "700", color: "var(--color-text-dark)", marginTop: "12px", marginBottom: "16px",
          }}>
            Meet Our <span className="gradient-text">Expert Agents</span>
          </h1>
          <p style={{
            fontSize: "16px", color: "var(--color-text-body)", maxWidth: "520px", margin: "0 auto",
          }}>
            Our dedicated team of professionals is here to help you find the perfect property
          </p>
        </div>

        {/* Agents Grid */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", justifyContent: "center" }}>
          {agents.map((agent, i) => (
            <div
              key={agent.id}
              className="reveal"
              style={{
                flex: "1 1 300px", maxWidth: "380px",
                borderRadius: "24px", overflow: "hidden",
                background: "#ffffff", border: "1px solid var(--color-light-3)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(99,102,241,0.12)";
                const socials = e.currentTarget.querySelector(".agent-socials");
                if (socials) socials.style.opacity = "1";
                if (socials) socials.style.transform = "translateY(0)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                const socials = e.currentTarget.querySelector(".agent-socials");
                if (socials) socials.style.opacity = "0";
                if (socials) socials.style.transform = "translateY(10px)";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                <img
                  src={agent.image}
                  alt={agent.name}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                {/* Overlay Social Icons - Revealed on hover */}
                <div
                  className="agent-socials"
                  style={{
                    position: "absolute", bottom: "16px", left: "50%",
                    transform: "translateX(-50%) translateY(10px)",
                    display: "flex", gap: "10px",
                    opacity: 0, transition: "all 0.4s ease",
                  }}
                >
                  {[
                    { icon: <FaFacebookF />, link: agent.social.facebook },
                    { icon: <FaTwitter />, link: agent.social.twitter },
                    { icon: <FaLinkedinIn />, link: agent.social.linkedin },
                    { icon: <FaInstagram />, link: agent.social.instagram },
                  ].map((s, idx) => (
                    <a
                      key={idx}
                      href={s.link}
                      style={{
                        width: "40px", height: "40px", borderRadius: "12px",
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(10px)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--color-primary)", fontSize: "15px",
                        textDecoration: "none", transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, #6366f1, #8b5cf6)";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.9)";
                        e.currentTarget.style.color = "var(--color-primary)";
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "4px" }}>
                  {agent.name}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: "500", marginBottom: "12px" }}>
                  {agent.title}
                </p>
                <p style={{ fontSize: "14px", color: "var(--color-text-body)", lineHeight: "1.7", marginBottom: "16px" }}>
                  {agent.bio.substring(0, 120)}...
                </p>

                {/* Stats */}
                <div style={{
                  display: "flex", gap: "20px", paddingTop: "16px",
                  borderTop: "1px solid var(--color-light-3)", marginBottom: "16px",
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "18px", fontWeight: "700", color: "var(--color-text-dark)" }}>
                      {agent.properties}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-light)" }}>Properties</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "18px", fontWeight: "700", color: "var(--color-text-dark)" }}>
                      {agent.experience}+
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-light)" }}>Years Exp</div>
                  </div>
                </div>

                {/* Contact */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <a href={`tel:${agent.phone}`} style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                    padding: "10px", borderRadius: "12px",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#ffffff", fontSize: "13px", fontWeight: "600",
                    textDecoration: "none", transition: "all 0.3s ease",
                  }}>
                    <FiPhone /> Call
                  </a>
                  <a href={`mailto:${agent.email}`} style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                    padding: "10px", borderRadius: "12px",
                    background: "var(--color-light-2)", border: "1px solid var(--color-light-3)",
                    color: "var(--color-text-dark)", fontSize: "13px", fontWeight: "600",
                    textDecoration: "none", transition: "all 0.3s ease",
                  }}>
                    <FiMail /> Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
