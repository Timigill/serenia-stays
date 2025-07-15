"use client";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { useState } from "react";

const raleway = Raleway({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export default function RoomsSection() {
  const rooms = [
    {
      title: "Superior Room",
      price: "From $250/night",
      img: "/room1.jpg",
    },
    {
      title: "Deluxe Room",
      price: "From $250/night",
      img: "/room2.jpeg",
    },
    {
      title: "Signature Room",
      price: "From $250/night",
      img: "/room3.jpg",
    },
    {
      title: "Couple Room",
      price: "From $250/night",
      img: "/room4.jpg",
    },
  ];

  return (
    <section
      className={raleway.className}
      style={{
        width: "100%",
        background: "#fff",
        padding: "60px 0",
        textAlign: "center",
      }}
    >
      {/* HEADINGS */}
      <p
        style={{
          fontSize: "18px",
          color: "#007bff",
          marginBottom: "12px",
        }}
      >
        Featured Rooms
      </p>
      <h2
        style={{
          fontSize: "42px",
          color: "#000",
          fontWeight: "400",
          marginBottom: "50px",
        }}
      >
        Choose a Better Room
      </h2>

      {/* GRID SECTION WITH 4 ROOM CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "0",
          width: "100%",
        }}
      >
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
}

function RoomCard({ title, price, img }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        height: "350px",
        width: "100%",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src={img}
        alt={title}
        fill
        style={{
          objectFit: "cover",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/*  HOVER effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered ? "rgba(0,0,0,0.3)" : "transparent",
          transition: "background 0.3s ease",
          zIndex: 1,
        }}
      ></div>

      {/* BOTTOM BAR CONTAINER */}
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          left: "25px",
          right: "25px", 
          color: "#fff",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE: price + title */}
        <div>
          <p style={{ fontSize: "18px", marginBottom: "6px", opacity: 0.85 }}>
            {price}
          </p>
          <h3 style={{ fontSize: "28px", marginBottom: "0" }}>{title}</h3>
        </div>

        {/* RIGHT SIDE: Book Now on HOVER*/}
        <span
          style={{
            fontSize: "20px",
            color: "#fff",
            borderBottom: "2px solid #fff",
            transform: hovered ? "translateX(0)" : "translateX(80%)", // closer to left
            opacity: hovered ? 1 : 0,
            transition:
              "transform 0.4s ease, opacity 0.4s ease, color 0.3s ease, border-color 0.3s ease",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#007bff";
            e.currentTarget.style.borderColor = "#007bff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "#fff";
          }}
        >
          Book Now
        </span>
      </div>
    </div>
  );
}
