"use client";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["300", "400"], 
  subsets: ["latin"],
});

export default function AboutSection() {
  return (
    <section
      className={raleway.className}
      style={{
        paddingTop: "160px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* LEFT COLUMN – TEXT */}
          <div
            className="col-lg-5 mb-5 mb-lg-0"
            style={{
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <p
              className="mb-3"
              style={{
                color: "#00A2E8", 
                fontSize: "16px", 
                fontWeight: 400, 
              }}
            >
              About Us
            </p>
            <h2
              className="mb-4"
              style={{
                fontSize: "50px",
                lineHeight: "1.2",
                fontWeight: 400, 
                color: "#111",
              }}
            >
              A Luxurious Hotel <br /> with Nature
            </h2>
            <p
              className="mb-5"
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                fontWeight: 300,
                color: "#666",
              }}
            >
              Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
              consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
              sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
              Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
            </p>
            <a
              href="#"
              style={{
                fontSize: "17px",
                fontWeight: 200,
                textDecoration: "underline",
                color: "#999",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00A2E8")}
              onMouseLeave={(e) => (e.target.style.color = "#999")}
            >
              Learn More
            </a>
          </div>

          {/* RIGHT COLUMN – IMAGES */}
          <div
            className="col-lg-6 d-flex justify-content-center"
            style={{ gap: "5px" }}
          >
            <div style={{ marginTop: "0px" }}>
              <Image
                src="/about1.jpg"
                alt="Luxury Room"
                width={300}
                height={450}
                className="img-fluid shadow-sm"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ marginTop: "70px" }}>
              <Image
                src="/about2.jpg"
                alt="Nature View"
                width={300}
                height={450}
                className="img-fluid shadow-sm"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
