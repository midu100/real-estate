import React from "react";

const Landowner = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <section
  style={{
    height: "300px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginTop: "80px",
    overflow: "hidden",
  }}
>
  {/* Background Image */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        "url('https://images.pexels.com/photos/33146175/pexels-photo-33146175.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(4px)",   // 👈 main blur effect
      transform: "scale(1.05)", // 👈 edge cut avoid korte
    }}
  ></div>

  {/* Optional dark overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.3)",
    }}
  ></div>

  {/* Content */}
  <div
    className="container"
    style={{ position: "relative", zIndex: 1 }}
  >
    <h1
      style={{
        fontFamily: "var(--font-montserrat)",
        fontSize: "48px",
        fontWeight: "800",
        color: "#ffffff",
        textTransform: "uppercase",
        letterSpacing: "2px",
        margin: 0,
      }}
    >
      LANDOWNER
    </h1>
  </div>
</section>

      {/* Info Section */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
          {/* Left Text */}
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#002b5e", marginBottom: "30px", textTransform: "uppercase" }}>
              LANDOWNERS
            </h2>
            <p style={{ fontSize: "14px", color: "#333333", lineHeight: "1.8", marginBottom: "30px" }}>
              Edison Group is a leading Bangladesh conglomerate, established in 2009 to enhance its customer's lives through reliable products and services. It ventured into the real estate sector of Bangladesh in 2015.
            </p>
            <p style={{ fontSize: "14px", color: "#333333", fontWeight: "600", marginBottom: "16px" }}>
              Why choose Edison Real Estate?
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "14px", color: "#333333", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <strong>Faster Execution of Projects</strong><br/>
                <span style={{ fontWeight: "normal" }}>- Proper planning & usage of the latest technologies.</span><br/>
                <span style={{ fontWeight: "normal" }}>- Experienced, proven & skilled construction team.</span><br/>
                <span style={{ fontWeight: "normal" }}>- Prior handover before committed deadline.</span>
              </li>
              <li>
                <strong>Elegant Design</strong><br/>
                <span style={{ fontWeight: "normal" }}>- Contemporary vernacular architectures.</span><br/>
                <span style={{ fontWeight: "normal" }}>- Quality space design.</span>
              </li>
            </ul>
          </div>
          
          {/* Right Image */}
          <div style={{ flex: "1 1 400px" }}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Building Design" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: "60px 0 100px 0", background: "#ffffff" }}>
        <div className="container">
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#000000", marginBottom: "40px", textTransform: "uppercase" }}>
            MEET THE PROFESSIONALS
          </h2>
          
          <form style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            
            {/* Land Information */}
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#000000", marginBottom: "20px" }}>Land Information</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
                <input type="text" placeholder="Locality" style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} />
                <input type="text" placeholder="Address*" style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} />
                <input type="text" placeholder="Size Of The Land In Kathas*" style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} />
                <input type="text" placeholder="Width Of The Road In Front (In Feet)*" style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} />
                <select style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }}>
                  <option value="">Select Category</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
                <select style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }}>
                  <option value="">Facing*</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                </select>
                <select style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333", gridColumn: "1 / -1" }}>
                  <option value="">Attractive Features (If Any)</option>
                  <option value="corner">Corner Plot</option>
                  <option value="lake">Lake View</option>
                </select>
              </div>
            </div>

            {/* Landowners Information */}
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#000000", marginBottom: "20px" }}>Landowners Information</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
                <input type="text" placeholder="Name Of The Landowner*" style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} />
                <input type="email" placeholder="Email ID*" style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} />
                <input type="tel" placeholder="Contact Number*" style={{ padding: "16px", border: "1px solid #000000", fontSize: "14px", outline: "none", width: "100%", background: "#ffffff", color: "#333333" }} />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button 
                type="submit" 
                onClick={(e) => e.preventDefault()} 
                style={{ 
                  padding: "16px 50px", background: "#ffffff", color: "#000000", border: "1px solid #4CAF50", fontSize: "14px", fontWeight: "700", cursor: "pointer", transition: "all 0.3s ease" 
                }} 
                onMouseEnter={(e) => { e.currentTarget.style.background = "#4CAF50"; e.currentTarget.style.color = "#ffffff"; }} 
                onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#000000"; }}
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Landowner;
