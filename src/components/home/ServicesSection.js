"use client";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export default function ServicesSection() {
  const offers = [
    {
      img: "/offer1.jpg",
      title: "Up to 35% savings on Club rooms and Suites",
      options: ["Luxuries condition", "3 Adults & 2 Children size", "Sea view side"],
    },
    {
      img: "/offer2.webp",
      title: "Up to 35% savings on Club rooms and Suites",
      options: ["Luxuries condition", "3 Adults & 2 Children size", "Sea view side"],
    },
    {
      img: "/offer3.png",
      title: "Up to 35% savings on Club rooms and Suites",
      options: ["Luxuries condition", "3 Adults & 2 Children size", "Sea view side"],
    },
  ];

  return (
    <section
      className={raleway.className}
      style={{
        padding: "100px 60px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#00A2E8",
          fontSize: "16px",
          fontWeight: 400,
          marginBottom: "8px",
        }}
      >
        Our Offers
      </p>
      <h2
        style={{
          fontSize: "50px",
          fontWeight: 400,
          color: "#111",
          marginBottom: "60px",
          lineHeight: "1.2",
        }}
      >
        Ongoing Offers
      </h2>

      <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "30px",
            justifyItems: "center",
            maxWidth: "1250px",
            margin: "0 auto",
        }}
        >
        {offers.map((offer, index) => (
            <div key={index} style={{ maxWidth: "360px" }}>
            
            {/* IMAGE CONTAINER */}
            <div
                style={{
                width: "100%",
                aspectRatio: "1/1",
                overflow: "hidden",
                borderRadius: "12px",
                }}
                onMouseEnter={(e) =>
                (e.currentTarget.querySelector("img").style.transform = "scale(1.08)")
                }
                onMouseLeave={(e) =>
                (e.currentTarget.querySelector("img").style.transform = "scale(1)")
                }
            >
            <Image
                src={offer.img}
                alt={offer.title}
                width={500}
                height={500}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    display: "block",
                }}
              />
            </div>
            {/* TEXT BELOW IMAGE */}
            <div style={{ textAlign: "left", marginTop: "22px" }}>
              <h3
                style={{
                  fontSize: "21px",
                  fontWeight: 400,
                  color: "#111",
                  marginBottom: "14px",
                  lineHeight: "1.4",
                }}
              >
                {offer.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "22px" }}>
                {offer.options.map((opt, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "16px",
                      color: "#666",
                      marginBottom: "7px",
                    }}
                  >
                    • {opt}
                  </li>
                ))}
              </ul>

              {/* BOOK NOW BUTTON */}
              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "16px",
                  fontWeight: 400,
                  background: "#fff",
                  color: "#00A2E8",
                  border: "2px solid #00A2E8",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#00A2E8";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#fff";
                  e.target.style.color = "#00A2E8";
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
