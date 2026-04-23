import React, { useState } from "react";
import { Link } from "react-router";
import { FiMapPin, FiMaximize, FiHeart, FiTrash2, FiArrowRight } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { properties } from "../data/data";
import useScrollReveal from "../hooks/useScrollReveal";

const Wishlist = () => {
  useScrollReveal();
  const [saved, setSaved] = useState(properties.slice(0, 4));

  const removeItem = (id) => {
    setSaved(saved.filter((p) => p.id !== id));
  };

  return (
    <section style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh", background: "var(--color-light)" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: "48px" }}>
          <h1 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: "700", color: "var(--color-text-dark)", marginBottom: "8px",
          }}>
            My <span className="gradient-text">Wishlist</span>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--color-text-body)" }}>
            {saved.length} saved {saved.length === 1 ? "property" : "properties"}
          </p>
        </div>

        {saved.length === 0 ? (
          <div className="reveal" style={{
            textAlign: "center", padding: "80px 20px", borderRadius: "24px",
            background: "#ffffff", border: "1px solid var(--color-light-3)",
          }}>
            <div style={{ fontSize: "56px", marginBottom: "16px" }}>💔</div>
            <h3 style={{ fontSize: "22px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "12px" }}>
              Your wishlist is empty
            </h3>
            <p style={{ fontSize: "15px", color: "var(--color-text-body)", marginBottom: "28px" }}>
              Start browsing and save properties you love
            </p>
            <Link to="/properties" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "14px 32px", borderRadius: "9999px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#ffffff", fontSize: "15px", fontWeight: "600", textDecoration: "none",
            }}>
              Browse Properties <FiArrowRight />
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            {saved.map((property, i) => (
              <div
                key={property.id}
                className="reveal"
                style={{
                  flex: "1 1 280px", maxWidth: "calc(33.333% - 16px)",
                  borderRadius: "20px", overflow: "hidden", background: "#ffffff",
                  border: "1px solid var(--color-light-3)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(99,102,241,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <img src={property.image} alt={property.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  />
                  <div style={{
                    position: "absolute", top: "14px", left: "14px", padding: "5px 14px",
                    borderRadius: "9999px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff", fontSize: "12px", fontWeight: "600",
                  }}>
                    {property.type}
                  </div>
                  {/* Remove Button */}
                  <button onClick={() => removeItem(property.id)} style={{
                    position: "absolute", top: "14px", right: "14px",
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: "rgba(239,68,68,0.9)", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#ffffff", fontSize: "15px", cursor: "pointer", transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <FiTrash2 />
                  </button>
                </div>

                <div style={{ padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-text-light)", fontSize: "13px", marginBottom: "6px" }}>
                    <FiMapPin style={{ color: "var(--color-primary)" }} /> {property.location}
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "12px" }}>
                    {property.title}
                  </h3>
                  <div style={{ display: "flex", gap: "14px", paddingTop: "12px", borderTop: "1px solid var(--color-light-3)", marginBottom: "14px" }}>
                    {property.bedrooms > 0 && (
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "var(--color-text-body)" }}>
                        <IoBedOutline style={{ color: "var(--color-primary)" }} /> {property.bedrooms}
                      </div>
                    )}
                    {property.bathrooms > 0 && (
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "var(--color-text-body)" }}>
                        <LuBath style={{ color: "var(--color-primary)" }} /> {property.bathrooms}
                      </div>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "var(--color-text-body)" }}>
                      <FiMaximize style={{ color: "var(--color-primary)" }} /> {property.area.toLocaleString()}
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      fontSize: "18px", fontWeight: "700",
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    }}>
                      ${property.price.toLocaleString()}
                    </span>
                    <Link to={`/property/${property.id}`} style={{
                      fontSize: "13px", color: "var(--color-primary)", fontWeight: "500",
                      display: "flex", alignItems: "center", gap: "4px", textDecoration: "none",
                    }}>
                      View <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
