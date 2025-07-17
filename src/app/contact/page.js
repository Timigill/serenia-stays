"use client";

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address (e.g. example@domain.com).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/contact", formData);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ message: "", name: "", email: "", subject: "" });
      } else {
        toast.error(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Server error. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{ width: "100%", minHeight: "100vh" }}>
      <ToastContainer position="top-right" autoClose={3000} />

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
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(44,62,80,0.35)", zIndex: 1 }}
        ></div>
        <div className="position-relative z-2 text-white">
          <h1 className="display-5 mb-4" style={{ letterSpacing: "2px" }}>
            Get in Touch
          </h1>
        </div>
      </div>

      {/* Google Map */}
      <div className="d-flex justify-content-center align-items-center py-5 px-3 my-4">
        <div className="w-100" style={{ maxWidth: "1000px", height: "70vh" }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=..."
            className="w-100 h-100 border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container py-5">
        <div className="row">
          {/* Left Form */}
          <div className="col-md-9 mb-4">
            <h2 className="mb-4 fs-4">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control rounded-0 px-4 py-3"
                  rows="6"
                  placeholder="Message"
                  style={{
                    fontSize: "0.9rem",
                    border: "1px solid #ccc",
                    boxShadow: "none",
                  }}
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="form-control rounded-0 px-4 py-3"
                    placeholder="Enter Your Name"
                    style={{
                      fontSize: "0.9rem",
                      border: "1px solid #ccc",
                      boxShadow: "none",
                    }}
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="text"
                    className="form-control rounded-0 px-4 py-3"
                    placeholder="Email"
                    style={{
                      fontSize: "0.9rem",
                      border: "1px solid #ccc",
                      boxShadow: "none",
                    }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  className="form-control rounded-0 px-4 py-3"
                  placeholder="Subject"
                  style={{
                    fontSize: "0.9rem",
                    border: "1px solid #ccc",
                    boxShadow: "none",
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn border border-primary text-primary px-5 py-3 rounded-0"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 pt-5">
            <div className="mb-4 d-flex">
              <i className="bi bi-house-door fs-3 me-3 text-secondary"></i>
              <div>
                <p className="mb-0 fw-bold">Address</p>
                <p className="mb-0 text-secondary">123 Main Street, City, Country</p>
              </div>
            </div>
            <div className="mb-4 d-flex">
              <i className="bi bi-telephone fs-3 me-3 text-secondary"></i>
              <div>
                <p className="mb-0 fw-bold">Phone</p>
                <p className="mb-0 text-secondary">+1 234 567 890</p>
              </div>
            </div>
            <div className="d-flex">
              <i className="bi bi-envelope fs-3 me-3 text-secondary"></i>
              <div>
                <p className="fw-bold mb-0">Email</p>
                <p className="mb-0 text-secondary">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
