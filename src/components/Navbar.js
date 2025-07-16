import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-4 px-5 w-100 position-absolute" style={{zIndex: 100}}>
      <div className="container-fluid">
        <ul className="navbar-nav  mb-2 mb-lg-0 d-flex align-items-center gap-4">
          <li className="nav-item">
            <Link className="nav-link text-white" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/rooms">Rooms</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/about">About</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Blog
            </a>
            <ul className="dropdown-menu" aria-labelledby="blogDropdown">
              <li><Link className="dropdown-item text-white" href="/blog">Blog</Link></li>
              <li><Link className="dropdown-item text-white" href="/blog/single">Single Blog</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
            </a>
            <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
              <li><Link className="dropdown-item text-white" href="/elements">Elements</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/faq">FAQs</Link>
          </li>
        </ul>
        <div className="mx-auto text-center">
          <img src="/logo.png" alt="Serenia Stays Logo" style={{height: 70, marginBottom: 0, opacity:2}} />
        </div>
        <div className="d-flex align-items-center gap-3 ms-auto">
          <a href="#" className="text-white"><FaFacebookF /></a>
          <a href="#" className="text-white"><FaTwitter /></a>
          <a href="#" className="text-white"><FaInstagram /></a>
          <Link href="/book">
            <button className="btn bg-primary ms-3 px-4 py-2 fw-bold text-white">Book A Room</button>
          </Link>
        </div>
      </div>
    </nav>
  );
} 