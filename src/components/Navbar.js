'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`position-absolute top-0 start-0 w-100 px-4 px-md-5 py-3 ${styles.navbar}`} style={{ zIndex: 100 }}>
      <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">

        {/* === Mobile: Left Logo, Right Hamburger === */}
        <div className="d-lg-none d-flex justify-content-between align-items-center w-100">
          <img src="/logo.png" alt="Logo" style={{ height: 50 }} />
          <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu size={26} color="#fff" />
          </div>
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
