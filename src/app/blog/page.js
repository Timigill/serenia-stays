"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const postsPerPage = 5;

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to load blogs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Check theme preference
  useEffect(() => {
    const saved = localStorage.getItem("blog-theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("blog-theme", newMode ? "dark" : "light");
  };

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const paginatedBlogs = blogs.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const renderPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(start + 2, totalPages);
    for (let i = start; i <= end; i++) {
      pages.push(
        <li key={i} className={`page-item ${i === currentPage ? "active" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <section>
      {/* Hero */}
      <div style={{minHeight:"100vh"}}>
      <div
        className="d-flex justify-content-center align-items-center text-center position-relative"
        style={{
          minHeight: "90vh",
          backgroundImage: "url(/bg-blog.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <button
      
            className="btn btn-outline-light z-3  position-absolute rounded-circle "
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
           style={{
            top:"7.5%",
            right:"1%"
           }}
          >
            <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
          </button>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.4)" }}></div>
        <div className="position-relative z-2 text-white">
          <h1 className="display-4">Blogs</h1>
          {/* <button
            className="btn btn-outline-light rounded-circle mt-3"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
          </button> */}
        </div>
      </div>
</div>
      {/* Main Content */}
      <div className="container mb-5">
        <div className="row">
          {/* Left Side (Blog posts) */}
          <div className="col-lg-8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              paginatedBlogs.map((blog) => (
                <div key={blog._id} className="card mb-4 border-0 shadow-sm rounded-0">
                  <div className="position-relative">
                    <img
                      src={blog.image}
                      className="card-img-top"
                      style={{ height: "400px", objectFit: "cover" }}
                      alt="Blog"
                    />
                    <div className="position-absolute bg-primary text-white px-3 py-2" style={{ left: "20px", bottom: "-15px" }}>
                      <h6 className="mb-0">{blog.date}</h6>
                      <small>{blog.month}</small>
                    </div>
                  </div>
                  <div className="card-body mt-4" style={{ paddingLeft: "25px" }}>
                    <h5>{blog.title}</h5>
                    <p className="text  ">{blog.excerpt}</p>
                  </div>
                  <div className="card-footer  d-flex text small ps-3">
                    <span><i className="bi bi-folder me-1"></i>{blog.categories.join(", ")}</span>
                    <span className="px-2">|</span>
                    <span><i className="bi bi-chat-dots me-1"></i>{blog.comments} Comments</span>
                  </div>
                </div>
              ))
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav>
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</button>
                  </li>
                  {renderPageNumbers()}
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>&raquo;</button>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          {/* Right Side (Sidebar) */}
          <div className="col-lg-4">
            {/* Search */}
            <aside className="bg-light p-4 mb-4">
              <form>
                <div className="d-flex flex-column gap-3">
                  <input
                    type="text"
                    placeholder="Search Keywords"
                    className="form-control rounded-0 px-4 py-3 "
                  />
                  <button className="btn btn-primary px-5 py-3 rounded-0">Search</button>
                </div>
              </form>
            </aside>

            {/* Category */}
            <aside className="bg-light p-4 mb-4">
              <h5 className="text-uppercase border-bottom pb-3 mb-4" style={{ fontWeight: 500 }}>Category</h5>
              <ul className="list-unstyled m-0">
                {[
                  { label: "Restaurant food", count: 37 },
                  { label: "Travel news", count: 10 },
                  { label: "Modern technology", count: 3 },
                  { label: "Product", count: 11 },
                  { label: "Inspiration", count: 21 },
                  { label: "Health Care", count: 21 },
                ].map((item, index, arr) => (
                  <li
                    key={item.label}
                    className="d-flex  py-3"
                    style={{
                      borderBottom: index !== arr.length - 1 ? "1px solid #ccc" : "none",
                    }}
                  >
                    <span className="px-2">{item.label}</span>
                    <span>({item.count})</span>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Recent Posts */}
            <aside className="bg-light p-4 mb-4">
              <h5 className="text-uppercase border-bottom pb-3 mb-4" style={{ fontWeight: 500 }}>Recent Posts</h5>
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="d-flex mb-3">
                  <img
                    src="/contactbg.png"
                    width="80"
                    height="80"
                    className="object-fit-cover me-3"
                    alt="recent"
                  />
                  <div>
                    <h6 className="mb-1" style={{ fontSize: "0.95rem" }}>
                      A dummy blog heading for post {idx + 1}
                    </h6>
                    <small className="text">May 12, 2024</small>
                  </div>
                </div>
              ))}
            </aside>

            {/* Tag Cloud */}
            <aside className="bg-light p-4 mb-4">
              <h5 className="text-uppercase border-bottom pb-3 mb-4" style={{ fontWeight: 500 }}>Tag Clouds</h5>
              <div className="d-flex flex-wrap gap-2">
                {["project", "love", "technology", "travel", "restaurant", "lifestyle", "design", "illustration"].map((tag) => (
                  <span
                    key={tag}
                    className="border px-3 py-2 tag-hover"
                    style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </aside>

            {/* Instagram Feed */}
            <aside className="bg-light p-4 mb-4">
              <h5 className="text-uppercase border-bottom pb-3 mb-4" style={{ fontWeight: 500 }}>Instagram Feed</h5>
              <div className="row g-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="col-4">
                    <img
                      src="/contactbg.png"
                      alt={`Insta ${i}`}
                      className="img-fluid"
                      style={{ height: "80px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </aside>

            {/* Newsletter */}
            <aside className="bg-light p-4 mb-2">
              <h5 className="text-uppercase border-bottom pb-3 mb-4" style={{ fontWeight: 500 }}>Newsletter</h5>
              <form>
                <div className="d-flex flex-column gap-3">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control px-4 py-3"
                  />
                  <button className="btn btn-primary px-5 py-3">Subscribe</button>
                </div>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
