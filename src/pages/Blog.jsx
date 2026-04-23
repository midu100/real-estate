import React from "react";
import { Link } from "react-router";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      date: "23 September 2025",
      title: "Edison Real Estate: Redefining Happiness",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      link: "#"
    },
    {
      id: 2,
      date: "04 September 2025",
      title: "Top 10 Interior Designing Trends for 2025",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      link: "#"
    },
    {
      id: 3,
      date: "11 September 2023",
      title: "এডিসন ডেসডিমোনাঃ যেখানে শৈশব অমলিন",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      link: "#"
    }
  ];

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Blog Hero with Wireframe Background */}
      <section style={{ height: "300px", position: "relative", display: "flex", alignItems: "center", marginTop: "80px", overflow: "hidden", background: "#f0f2f5" }}>
        {/* Placeholder for the line-art building drawing */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ 
            fontFamily: "var(--font-montserrat)", 
            fontSize: "48px", 
            fontWeight: "800", 
            color: "#ffffff",
            textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
            textTransform: "uppercase", 
            letterSpacing: "2px" 
          }}>
            BLOG
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: "80px 0 100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "50px 30px" }}>
            {blogs.map((blog) => (
              <div key={blog.id} style={{ display: "flex", flexDirection: "column" }}>
                {/* Image */}
                <div style={{ width: "100%", paddingBottom: "65%", position: "relative", overflow: "hidden", marginBottom: "20px" }}>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    style={{ 
                      position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover"
                    }} 
                  />
                </div>
                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <p style={{ 
                    fontSize: "12px", color: "#666666", marginBottom: "8px", fontWeight: "400"
                  }}>
                    {blog.date}
                  </p>
                  <h3 style={{ 
                    fontFamily: "var(--font-montserrat)", fontSize: "16px", fontWeight: "600", color: "#000000", marginBottom: "24px", lineHeight: "1.4", flexGrow: 1
                  }}>
                    {blog.title}
                  </h3>
                  {/* Explore Button Outline */}
                  <div>
                    <Link to={blog.link} style={{ 
                      display: "inline-block", padding: "12px 40px", border: "1px solid #000000", color: "#000000", textDecoration: "none", fontSize: "14px", fontWeight: "600", transition: "all 0.3s ease" 
                    }} onMouseEnter={(e) => { e.currentTarget.style.background = "#000000"; e.currentTarget.style.color = "#ffffff"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#000000"; }}>
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
