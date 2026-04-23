import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import { FiMapPin, FiMaximize, FiHeart, FiSearch, FiSliders, FiX, FiArrowRight } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { properties } from "../data/data";
import useScrollReveal from "../hooks/useScrollReveal";

const PropertyListing = () => {
  useScrollReveal();

  const [filterOpen, setFilterOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [priceRange, setPriceRange] = useState(10000000);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());
      const matchType = !type || p.type === type;
      const matchBed = !bedrooms || p.bedrooms >= parseInt(bedrooms);
      const matchPrice = p.price <= priceRange;
      return matchSearch && matchType && matchBed && matchPrice;
    });
  }, [search, type, bedrooms, priceRange]);

  return (
    <section style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh", background: "var(--color-light)" }}>
      <div className="container">
        {/* Page Header */}
        <div className="reveal" style={{ marginBottom: "40px" }}>
          <h1 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: "700",
            color: "var(--color-text-dark)",
            marginBottom: "8px",
          }}>
            Browse <span className="gradient-text">Properties</span>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--color-text-body)" }}>
            Discover {filtered.length} properties matching your criteria
          </p>
        </div>

        <div style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
          {/* Filter Panel */}
          <div
            style={{
              width: filterOpen ? "280px" : "0px",
              minWidth: filterOpen ? "280px" : "0px",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "sticky",
              top: "100px",
            }}
          >
            <div
              style={{
                padding: "28px",
                borderRadius: "24px",
                background: "#ffffff",
                border: "1px solid var(--color-light-3)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "var(--color-text-dark)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <FiSliders style={{ color: "var(--color-primary)" }} /> Filters
                </h3>
                <button
                  onClick={() => setFilterOpen(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-light)", fontSize: "18px" }}
                >
                  <FiX />
                </button>
              </div>

              {/* Search */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", display: "block", marginBottom: "8px" }}>
                  Location
                </label>
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px", padding: "12px 14px",
                  borderRadius: "14px", background: "var(--color-light-2)", border: "1px solid var(--color-light-3)",
                  transition: "all 0.3s ease",
                }}>
                  <FiSearch style={{ color: "var(--color-text-light)", fontSize: "16px" }} />
                  <input
                    type="text"
                    placeholder="Search location..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      background: "transparent", border: "none", outline: "none",
                      fontSize: "14px", color: "var(--color-text-dark)", width: "100%",
                      fontFamily: "var(--font-inter)",
                    }}
                  />
                </div>
              </div>

              {/* Price Range */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", display: "block", marginBottom: "8px" }}>
                  Max Price: <span className="gradient-text">${priceRange.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  style={{
                    width: "100%", height: "6px", borderRadius: "3px",
                    appearance: "none", background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                    outline: "none", cursor: "pointer",
                  }}
                />
              </div>

              {/* Property Type */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", display: "block", marginBottom: "8px" }}>
                  Property Type
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["", "Apartment", "Villa", "Commercial", "Land"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      style={{
                        padding: "10px 16px",
                        borderRadius: "12px",
                        border: "1px solid",
                        borderColor: type === t ? "var(--color-primary)" : "var(--color-light-3)",
                        background: type === t ? "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))" : "transparent",
                        color: type === t ? "var(--color-primary)" : "var(--color-text-body)",
                        fontSize: "14px",
                        fontWeight: "500",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.3s ease",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {t || "All Types"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedrooms */}
              <div>
                <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", display: "block", marginBottom: "8px" }}>
                  Bedrooms
                </label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["", "1", "2", "3", "4", "5"].map((b) => (
                    <button
                      key={b}
                      onClick={() => setBedrooms(b)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "10px",
                        border: "1px solid",
                        borderColor: bedrooms === b ? "var(--color-primary)" : "var(--color-light-3)",
                        background: bedrooms === b ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "transparent",
                        color: bedrooms === b ? "#ffffff" : "var(--color-text-body)",
                        fontSize: "13px",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {b || "Any"}
                      {b && "+"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div style={{ flex: 1 }}>
            {/* Toggle Filter Button */}
            {!filterOpen && (
              <button
                onClick={() => setFilterOpen(true)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "10px 20px", borderRadius: "14px", marginBottom: "20px",
                  background: "#ffffff", border: "1px solid var(--color-light-3)",
                  fontSize: "14px", fontWeight: "500", color: "var(--color-text-dark)",
                  cursor: "pointer", transition: "all 0.3s ease",
                  fontFamily: "var(--font-inter)",
                }}
              >
                <FiSliders style={{ color: "var(--color-primary)" }} /> Show Filters
              </button>
            )}

            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              {filtered.map((property, i) => (
                <Link
                  to={`/property/${property.id}`}
                  key={property.id}
                  className="reveal"
                  style={{ textDecoration: "none", color: "inherit", display: "block", flex: "1 1 280px", maxWidth: filterOpen ? "calc(50% - 12px)" : "calc(33.333% - 16px)" }}
                >
                  <div style={{ position: "relative", width: "100%", paddingBottom: "75%", overflow: "hidden", marginBottom: "20px" }}>
                    <img src={property.image} alt={property.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-montserrat)", fontSize: "22px", fontWeight: "600", color: "#1a1a1a", marginBottom: "6px" }}>
                    {property.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {property.location}
                  </p>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "80px 20px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "8px" }}>
                  No properties found
                </h3>
                <p style={{ color: "var(--color-text-body)" }}>Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container > div > div:first-child {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            z-index: 999 !important;
            background: rgba(0,0,0,0.5) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PropertyListing;
