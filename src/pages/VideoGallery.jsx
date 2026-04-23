import React from "react";
import { FiPlay } from "react-icons/fi";

const VideoGallery = () => {
  const videos = [
    { id: 1, title: "Edison Real Estate Corporate Video", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80" },
    { id: 2, title: "Lakeside Dreams Project Overview", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80" },
    { id: 3, title: "Desdemona Launch Event", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" },
    { id: 4, title: "Customer Testimonial 2023", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80" }
  ];

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <section style={{ height: "300px", position: "relative", display: "flex", alignItems: "center", marginTop: "80px", overflow: "hidden", background: "#f0f2f5" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ 
            fontFamily: "var(--font-montserrat)", fontSize: "48px", fontWeight: "800", color: "#ffffff", textShadow: "0px 2px 4px rgba(0,0,0,0.3)", textTransform: "uppercase", letterSpacing: "2px" 
          }}>
            VIDEO GALLERY
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: "80px 0 100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
            {videos.map((item) => (
              <div key={item.id} style={{ display: "flex", flexDirection: "column" }}>
                {/* Thumbnail */}
                <div className="reveal" style={{ position: "relative", height: "250px", overflow: "hidden", cursor: "pointer", marginBottom: "20px" }} onMouseEnter={(e) => { e.currentTarget.querySelector('.play-btn').style.transform = 'scale(1.2)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('.play-btn').style.transform = 'scale(1)'; }}>
                  <img 
                    src={item.image} 
                    alt="Video Thumbnail" 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }}></div>
                  
                  {/* Play Icon */}
                  <div className="play-btn" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60px", height: "60px", background: "rgba(255,255,255,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                    <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "16px solid #e11d48", marginLeft: "6px" }}></div>
                  </div>
                </div>
                {/* Title */}
                <h3 style={{ fontFamily: "var(--font-montserrat)", fontSize: "16px", fontWeight: "700", color: "#1a1a1a", textAlign: "center" }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoGallery;
