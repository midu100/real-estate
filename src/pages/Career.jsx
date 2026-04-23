import React from "react";

const Career = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ height: "300px", position: "relative", display: "flex", alignItems: "center", marginTop: "80px", overflow: "hidden", background: "#f0f2f5" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ 
            fontFamily: "var(--font-montserrat)", fontSize: "48px", fontWeight: "800", color: "#ffffff", textShadow: "0px 2px 4px rgba(0,0,0,0.3)", textTransform: "uppercase", letterSpacing: "2px" 
          }}>
            CAREER
          </h1>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section style={{ padding: "80px 0 60px 0", background: "#ffffff" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#002b5e", marginBottom: "30px", textTransform: "uppercase" }}>
            WHY JOIN US?
          </h2>
          <div style={{ fontSize: "14px", color: "#333333", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p>
              We want to serve the purpose of living a luxurious and comfortable life, offering impeccable housing facilities that connote magnificence, elegance and comfort. We believe, we would not be able to achieve this without a dynamic and collaborative workforce. Hence, we strongly promote a healthy work environment and aim to attract and select a diverse team of individuals; establishing equal opportunity for all, irrespective of race, age, gender, class, ethnicity, disability, location and religion.
            </p>
            <p>
              Therefore at Edison, you will not only be able to discover a career of your passion, but also be able to collaborate and learn with and from a team of diverse and proficient individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section style={{ padding: "60px 0 100px 0" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", background: "#ffffff", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
            
            {/* Left Side: Image */}
            <div style={{ flex: "1 1 400px", minHeight: "400px", position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Apply Workspace" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Right Side: Form */}
            <div style={{ flex: "1 1 400px", padding: "50px 40px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#000000", marginBottom: "30px", textTransform: "uppercase" }}>
                APPLY NOW
              </h2>
              
              <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  style={{ padding: "12px 16px", border: "1px solid #000000", fontSize: "13px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} 
                />
                
                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  style={{ padding: "12px 16px", border: "1px solid #000000", fontSize: "13px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} 
                />

                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  style={{ padding: "12px 16px", border: "1px solid #000000", fontSize: "13px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} 
                />

                <input 
                  type="text" 
                  placeholder="Apply For The Position *" 
                  style={{ padding: "12px 16px", border: "1px solid #000000", fontSize: "13px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} 
                />

                <div style={{ display: "flex", gap: "20px" }}>
                  <input 
                    type="text" 
                    placeholder="Year Of Experience *" 
                    style={{ flex: 1, padding: "12px 16px", border: "1px solid #000000", fontSize: "13px", outline: "none", background: "#ffffff", color: "#333333" }} 
                  />
                  <div style={{ flex: 1, position: "relative" }}>
                    <div style={{ padding: "12px 16px", border: "none", background: "#eeeeee", fontSize: "13px", color: "#666666", textAlign: "center", cursor: "pointer", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      Upload your CV
                    </div>
                    <input 
                      type="file" 
                      style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer" }} 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  onClick={(e) => e.preventDefault()} 
                  style={{ 
                    marginTop: "10px", padding: "14px", background: "#ffffff", color: "#000000", border: "1px solid #4CAF50", fontSize: "13px", fontWeight: "700", textTransform: "capitalize", cursor: "pointer", transition: "all 0.3s ease", width: "100%" 
                  }} 
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#4CAF50"; e.currentTarget.style.color = "#ffffff"; }} 
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#000000"; }}
                >
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
