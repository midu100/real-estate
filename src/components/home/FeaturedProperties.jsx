import React from "react";
import { Link } from "react-router";
import { FiMapPin, FiMaximize, FiHeart, FiArrowRight } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { properties } from "../../data/data";

const FeaturedProperties = () => {
  const featured = properties.filter((p) => p.featured);

  return (
    <section
      style={{
        padding: "100px 0",
        background: "var(--color-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--color-primary)",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Our Selection
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
            Featured Properties
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-text-body)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Handpicked luxury properties for the most discerning buyers
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "28px",
            justifyContent: "center",
          }}
        >
          {featured.map((property, i) => (
            <Link
              to={`/property/${property.id}`}
              key={property.id}
              className="reveal"
              style={{
                textDecoration: "none",
                flex: "1 1 280px",
                maxWidth: "340px",
                borderRadius: "20px",
                overflow: "hidden",
                background: "#ffffff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                animationDelay: `${i * 0.15}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(99,102,241,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.06)";
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: "220px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "scale(1)")
                  }
                />
                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {property.type}
                </div>
                {/* Wishlist */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FiHeart />
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--color-text-light)",
                    fontSize: "13px",
                    marginBottom: "8px",
                  }}
                >
                  <FiMapPin style={{ color: "var(--color-primary)" }} />
                  {property.location}
                </div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "var(--color-text-dark)",
                    marginBottom: "12px",
                    lineHeight: "1.4",
                  }}
                >
                  {property.title}
                </h3>

                {/* Features */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    paddingTop: "12px",
                    borderTop: "1px solid var(--color-light-3)",
                    marginBottom: "16px",
                  }}
                >
                  {property.bedrooms > 0 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                        color: "var(--color-text-body)",
                      }}
                    >
                      <IoBedOutline style={{ color: "var(--color-primary)" }} />
                      {property.bedrooms} Beds
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                        color: "var(--color-text-body)",
                      }}
                    >
                      <LuBath style={{ color: "var(--color-primary)" }} />
                      {property.bathrooms} Baths
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      color: "var(--color-text-body)",
                    }}
                  >
                    <FiMaximize style={{ color: "var(--color-primary)" }} />
                    {property.area.toLocaleString()} sqft
                  </div>
                </div>

                {/* Price */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      background:
                        "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ${property.price.toLocaleString()}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "var(--color-primary)",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Details <FiArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "48px",
          }}
        >
          <Link
            to="/properties"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 36px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(99,102,241,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(99,102,241,0.3)";
            }}
          >
            View All Properties <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
