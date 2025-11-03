import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import "../styles/ThankYou.css";

const ThankYou = () => {
  return (
    <Container className="text-center py-5">
      <div
        className="thankyou-page d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: "80vh",
          background: "#f5f7f2",
          position: "relative",
        }}
      >
        {/* Decorative corners */}
        <div className="thankyou-corner yellow"></div>
        <div className="thankyou-corner green"></div>

        {/* Main content */}
        <div className="thankyou-main text-center mt-5 pt-3">
          <FaCheckCircle size={48} color="#34c759" className="mb-3" />
          <h1 className="fw-bold mb-2">Thank you!</h1>
          <p className="thankyou-message mb-4">
            🎉 We’ve Got Your Message, Our Team Will Be in Touch Soon! We’ve
            received your enquiry and our team will get back to you within 1–2
            business days. Meanwhile, you can continue exploring our platform
            and discover how Skill Census helps learners and organisations grow
            together.
          </p>
        </div>

        {/* Two cards side by side */}
        <div className="thankyou-cards d-flex flex-wrap justify-content-center gap-4">
          {/* Connect with us */}
          <div className="card p-4 text-center thankyou-card">
            <div className="fw-bold mb-3">Connect With Us</div>
            <div className="d-flex gap-3 justify-content-center">
              <a
                href="https://facebook.com"
                className="thankyou-social"
                style={{ color: "#1877f3" }}
                aria-label="Facebook"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://linkedin.com"
                className="thankyou-social"
                style={{ color: "#0a66c2" }}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={28} />
              </a>
              <a
                href="https://pinterest.com"
                className="thankyou-social"
                style={{ color: "#e60023" }}
                aria-label="Pinterest"
              >
                <FaPinterestP size={28} />
              </a>
              <a
                href="https://twitter.com"
                className="thankyou-social"
                style={{ color: "#1da1f2" }}
                aria-label="Twitter"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </div>

          {/* Website card */}
          <div className="card p-4 text-center thankyou-card">
            <div className="fw-bold mb-3">Visit Our Website</div>
            <a
              href="https://yourwebsite.com"
              className="btn btn-success btn-lg thankyou-visit-btn"
            >
              Visit Website
            </a>
          </div>
        </div>
        {/* <Link to="/" className="btn btn-dark rounded-pill px-4 py-2">
        Go Back Home
      </Link> */}
      </div>
    </Container>
  );
};

export default ThankYou;
