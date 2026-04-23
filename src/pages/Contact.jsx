import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";

const Contact = () => {
  useScrollReveal();

  const contactInfo = [
    { icon: <FiMapPin />, title: "Our Office", text: "123 Luxury Avenue, Manhattan, NY 10001" },
    { icon: <FiPhone />, title: "Phone", text: "+1 (555) 123-4567" },
    { icon: <FiMail />, title: "Email", text: "info@luxeestates.com" },
    { icon: <FiClock />, title: "Working Hours", text: "Mon - Sat: 9:00 AM - 7:00 PM" },
  ];

  return (
    <section style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh", background: "var(--color-light)" }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{
            fontSize: "14px", fontWeight: "600", color: "var(--color-primary)",
            textTransform: "uppercase", letterSpacing: "3px",
          }}>
            Get In Touch
          </span>
          <h1 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: "700", color: "var(--color-text-dark)", marginTop: "12px", marginBottom: "16px",
          }}>
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--color-text-body)", maxWidth: "520px", margin: "0 auto" }}>
            Have a question or ready to start your property journey? We'd love to hear from you.
          </p>
        </div>

        {/* Split Layout */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "36px" }}>
          {/* Left: Form */}
          <div className="reveal-left" style={{ flex: "1 1 480px" }}>
            <div style={{
              padding: "40px", borderRadius: "24px",
              background: "#ffffff", border: "1px solid var(--color-light-3)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}>
              <h3 style={{ fontSize: "22px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "28px" }}>
                Send us a Message
              </h3>
              <form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 200px" }}>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", display: "block", marginBottom: "8px" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      style={{
                        width: "100%", padding: "14px 18px", borderRadius: "14px",
                        background: "var(--color-light-2)", border: "2px solid transparent",
                        fontSize: "14px", outline: "none", color: "var(--color-text-dark)",
                        fontFamily: "var(--font-inter)", transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--color-primary)";
                        e.target.style.boxShadow = "0 0 0 4px rgba(99,102,241,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "transparent";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div style={{ flex: "1 1 200px" }}>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", display: "block", marginBottom: "8px" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      style={{
                        width: "100%", padding: "14px 18px", borderRadius: "14px",
                        background: "var(--color-light-2)", border: "2px solid transparent",
                        fontSize: "14px", outline: "none", color: "var(--color-text-dark)",
                        fontFamily: "var(--font-inter)", transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--color-primary)";
                        e.target.style.boxShadow = "0 0 0 4px rgba(99,102,241,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "transparent";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", display: "block", marginBottom: "8px" }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    style={{
                      width: "100%", padding: "14px 18px", borderRadius: "14px",
                      background: "var(--color-light-2)", border: "2px solid transparent",
                      fontSize: "14px", outline: "none", color: "var(--color-text-dark)",
                      fontFamily: "var(--font-inter)", transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-primary)";
                      e.target.style.boxShadow = "0 0 0 4px rgba(99,102,241,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "transparent";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", display: "block", marginBottom: "8px" }}>
                    Subject
                  </label>
                  <select
                    style={{
                      width: "100%", padding: "14px 18px", borderRadius: "14px",
                      background: "var(--color-light-2)", border: "2px solid transparent",
                      fontSize: "14px", outline: "none", color: "var(--color-text-body)",
                      fontFamily: "var(--font-inter)", cursor: "pointer", transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-primary)";
                      e.target.style.boxShadow = "0 0 0 4px rgba(99,102,241,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "transparent";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    <option value="">Select a topic</option>
                    <option value="buy">Buying a Property</option>
                    <option value="sell">Selling a Property</option>
                    <option value="rent">Renting</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", display: "block", marginBottom: "8px" }}>
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    style={{
                      width: "100%", padding: "14px 18px", borderRadius: "14px",
                      background: "var(--color-light-2)", border: "2px solid transparent",
                      fontSize: "14px", outline: "none", color: "var(--color-text-dark)",
                      fontFamily: "var(--font-inter)", resize: "vertical", transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-primary)";
                      e.target.style.boxShadow = "0 0 0 4px rgba(99,102,241,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "transparent";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    padding: "16px", borderRadius: "14px",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#ffffff", fontSize: "16px", fontWeight: "600",
                    border: "none", cursor: "pointer", transition: "all 0.3s ease",
                    boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                    fontFamily: "var(--font-inter)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 8px 30px rgba(99,102,241,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 20px rgba(99,102,241,0.3)";
                  }}
                >
                  <FiSend /> Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right: Info + Map */}
          <div className="reveal-right" style={{ flex: "1 1 380px" }}>
            {/* Contact Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
              {contactInfo.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "20px 24px", borderRadius: "18px",
                    background: "#ffffff", border: "1px solid var(--color-light-3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-primary)";
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-light-3)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--color-primary)", fontSize: "20px", flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "2px" }}>
                      {c.title}
                    </div>
                    <div style={{ fontSize: "14px", color: "var(--color-text-body)" }}>
                      {c.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{
              borderRadius: "24px", overflow: "hidden", height: "320px",
              border: "1px solid var(--color-light-3)",
            }}>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1681234567890"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
