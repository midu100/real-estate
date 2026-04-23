import React from "react";
import { FiShield, FiTrendingUp, FiUsers, FiAward } from "react-icons/fi";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FiShield />,
      title: "Trusted & Verified",
      desc: "Every property is thoroughly verified and inspected by our expert team before listing.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Best Market Value",
      desc: "Our data-driven approach ensures you get the best market value for every transaction.",
    },
    {
      icon: <FiUsers />,
      title: "Expert Agents",
      desc: "Work with industry-leading agents who have decades of combined experience.",
    },
    {
      icon: <FiAward />,
      title: "Award Winning",
      desc: "Recognized as the top real estate platform for 5 consecutive years.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 0",
        background: "var(--color-light)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* Left Text */}
          <div className="reveal-left" style={{ flex: "1 1 360px" }}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "var(--color-primary)",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              Why Us
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: "700",
                color: "var(--color-text-dark)",
                marginTop: "12px",
                marginBottom: "16px",
                lineHeight: "1.2",
              }}
            >
              Why Choose <span className="gradient-text">LuxeEstates</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--color-text-body)",
                lineHeight: "1.8",
                maxWidth: "460px",
              }}
            >
              We combine cutting-edge technology with personalized service to
              deliver an unmatched real estate experience. Our commitment to
              excellence sets us apart.
            </p>
          </div>

          {/* Right Cards */}
          <div
            style={{
              flex: "1 1 360px",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {reasons.map((r, i) => (
              <div
                key={i}
                className="reveal-right"
                style={{
                  flex: "1 1 230px",
                  padding: "28px",
                  borderRadius: "20px",
                  background: "#ffffff",
                  border: "1px solid var(--color-light-3)",
                  transition: "all 0.4s ease",
                  cursor: "default",
                  animationDelay: `${i * 0.12}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(99,102,241,0.12)";
                  e.currentTarget.style.borderColor = "#6366f1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--color-light-3)";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    color: "var(--color-primary)",
                    marginBottom: "16px",
                  }}
                >
                  {r.icon}
                </div>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "var(--color-text-dark)",
                    marginBottom: "8px",
                  }}
                >
                  {r.title}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-body)",
                    lineHeight: "1.7",
                  }}
                >
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
