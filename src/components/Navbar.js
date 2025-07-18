"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // ✅ new

  useEffect(() => {
    setHasMounted(true); // ✅ ensures hydration only happens on client

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="navbar navbar-expand-lg z-2 navbar-dark bg-transparent py-4 px-5 w-100 position-absolute" style={{ zIndex: 100 }}>
      <div className="container-fluid">
        {/* Nav Links */}
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-4">
          <li className="nav-item"><Link className="nav-link text-white" href="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" href="/rooms">Rooms</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" href="/about">About</Link></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
            <ul className="dropdown-menu" aria-labelledby="blogDropdown">
              <li><Link className="dropdown-item text-white" href="/blog">Blog</Link></li>
              <li><Link className="dropdown-item text-white" href="/blog/single">Single Blog</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
            <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
              <li><Link className="dropdown-item text-white" href="/elements">Elements</Link></li>
            </ul>
          </li>
          <li className="nav-item"><Link className="nav-link text-white" href="/contact">Contact</Link></li>
        </ul>

        {/* Logo */}
        <div className="mx-auto text-center">
          <img src="/logo.png" alt="Serenia Stays Logo" style={{ height: 70, marginBottom: 0, opacity: 2 }} />
        </div>

        {/* Right Icons */}
        <div className="d-flex align-items-center gap-3 ms-auto">
          <a href="#" className="text-white"><FaFacebookF /></a>
          <a href="#" className="text-white"><FaTwitter /></a>
          <a href="#" className="text-white"><FaInstagram /></a>

          {/* Dark Mode Toggle — render only after mount */}
          {hasMounted && (
            <button
              className="btn btn-outline-light rounded-circle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
            </button>
          )}

          <Link href="/book">
            <button className="btn bg-primary ms-2 px-4 py-2 fw-bold text-white">Book A Room</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
