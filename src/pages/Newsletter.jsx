import React from "react";

const Newsletter = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <section style={{ height: "300px", position: "relative", display: "flex", alignItems: "center", marginTop: "80px", overflow: "hidden", background: "#f0f2f5" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ 
            fontFamily: "var(--font-montserrat)", fontSize: "48px", fontWeight: "800", color: "#ffffff", textShadow: "0px 2px 4px rgba(0,0,0,0.3)", textTransform: "uppercase", letterSpacing: "2px" 
          }}>
            NEWSLETTER
          </h1>
        </div>
      </section>

      {/* Subscribe Form */}
      <section style={{ padding: "100px 0", background: "#f9f9f9" }}>
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#1a1a1a", marginBottom: "20px" }}>Subscribe to our updates</h2>
            <p style={{ fontSize: "15px", color: "#666666", marginBottom: "40px", lineHeight: "1.6" }}>
              Stay informed about our latest projects, real estate insights, and company news directly to your inbox.
            </p>
            
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <input 
                type="text" 
                placeholder="Name *" 
                style={{ padding: "16px", border: "1px solid #dddddd", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff" }} 
              />
              <input 
                type="email" 
                placeholder="Email Address *" 
                style={{ padding: "16px", border: "1px solid #dddddd", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff" }} 
              />
              <button 
                type="submit" 
                onClick={(e) => e.preventDefault()} 
                style={{ 
                  padding: "16px", background: "#1a1a1a", color: "#ffffff", border: "none", fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer", transition: "all 0.3s ease", marginTop: "10px" 
                }} 
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-primary)"; }} 
                onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; }}
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
