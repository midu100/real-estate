import React from "react";
import { FiHome, FiBriefcase, FiMap } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";

const Categories = () => {
  const cats = [
    {
      name: "Apartment",
      icon: <BsBuildings />,
      count: 120,
      color: "#6366f1",
    },
    {
      name: "Villa",
      icon: <FiHome />,
      count: 85,
      color: "#8b5cf6",
    },
    {
      name: "Commercial",
      icon: <FiBriefcase />,
      count: 45,
      color: "#a78bfa",
    },
    {
      name: "Land",
      icon: <FiMap />,
      count: 30,
      color: "#c4b5fd",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 0",
        background: "var(--color-light-2)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--color-primary)",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Browse By
          </span>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "700",
              color: "var(--color-text-dark)",
              marginTop: "12px",
            }}
          >
            Property Categories
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {cats.map((cat, i) => (
            <div
              key={cat.name}
              className="reveal"
              style={{
                flex: "1 1 220px",
                maxWidth: "280px",
                padding: "40px 28px",
                borderRadius: "24px",
                background: "#ffffff",
                border: "1px solid var(--color-light-3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) rotate(2deg)";
                e.currentTarget.style.boxShadow = `0 20px 50px ${cat.color}25`;
                e.currentTarget.style.borderColor = cat.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--color-light-3)";
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "20px",
                  background: `${cat.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  color: cat.color,
                  marginBottom: "20px",
                  transition: "all 0.3s ease",
                }}
              >
                {cat.icon}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "var(--color-text-dark)",
                  marginBottom: "8px",
                }}
              >
                {cat.name}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--color-text-light)",
                }}
              >
                {cat.count} Properties
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
