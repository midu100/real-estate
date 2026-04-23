import React from "react";
import { Link } from "react-router";
import { FiHome, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Properties", path: "/properties" },
    { label: "Agents", path: "/agents" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const propertyTypes = [
    { label: "Apartments", path: "/properties" },
    { label: "Villas", path: "/properties" },
    { label: "Commercial", path: "/properties" },
    { label: "Land", path: "/properties" },
    { label: "New Projects", path: "/properties" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
        color: "rgba(248, 250, 252, 0.7)",
        paddingTop: "80px",
        paddingBottom: "0",
      }}
    >
      <div className="container">
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand */}
          <div style={{ flex: "1 1 280px", minWidth: "260px" }}>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                <FiHome />
              </div>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  fontFamily: "var(--font-playfair)",
                  color: "#f8fafc",
                }}
              >
                Luxe<span style={{ color: "#818cf8" }}>Estates</span>
              </span>
            </Link>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.8",
                color: "rgba(248, 250, 252, 0.5)",
                maxWidth: "320px",
                marginBottom: "24px",
              }}
            >
              Discover exceptional properties with LuxeEstates. We connect
              discerning buyers with premium real estate, delivering
              unparalleled service and expertise.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(248,250,252,0.5)",
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #6366f1, #8b5cf6)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "rgba(248,250,252,0.5)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1 1 160px", minWidth: "150px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#f8fafc",
                marginBottom: "24px",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  style={{
                    textDecoration: "none",
                    color: "rgba(248,250,252,0.5)",
                    fontSize: "14px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#818cf8";
                    e.target.style.paddingLeft = "6px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(248,250,252,0.5)";
                    e.target.style.paddingLeft = "0";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Property Types */}
          <div style={{ flex: "1 1 160px", minWidth: "150px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#f8fafc",
                marginBottom: "24px",
              }}
            >
              Property Types
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {propertyTypes.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  style={{
                    textDecoration: "none",
                    color: "rgba(248,250,252,0.5)",
                    fontSize: "14px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#818cf8";
                    e.target.style.paddingLeft = "6px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(248,250,252,0.5)";
                    e.target.style.paddingLeft = "0";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ flex: "1 1 240px", minWidth: "220px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#f8fafc",
                marginBottom: "24px",
              }}
            >
              Contact Info
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                {
                  icon: <FiMapPin />,
                  text: "123 Luxury Avenue, Manhattan, NY 10001",
                },
                { icon: <FiPhone />, text: "+1 (555) 123-4567" },
                { icon: <FiMail />, text: "info@luxeestates.com" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      color: "#818cf8",
                      fontSize: "16px",
                      marginTop: "2px",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(248,250,252,0.5)",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 0",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(248,250,252,0.3)",
            }}
          >
            © 2026 LuxeEstates. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Cookies"].map((t) => (
              <a
                key={t}
                href="#"
                style={{
                  fontSize: "13px",
                  color: "rgba(248,250,252,0.3)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#818cf8")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(248,250,252,0.3)")
                }
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
