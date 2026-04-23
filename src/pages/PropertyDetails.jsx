import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { properties } from "../data/data";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  // Enable smooth scrolling for this page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  if (!property) {
    return (
      <section style={{ paddingTop: "140px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontFamily: "var(--font-montserrat)", fontSize: "32px", color: "#1a1a1a" }}>
          Property not found
        </h2>
        <Link to="/properties" style={{ color: "var(--color-primary)", marginTop: "16px", display: "inline-block" }}>
          ← Back to Properties
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* Sticky Internal Navigation */}
      <div style={{ position: "sticky", top: "70px", zIndex: 100, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid #eeeeee", padding: "15px 0", transition: "all 0.3s ease" }}>
        <div className="container" style={{ display: "flex", gap: "24px", overflowX: "auto", whiteSpace: "nowrap", scrollbarWidth: "none" }}>
          <Link to="/properties" style={{ color: "var(--color-primary)", textDecoration: "none", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginRight: "auto" }}>← Back</Link>
          <a href="#project" style={{ color: "#333333", textDecoration: "none", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "var(--color-primary)"} onMouseLeave={(e) => e.target.style.color = "#333333"}>The Project</a>
          <a href="#specifications" style={{ color: "#333333", textDecoration: "none", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "var(--color-primary)"} onMouseLeave={(e) => e.target.style.color = "#333333"}>Specification</a>
          <a href="#amenities" style={{ color: "#333333", textDecoration: "none", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "var(--color-primary)"} onMouseLeave={(e) => e.target.style.color = "#333333"}>Amenities</a>
          <a href="#location" style={{ color: "#333333", textDecoration: "none", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "var(--color-primary)"} onMouseLeave={(e) => e.target.style.color = "#333333"}>Location</a>
          <a href="#contact" style={{ color: "#333333", textDecoration: "none", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "var(--color-primary)"} onMouseLeave={(e) => e.target.style.color = "#333333"}>Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ height: "90vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
          <img src={property.images[0] || property.image} alt={property.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }}></div>
        </div>
        <h1 className="reveal" style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(48px, 8vw, 120px)", fontWeight: "800", color: "#ffffff", textTransform: "uppercase", letterSpacing: "8px", textAlign: "center" }}>
          {property.title}
        </h1>
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", color: "#ffffff", textAlign: "center", animation: "bounce 2s infinite" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Scroll Down</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* Project Overview */}
      <section id="project" style={{ padding: "120px 0", background: "#ffffff" }}>
        <div className="container reveal" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "700", color: "#1a1a1a", marginBottom: "32px", lineHeight: "1.3" }}>
            Welcome to {property.title.toUpperCase()}, an exclusive residential masterpiece redefining luxury living in {property.location}.
          </h2>
          <p style={{ fontSize: "16px", color: "#666666", lineHeight: "1.9" }}>
            {property.description}
          </p>
        </div>
      </section>

      {/* Full Width Image Breaker */}
      <section style={{ height: "60vh", width: "100%" }}>
        <img src={property.images[1] || property.image} alt="Architecture" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </section>

      {/* Specifications */}
      <section id="specifications" style={{ padding: "120px 0", background: "#f9f9f9" }}>
        <div className="container">
          <h2 className="reveal" style={{ fontSize: "32px", fontWeight: "700", color: "#1a1a1a", marginBottom: "60px", textTransform: "capitalize" }}>Specification</h2>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div style={{ borderBottom: "1px solid #dddddd", paddingBottom: "16px" }}>
              <p style={{ fontSize: "12px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Location</p>
              <p style={{ fontSize: "16px", color: "#1a1a1a", fontWeight: "600" }}>{property.location}</p>
            </div>
            <div style={{ borderBottom: "1px solid #dddddd", paddingBottom: "16px" }}>
              <p style={{ fontSize: "12px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Property Type</p>
              <p style={{ fontSize: "16px", color: "#1a1a1a", fontWeight: "600" }}>{property.type}</p>
            </div>
            <div style={{ borderBottom: "1px solid #dddddd", paddingBottom: "16px" }}>
              <p style={{ fontSize: "12px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Apartment Size</p>
              <p style={{ fontSize: "16px", color: "#1a1a1a", fontWeight: "600" }}>{property.area.toLocaleString()} sqft</p>
            </div>
            <div style={{ borderBottom: "1px solid #dddddd", paddingBottom: "16px" }}>
              <p style={{ fontSize: "12px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Bedrooms</p>
              <p style={{ fontSize: "16px", color: "#1a1a1a", fontWeight: "600" }}>{property.bedrooms || "N/A"}</p>
            </div>
            <div style={{ borderBottom: "1px solid #dddddd", paddingBottom: "16px" }}>
              <p style={{ fontSize: "12px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Bathrooms</p>
              <p style={{ fontSize: "16px", color: "#1a1a1a", fontWeight: "600" }}>{property.bathrooms || "N/A"}</p>
            </div>
            <div style={{ borderBottom: "1px solid #dddddd", paddingBottom: "16px" }}>
              <p style={{ fontSize: "12px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Starting Price</p>
              <p style={{ fontSize: "16px", color: "#1a1a1a", fontWeight: "600" }}>${property.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" style={{ padding: "120px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: "600px", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1a1a1a", marginBottom: "16px" }}>Luxury apartments with state-of-the-art amenities</h2>
            <p style={{ fontSize: "12px", letterSpacing: "2px", color: "#888888", textTransform: "uppercase", fontWeight: "600" }}>Amenities</p>
          </div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {property.amenities.map((a, i) => (
              <div key={i} style={{ padding: "24px", background: "#f8f9fa", borderLeft: "4px solid var(--color-primary)", display: "flex", alignItems: "center", minHeight: "80px" }}>
                <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#333333", textTransform: "capitalize" }}>{a}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section style={{ padding: "0 0 120px 0", background: "#ffffff" }}>
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {property.images.slice(0, 2).map((img, i) => (
            <div key={i} style={{ height: "400px" }}>
              <img src={img} alt={`Gallery ${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="location" style={{ padding: "120px 0", background: "#f9f9f9" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "40px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1a1a1a", marginBottom: "8px" }}>Location</h2>
              <p style={{ fontSize: "18px", color: "#666666" }}>{property.location}</p>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>SEE ON MAP</a>
          </div>
          <div className="reveal" style={{ width: "100%", height: "500px" }}>
            <iframe
              title="Property Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1681234567890"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact / Request Call Back */}
      <section id="contact" style={{ padding: "120px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "60px", background: "#f8f9fa", padding: "60px", border: "1px solid #eeeeee" }}>
            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#1a1a1a", marginBottom: "24px", lineHeight: "1.2" }}>Let us guide you to the extraordinary.</h2>
              <p style={{ fontSize: "14px", color: "#666666", lineHeight: "1.8", marginBottom: "40px" }}>
                By submitting your request, you agree to our privacy policy. Rest assured, your personal information will be kept safe and secure.
              </p>
              <div>
                <p style={{ fontSize: "12px", color: "#888888", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px", fontWeight: "600" }}>Contact</p>
                <p style={{ fontSize: "16px", color: "#1a1a1a", fontWeight: "500", marginBottom: "8px" }}>{property.location}</p>
                <p style={{ fontSize: "16px", color: "#1a1a1a", fontWeight: "500" }}>{property.agent.phone}</p>
              </div>
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1a1a1a", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "1px" }}>Request Call Back</h3>
              <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <input type="text" placeholder="Full Name*" style={{ padding: "16px", border: "1px solid #dddddd", fontSize: "14px", outline: "none", fontFamily: "inherit" }} />
                <input type="tel" placeholder="Phone Number*" style={{ padding: "16px", border: "1px solid #dddddd", fontSize: "14px", outline: "none", fontFamily: "inherit" }} />
                <input type="email" placeholder="Email Address" style={{ padding: "16px", border: "1px solid #dddddd", fontSize: "14px", outline: "none", fontFamily: "inherit" }} />
                <button type="submit" onClick={(e) => e.preventDefault()} style={{ alignSelf: "flex-start", marginTop: "10px", padding: "16px 40px", background: "#1a1a1a", color: "#ffffff", border: "none", fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer", transition: "background 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-primary)"} onMouseLeave={(e) => e.currentTarget.style.background = "#1a1a1a"}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-20px) translateX(-50%); }
          60% { transform: translateY(-10px) translateX(-50%); }
        }
      `}</style>
    </>
  );
};

export default PropertyDetails;
