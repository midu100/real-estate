import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ 
      position: "relative",
      backgroundColor: "#2c2c2c",
      backgroundImage: `url('https://images.unsplash.com/photo-1541888087570-5b565a045952?w=1920&q=80')`, // Wood/architectural ceiling pattern
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "multiply", // Darkens the image properly
      color: "#ffffff",
      padding: "80px 0 40px",
      overflow: "hidden"
    }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "40px", marginBottom: "60px" }}>
          
          {/* Left Side Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Logo */}
            <div style={{ fontSize: "36px", fontWeight: "800", fontFamily: "var(--font-montserrat)", lineHeight: "1" }}>
                BRICKON LTD<br/>
              <span style={{ fontSize: "16px", fontWeight: "400", letterSpacing: "3px" }}>REAL ESTATE</span>
            </div>
            
            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.5px" }}>
              <p>HOTLINE: 16760</p>
              <p>EMAIL: info@brickonltd.com.com</p>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
              <a href="#" style={{ color: "#ffffff", fontSize: "18px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#bbbbbb"} onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}><FaFacebookF /></a>
              <a href="#" style={{ color: "#ffffff", fontSize: "18px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#bbbbbb"} onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}><FaInstagram /></a>
              <a href="#" style={{ color: "#ffffff", fontSize: "18px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#bbbbbb"} onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}><FaLinkedinIn /></a>
              <a href="#" style={{ color: "#ffffff", fontSize: "18px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#bbbbbb"} onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}><FaYoutube /></a>
            </div>
          </div>

          {/* Right Side Member Badge */}
          <div>
            <div style={{ background: "#4a76a8", color: "#ffffff", display: "inline-flex", flexDirection: "column", alignItems: "center", fontWeight: "800", fontSize: "18px", letterSpacing: "1px", border: "1px solid #ffffff" }}>
              <span style={{ background: "#333333", color: "#ffffff", padding: "4px 12px", width: "100%", textAlign: "center", fontSize: "12px" }}>MEMBER</span>
              <span style={{ padding: "4px 12px" }}>REHAB</span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.2)", marginBottom: "30px" }}></div>

        {/* Copyright */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "#ffffff", fontWeight: "500" }}>
          <p>© 2026 Brickon Ltd Real Estate. All Rights Reserved. Designed & Developed by Kazi Mridul</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" style={{
        position: "fixed", bottom: "40px", right: "40px",
        width: "56px", height: "56px", borderRadius: "50%",
        backgroundColor: "#25D366", color: "#ffffff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        zIndex: 1000, textDecoration: "none", transition: "transform 0.3s ease"
      }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
