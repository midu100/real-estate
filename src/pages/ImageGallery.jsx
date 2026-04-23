import React from "react";

const ImageGallery = () => {
  const galleries = [
    { id: 1, image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" }
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
            IMAGE GALLERY
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: "80px 0 100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
            {galleries.map((item) => (
              <div key={item.id} style={{ position: "relative", height: "250px", overflow: "hidden", cursor: "pointer", background: "#000000" }} onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.opacity = 0.5; }} onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.opacity = 0.8; }}>
                <img 
                  src={item.image} 
                  alt="Gallery Item" 
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8, transition: "opacity 0.3s ease" }} 
                />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                  <h3 style={{ 
                    fontFamily: "var(--font-montserrat)", fontSize: "20px", fontWeight: "700", color: "#ffffff", textTransform: "capitalize" 
                  }}>
                    View All
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
