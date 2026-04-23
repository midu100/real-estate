import React, { useState } from "react";
import { Link } from "react-router";
import { properties } from "../../data/data";
import { FiArrowRight } from "react-icons/fi";

const Categories = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const tabs = ["Ongoing", "Upcoming", "Handed Over", "Ready"];
  
  // Mock logic to filter based on tabs
  const getFiltered = () => {
    if (activeTab === "Ongoing") return properties.slice(0, 3);
    if (activeTab === "Upcoming") return properties.slice(3, 6);
    if (activeTab === "Handed Over") return properties.slice(1, 4);
    if (activeTab === "Ready") return properties.slice(2, 5);
    return properties.slice(0, 3);
  };

  const filteredProps = getFiltered();

  return (
    <section style={{ padding: "120px 0", background: "#f8f9fa" }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "700", color: "#1a1a1a" }}>
            Explore Projects
          </h2>
        </div>

        <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "32px", marginBottom: "60px", flexWrap: "wrap" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                fontSize: "15px",
                fontWeight: activeTab === tab ? "600" : "400",
                color: activeTab === tab ? "var(--color-primary)" : "#666666",
                cursor: "pointer",
                paddingBottom: "8px",
                borderBottom: activeTab === tab ? "2px solid var(--color-primary)" : "2px solid transparent",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
          {filteredProps.map((property, i) => (
            <Link to={`/property/${property.id}`} key={property.id} className="reveal" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "75%", overflow: "hidden", marginBottom: "20px" }}>
                <img src={property.image} alt={property.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"} />
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "22px", fontWeight: "600", color: "#1a1a1a", marginBottom: "6px" }}>
                {property.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px" }}>
                {property.location}
              </p>
            </Link>
          ))}
        </div>
        
        <div className="reveal" style={{ textAlign: "center", marginTop: "60px" }}>
           <Link to="/properties" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: "4px", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "#1a1a1a"}>
              View All Projects <FiArrowRight />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
