export default function HeroSection() {
  return (
    <section style={{position: 'relative', width: '100%', minHeight: '100vh'}}>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000" data-bs-pause="false">
        <div className="carousel-inner" style={{minHeight: '100vh'}}>
          <div className="carousel-item active">
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: '100vh',
                backgroundImage: 'url(/bg-main.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                position: 'relative'
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(44,62,80,0.35)', zIndex: 1}}></div>
              <div className="position-relative" style={{zIndex: 2}}>
                <h1 className="display-1 fw-bold text-white mb-4" style={{fontFamily: 'inherit', letterSpacing: '2px'}}>Life Is Beautiful</h1>
                <p className="fs-3 text-white mb-0">Unlock to enjoy the view of Martine</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: '100vh',
                backgroundImage: 'url(/bg-main1.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                position: 'relative'
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(44,62,80,0.35)', zIndex: 1}}></div>
              <div className="position-relative" style={{zIndex: 2}}>
                <h1 className="display-1 fw-bold text-white mb-4" style={{fontFamily: 'inherit', letterSpacing: '2px'}}>Life Is Beautiful</h1>
                <p className="fs-3 text-white mb-0">Unlock to enjoy the view of Martine</p>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel controls, visible on md and up */}
        <button className="carousel-control-prev d-none d-md-flex" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next d-none d-md-flex" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
} 