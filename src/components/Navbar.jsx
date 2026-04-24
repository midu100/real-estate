import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/properties" },
    { label: "Blog", path: "/blog" },
    { 
      label: "Gallery", 
      path: "#",
      dropdown: [
        { label: "Newsletter", path: "/newsletter" },
        { label: "Image Gallery", path: "/image-gallery" },
        { label: "Video Gallery", path: "/video-gallery" }
      ]
    },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "/contact" },
    { label: "Landowner", path: "/landowner" },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "16px 5%",
          background: scrolled ? "rgba(26, 26, 26, 0.98)" : "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s ease",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", color: "#ffffff", display: "flex", flexDirection: "column", lineHeight: "1" }}>
          <span style={{ fontSize: "28px", fontWeight: "800", fontFamily: "var(--font-montserrat)", letterSpacing: "1px" }}>Brickon LTD</span>
          <span style={{ fontSize: "11px", fontWeight: "400", letterSpacing: "2.5px" }}>REAL ESTATE</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {navItems.map((item, i) => (
            <div 
              key={i} 
              style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  opacity: (isActive && item.path !== "#") || activeDropdown === i ? 1 : 0.8,
                  transition: "opacity 0.3s ease",
                  letterSpacing: "0.5px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                })}
              >
                {item.label}
                {item.dropdown && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: "transform 0.3s ease", transform: activeDropdown === i ? "rotate(180deg)" : "rotate(0)" }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </NavLink>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: "20px",
                  opacity: activeDropdown === i ? 1 : 0,
                  visibility: activeDropdown === i ? "visible" : "hidden",
                  transform: activeDropdown === i ? "translateY(0)" : "translateY(10px)",
                  transition: "all 0.3s ease",
                  zIndex: 100
                }}>
                  <div style={{
                    background: "#ffffff",
                    borderRadius: "4px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    minWidth: "180px",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    {item.dropdown.map((sub, j) => (
                      <Link 
                        key={j} 
                        to={sub.path} 
                        style={{ 
                          padding: "12px 20px", 
                          color: "#333333", 
                          textDecoration: "none", 
                          fontSize: "13px", 
                          fontWeight: "500",
                          borderBottom: j < item.dropdown.length - 1 ? "1px solid #eeeeee" : "none",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "#f8f9fa";
                          e.target.style.color = "var(--color-primary)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "#ffffff";
                          e.target.style.color = "#333333";
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Contact Box */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div className="hotline-box" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 20px", border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff", fontSize: "14px", fontWeight: "700", letterSpacing: "1px" }}>
            <FiPhone size={18} /> 16760
          </div>
          
          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: "none", border: "none", color: "#ffffff", fontSize: "28px", cursor: "pointer", display: "none" }}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "#1a1a1a", zIndex: 999, display: "flex", flexDirection: "column", paddingTop: "100px", paddingLeft: "5%", paddingRight: "5%" }}>
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: "none", color: "#ffffff", fontSize: "24px", fontWeight: "600", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 480px) {
          .hotline-box { padding: 6px 12px !important; font-size: 12px !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;