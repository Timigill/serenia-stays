"use client";
import { Raleway } from "next/font/google";
import ServicesSection from "@/components/home/ServicesSection";
import RoomsSection from "@/components/home/RoomsSection";

const raleway = Raleway({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export default function RoomsPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className={`d-flex justify-content-center align-items-center text-white position-relative w-100 text-center ${raleway.className}`}
        style={{
          minHeight: "80vh", 
          height: "clamp(400px, 70vh, 900px)", 
          backgroundImage: "url('/rooms-hero.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.25)" }} 
        />

        {/* Hero Text */}
        <h1
          className="position-relative m-0"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)", 
            fontWeight: 300, 
            letterSpacing: "1px",
          }}
        >
          Luxaries Rooms
        </h1>
      </div>
      <div style={{ height: "70px" }}></div>

      {/* Services Section */}
      <ServicesSection />

      {/* Rooms Section */}
      <RoomsSection />
    </>
  );
}
