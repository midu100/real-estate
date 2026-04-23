import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiHome } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Buy", path: "/properties" },
    { label: "Rent", path: "/properties" },
    { label: "Agents", path: "/agents" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: scrolled ? "0" : "16px",
        left: "50%",
        transform: "translateX(-50%)",
        width: scrolled ? "100%" : "calc(100% - 48px)",
        maxWidth: scrolled ? "100%" : "1320px",
        zIndex: 1000,
        padding: scrolled ? "12px 32px" : "14px 32px",
        borderRadius: scrolled ? "0" : "9999px",
        background: scrolled
          ? "rgba(15, 23, 42, 0.95)"
          : "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: scrolled
          ? "none"
          : "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.3)"
          : "0 8px 32px rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "18px",
          }}
        >
          <FiHome />
        </div>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "700",
            fontFamily: "var(--font-playfair)",
            color: scrolled ? "#f8fafc" : "#ffffff",
            letterSpacing: "-0.5px",
          }}
        >
          Luxe<span style={{ color: "#818cf8" }}>Estates</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        className="nav-links-desktop"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            style={({ isActive }) => ({
              textDecoration: "none",
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "500",
              color: isActive
                ? "#ffffff"
                : scrolled
                ? "rgba(248, 250, 252, 0.7)"
                : "rgba(255, 255, 255, 0.8)",
              background: isActive
                ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                : "transparent",
              transition: "all 0.3s ease",
            })}
            onMouseEnter={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.background = "rgba(255,255,255,0.1)";
                e.target.style.color = "#ffffff";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.background = "transparent";
                e.target.style.color = scrolled
                  ? "rgba(248, 250, 252, 0.7)"
                  : "rgba(255, 255, 255, 0.8)";
              }
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Login Button Desktop */}
      <Link
        to="/login"
        className="login-btn-desktop"
        style={{
          textDecoration: "none",
          padding: "10px 28px",
          borderRadius: "9999px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#ffffff",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = "0 6px 25px rgba(99, 102, 241, 0.6)";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = "0 4px 15px rgba(99, 102, 241, 0.4)";
          e.target.style.transform = "translateY(0)";
        }}
      >
        Login
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "#ffffff",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            left: "0",
            right: "0",
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "20px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.1)",
            animation: "fadeUp 0.3s ease-out forwards",
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                textDecoration: "none",
                padding: "12px 20px",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: "500",
                color: isActive ? "#ffffff" : "rgba(248, 250, 252, 0.7)",
                background: isActive
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "transparent",
                transition: "all 0.3s ease",
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            style={{
              textDecoration: "none",
              padding: "12px 20px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "600",
              color: "#ffffff",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Login
          </Link>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .login-btn-desktop { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;