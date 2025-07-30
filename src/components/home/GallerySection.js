"use client";
import { useState } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { FaPlayCircle, FaTimes } from "react-icons/fa";

const raleway = Raleway({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export default function GallerySection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        className={raleway.className}
        style={{
          position: "relative",
          height: "750px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* ✅ Background Image */}
        <Image
          src="/gallery-bg.jpg"
          alt="Gallery Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center bottom",
            filter: "brightness(0.5)",
          }}
        />

        {/* ✅ Overlay Content */}
        <div style={{ position: "relative", zIndex: 2, padding: "0 20px" }}>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)", // responsive font size
              fontWeight: 300,
              marginBottom: "10px",
            }}
          >
            Montana Sea View
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 5vw, 42px)", 
              fontWeight: 400,
              lineHeight: "1.2",
              marginBottom: "30px",
            }}
          >
            Relax and Enjoy your <br />
            Vacation
          </h2>

          {/* ✅ Play Icon */}
          <span
            onClick={() => setShowVideo(true)}
            style={{
              display: "inline-block",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <FaPlayCircle
              style={{
                fontSize: "clamp(36px, 8vw, 50px)", 
                color: "#fff",
                transition: "transform 0.3s ease, filter 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.15)";
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 20px rgba(0,162,232,0.8))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "none";
              }}
            />
          </span>
        </div>
      </section>

      {/* ✅ VIDEO POPUP */}
      {showVideo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            animation: "fadeIn 0.3s ease",
            padding: "10px",
          }}
        >
          {/* Close Button */}
          <div
            onClick={() => setShowVideo(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "35px",
              height: "35px",
              background: "red",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <FaTimes style={{ color: "#fff", fontSize: "16px" }} />
          </div>

          {/* Embedded YouTube Video */}
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "900px",
              aspectRatio: "16/9",
              background: "#000",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZzaPdXTrSb8?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
