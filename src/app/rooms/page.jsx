// app/rooms/page.jsx
export default function RoomsPage() {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-white"
      style={{
        height: "60vh",
        backgroundImage: "url('/images/rooms-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      ></div>
      <h1 className="fw-bold position-relative">Luxury Rooms</h1>
    </div>
  );
}
