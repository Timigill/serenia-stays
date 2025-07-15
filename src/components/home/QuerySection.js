"use client";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export default function ReservationQuery() {
  return (
    <section
      className={raleway.className}
      style={{
        width: "100%",
        background: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        padding: "80px 20px",
      }}
    >
      {/*BORDER BOX */}
      <div
        style={{
          position: "relative",
          border: "1px solid #ddd", 
          padding: "50px 30px",
          textAlign: "center",
          width: "90%",
          maxWidth: "1200px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.6)", 
          backdropFilter: "blur(8px)", 
          WebkitBackdropFilter: "blur(8px)", 
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* HEADING */}
        <h2
          style={{
            fontSize: "34px",
            color: "#000",
            marginBottom: "15px",
            fontWeight: "600",
          }}
        >
          For Reservation or Query?
        </h2>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: "18px",
            color: "#444",
            marginBottom: "30px",
          }}
        >
          We’re here to assist you anytime. Feel free to reach out.
        </p>

        {/* CALL BUTTON */}
        <a
          href="tel:+1234567890"
          style={{
            display: "inline-block",
            padding: "14px 50px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "18px",
            textDecoration: "none",
            borderRadius: "30px",
            border: "2px solid #007bff",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.color = "#007bff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#007bff";
            e.currentTarget.style.color = "#fff";
          }}
        >
          Contact Us: +1 234 567 890
        </a>
      </div>
    </section>
  );
}
