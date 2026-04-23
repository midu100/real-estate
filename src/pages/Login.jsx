import React, { useState } from "react";
import { Link } from "react-router";
import { FiMail, FiLock, FiUser, FiPhone, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const inputStyle = {
    width: "100%", padding: "14px 16px 14px 46px", borderRadius: "14px",
    background: "var(--color-light-2)", border: "2px solid transparent",
    fontSize: "14px", outline: "none", color: "var(--color-text-dark)",
    fontFamily: "var(--font-inter)", transition: "all 0.3s ease",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "var(--color-primary)";
    e.target.style.boxShadow = "0 0 0 4px rgba(99,102,241,0.1)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "transparent";
    e.target.style.boxShadow = "none";
  };

  const iconStyle = {
    position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)",
    color: "var(--color-text-light)", fontSize: "17px",
  };

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-light)" }}>
      <div style={{
        width: "100%", maxWidth: "1100px", margin: "0 24px",
        display: "flex", borderRadius: "32px", overflow: "hidden",
        background: "#ffffff", boxShadow: "0 20px 80px rgba(0,0,0,0.08)", minHeight: "620px",
      }}>
        {/* Left Image */}
        <div className="auth-image-panel" style={{ flex: "1 1 480px", position: "relative", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Luxury"
            style={{ width: "100%", height: "100%", objectFit: "cover", animation: "slowZoom 20s ease-in-out infinite alternate" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(99,102,241,0.8), rgba(139,92,246,0.8))",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
            padding: "48px", textAlign: "center",
          }}>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "36px", fontWeight: "700", color: "#ffffff", marginBottom: "16px" }}>
              {isLogin ? "Welcome Back" : "Join Us Today"}
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", maxWidth: "340px", lineHeight: "1.7" }}>
              {isLogin ? "Sign in to access your saved properties and connect with agents." : "Create an account to save favorites and list your own properties."}
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div style={{ flex: "1 1 480px", padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: "380px", width: "100%", margin: "0 auto" }}>
            {/* Tabs */}
            <div style={{ display: "flex", marginBottom: "36px", background: "var(--color-light-2)", borderRadius: "14px", padding: "4px" }}>
              {["Sign In", "Sign Up"].map((label, idx) => (
                <button key={label} onClick={() => setIsLogin(idx === 0)}
                  style={{
                    flex: 1, padding: "12px", borderRadius: "12px", border: "none",
                    fontSize: "14px", fontWeight: "600", cursor: "pointer", fontFamily: "var(--font-inter)",
                    background: (idx === 0 ? isLogin : !isLogin) ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "transparent",
                    color: (idx === 0 ? isLogin : !isLogin) ? "#ffffff" : "var(--color-text-body)",
                    transition: "all 0.3s ease",
                  }}>{label}</button>
              ))}
            </div>

            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "var(--color-text-dark)", marginBottom: "8px", fontFamily: "var(--font-playfair)" }}>
              {isLogin ? "Sign In" : "Create Account"}
            </h3>
            <p style={{ fontSize: "14px", color: "var(--color-text-body)", marginBottom: "28px" }}>
              {isLogin ? "Enter your credentials to continue" : "Fill in your details to get started"}
            </p>

            <form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {!isLogin && (
                <div style={{ position: "relative" }}>
                  <FiUser style={iconStyle} />
                  <input type="text" placeholder="Full Name" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              )}
              <div style={{ position: "relative" }}>
                <FiMail style={iconStyle} />
                <input type="email" placeholder="Email Address" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              {!isLogin && (
                <div style={{ position: "relative" }}>
                  <FiPhone style={iconStyle} />
                  <input type="tel" placeholder="Phone Number" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              )}
              <div style={{ position: "relative" }}>
                <FiLock style={iconStyle} />
                <input type={showPass ? "text" : "password"} placeholder="Password"
                  style={{ ...inputStyle, paddingRight: "46px" }} onFocus={handleFocus} onBlur={handleBlur} />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "var(--color-text-light)", fontSize: "17px", cursor: "pointer" }}>
                  {showPass ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {isLogin && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--color-text-body)", cursor: "pointer" }}>
                    <input type="checkbox" style={{ accentColor: "#6366f1" }} /> Remember me
                  </label>
                  <a href="#" style={{ fontSize: "13px", color: "var(--color-primary)", textDecoration: "none", fontWeight: "500" }}>Forgot Password?</a>
                </div>
              )}

              <button type="submit" onClick={(e) => e.preventDefault()}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  padding: "15px", borderRadius: "14px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#ffffff", fontSize: "15px", fontWeight: "600", border: "none", cursor: "pointer",
                  transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(99,102,241,0.3)", fontFamily: "var(--font-inter)",
                }}
                onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(99,102,241,0.5)"; }}
                onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(99,102,241,0.3)"; }}
              >
                {isLogin ? "Sign In" : "Create Account"} <FiArrowRight />
              </button>
            </form>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "24px 0" }}>
              <div style={{ flex: 1, height: "1px", background: "var(--color-light-3)" }} />
              <span style={{ fontSize: "13px", color: "var(--color-text-light)" }}>or</span>
              <div style={{ flex: 1, height: "1px", background: "var(--color-light-3)" }} />
            </div>

            <button style={{
              width: "100%", padding: "13px", borderRadius: "14px", background: "#ffffff",
              border: "1px solid var(--color-light-3)", fontSize: "14px", fontWeight: "500",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              gap: "10px", color: "var(--color-text-dark)", transition: "all 0.3s ease", fontFamily: "var(--font-inter)",
            }}>
              <FcGoogle style={{ fontSize: "20px" }} /> Continue with Google
            </button>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .auth-image-panel { display: none !important; } }`}</style>
    </section>
  );
};

export default Login;
