import React from "react";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { properties } from "../../data/data";

const FeaturedProperties = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 4);

  return (
    <section style={{ padding: "120px 0", background: "#ffffff" }}>
      <div className="container">
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "700", color: "#1a1a1a", lineHeight: "1.2" }}>
              Featured<br/>Projects
            </h2>
          </div>
          <Link to="/properties" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#1a1a1a", fontWeight: "500", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: "4px", transition: "all 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "#1a1a1a"}>
            View All <FiArrowRight />
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          {featured.map((property, i) => (
            <Link to={`/property/${property.id}`} key={property.id} className="reveal" style={{ textDecoration: "none", color: "inherit", display: "block", animationDelay: `${i * 0.15}s` }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "120%", overflow: "hidden", marginBottom: "24px" }}>
                <img src={property.image} alt={property.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"} />
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "24px", fontWeight: "600", color: "#1a1a1a", marginBottom: "8px" }}>
                {property.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666666", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                {property.location}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--color-primary)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
                Explore <FiArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
