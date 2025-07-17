"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load blogs", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (number) => setCurrentPage(number);

  const renderPageNumbers = () => {
    const pagesToShow = 3;
    let start = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let end = Math.min(start + pagesToShow - 1, totalPages);

    if (end - start < pagesToShow - 1) {
      start = Math.max(1, end - pagesToShow + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((num) => (
      <li key={num} className={`page-item ${currentPage === num ? "active" : ""}`}>
        <button className="page-link" onClick={() => handlePageChange(num)}>
          {num}
        </button>
      </li>
    ));
  };

  return (
    <section>
      {/* Hero Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "80vh",
          backgroundImage: "url(/contactbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(44,62,80,0.35)", zIndex: 1 }}></div>
        <div className="position-relative z-2 text-white">
          <h1 className="display-4 display-md-1 mb-3">Blogs</h1>
        </div>
      </div>

      {/* Blog List */}
      <div className="container py-5 my-5">
        <div className="row gy-4">
          <div className="col-lg-8">
            {loading ? (
              <p>Loading blogs...</p>
            ) : currentPosts.length === 0 ? (
              <p>No blog posts available.</p>
            ) : (
              currentPosts.map((blog) => (
                <div key={blog._id} className="card mb-4 border-0 shadow-lg" style={{ borderRadius: "0" }}>
                  <div className="position-relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="card-img-top"
                      style={{
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "0",
                        width: "100%",
                      }}
                    />
                    <div
                      className="position-absolute bg-primary text-white text-center px-2 py-3"
                      style={{
                        width: "80px",
                        left: "30px",
                        bottom: "-10px",
                      }}
                    >
                      <h3 className="mb-0">{blog.date}</h3>
                      <p className="mb-0">{blog.month}</p>
                    </div>
                  </div>
                  <div className="card-body my-4" style={{ paddingLeft: "30px" }}>
                    <h5 className="card-title fs-4">{blog.title}</h5>
                    <p className="card-text text-muted">{blog.excerpt}</p>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex small text-secondary ps-3">
                    <span>
                      <i className="bi bi-folder me-1"></i>
                      {blog.categories.join(", ")}
                    </span>
                    <span className="px-2">|</span>
                    <span>
                      <i className="bi bi-chat-dots me-1"></i>
                      {blog.comments} Comments
                    </span>
                  </div>
                </div>
              ))
            )}

            {/* Pagination */}
            {!loading && totalPages > 1 && (
              <nav>
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                      &laquo;
                    </button>
                  </li>
                  {renderPageNumbers()}
                  <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                      &raquo;
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          {/* Right Column (Sidebar or Placeholder) */}
          <div className="col-lg-4">
            <div className="h-100 w-100" style={{ backgroundColor: "#007bff", minHeight: "300px" }}></div>
          </div>
        </div>
      </div>

      {/* Global Button Focus Fix */}
      <style jsx global>{`
        .page-link:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </section>
  );
};

export default BlogPage;
