import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row gy-4">
          {/* Brand Info */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold">Serenia Stays</h4>
            <p className="mb-0">Where Comfort Meets Elegance</p>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3">Contact</h5>
            <p className="mb-1">200, Green Road, Mongla</p>
            <p className="mb-1">New York City, USA</p>
            <p className="mb-1">+1 234 567 890</p>
            <p className="mb-0">info@sereniastays.com</p>
          </div>

          {/* Navigation */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link href="/rooms" className="text-white text-decoration-none">Rooms</Link></li>
              <li><Link href="/about" className="text-white text-decoration-none">About</Link></li>
              <li><Link href="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3">Newsletter</h5>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <button className="btn btn-primary fw-bold" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="small mt-2">Subscribe to get the latest updates</p>
          </div>
        </div>

        <hr className="border-top border-light my-4" />

        {/* Footer bottom row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 small">©2025 Serenia Stays. All rights reserved.</p>
          <div className="d-flex gap-3 mt-3 mt-md-0">
            <a href="#" className="text-white"><FaFacebookF /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
            <a href="#" className="text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
