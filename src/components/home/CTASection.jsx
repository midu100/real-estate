import React from "react";

const CTASection = () => {
  return (
    <section style={{ 
      position: "relative", 
      padding: "100px 0", 
      backgroundColor: "#ffffff",
      // Subtle topographic background pattern
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236366f1' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
    }}>
      <div className="container">
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", background: "#ffffff", boxShadow: "0 10px 50px rgba(0,0,0,0.08)", position: "relative", zIndex: 1 }}>
          {/* Left Image */}
          <div style={{ flex: "1 1 450px", minHeight: "450px" }}>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80" alt="Meeting Balcony" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          {/* Right Form */}
          <div style={{ flex: "1 1 450px", padding: "60px 80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#000000", marginBottom: "36px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Schedule A Meeting
            </h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <input type="text" placeholder="Full Name*" style={{ width: "100%", padding: "16px 20px", border: "1px solid #e0e0e0", fontSize: "14px", outline: "none", fontFamily: "inherit", color: "#333", backgroundColor: "#ffffff" }} />
              <input type="tel" placeholder="Phone Number*" style={{ width: "100%", padding: "16px 20px", border: "1px solid #e0e0e0", fontSize: "14px", outline: "none", fontFamily: "inherit", color: "#333", backgroundColor: "#ffffff" }} />
              <input type="email" placeholder="Email Address" style={{ width: "100%", padding: "16px 20px", border: "1px solid #e0e0e0", fontSize: "14px", outline: "none", fontFamily: "inherit", color: "#333", backgroundColor: "#ffffff" }} />
              <div style={{ position: "relative" }}>
                <select style={{ width: "100%", padding: "16px 20px", border: "1px solid #e0e0e0", fontSize: "14px", outline: "none", fontFamily: "inherit", cursor: "pointer", color: "#333", appearance: "none", backgroundColor: "#ffffff" }}>
                  <option value="">Select A Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
                <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <button type="submit" onClick={(e) => e.preventDefault()} style={{ alignSelf: "flex-start", marginTop: "10px", padding: "14px 40px", background: "transparent", border: "1px solid #000000", color: "#000000", fontSize: "14px", fontWeight: "700", cursor: "pointer", transition: "all 0.3s ease", letterSpacing: "2px" }} onMouseEnter={(e) => { e.target.style.background = "#000000"; e.target.style.color = "#ffffff"; }} onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#000000"; }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
