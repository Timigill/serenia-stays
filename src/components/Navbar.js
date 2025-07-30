'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* === Desktop Layout === */}
        <div className="d-none d-lg-flex align-items-center justify-content-between w-100">
          
          {/* LEFT: Nav Links (HORIZONTAL row on left) */}
          <ul className={`d-flex align-items-center gap-4 mb-0 ${styles.navLinks}`}>
            <li><Link className="nav-link text-white" href="/">Home</Link></li>
            <li><Link className="nav-link text-white" href="/rooms">Rooms</Link></li>
            <li><Link className="nav-link text-white" href="/about">About</Link></li>
            <li><Link className="nav-link text-white" href="/blog">Blog</Link></li>
            <li><Link className="nav-link text-white" href="/pages">Pages</Link></li>
            <li><Link className="nav-link text-white" href="/contact">Contact</Link></li>
          </ul>

          {/* CENTER: Logo */}
          <div className={styles.logoCenter}>
            <img src="/logo.png" alt="Logo" style={{ height: 60 }} />
          </div>

          {/* RIGHT: Social Icons + Book A Room */}
          <div className={`d-flex align-items-center gap-3 ${styles.navRight}`}>
            <a href="#" className="text-white"><FaFacebookF /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
            <a href="#" className="text-white"><FaInstagram /></a>
            <Link href="/book">
              <button className="btn bg-primary px-4 py-2 fw-bold text-white">Book A Room</button>
            </Link>
          </div>
        </div>
      </div>

      {/* === Mobile Menu === */}
      {menuOpen && (
  <div
    className={`d-lg-none px-4 py-3 ${styles.mobileMenu}`}
    style={{ backgroundColor: '#ffffff' }} 
  >
    <ul className="list-unstyled mb-0">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/rooms">Rooms</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/pages">Pages</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </div>
)}

    </nav>
  );
}
