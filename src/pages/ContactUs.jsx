import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import "../styles/ContactUs.css";
import bannerImg from "../assets/office.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    requirement: "",
    details: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/mail/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // alert("Your message has been sent successfully!");
        navigate("/thankyou");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="contact-section ">
      <section className="contact-banner text-center position-relative">
        <div className="contact-banner-overlay"></div>
        <div className="contact-banner-text">
          <h1>Contact Us</h1>
          <p className="slogan">
            At SkillCensus, we value meaningful connections, whether you’re
            looking to collaborate, train your team, or start your learning
            journey. Tell us a bit about yourself, and we’ll make sure your
            enquiry reaches the right team.
          </p>
        </div>
      </section>
      <Container className="py-5">
        <Row className="align-items-start">
          {/* LEFT SIDE INFO */}
          <Col md={5} className="contact-info mb-4 mb-md-0">
            {/* <h2 className="fw-bold mb-3 text-white">Contact Us</h2> */}
            <p className="text-light mb-4">
              We’re here for you. Tell us what you’re looking for, and we’ll
              reach out with the right next step.
            </p>

            <div className="contact-card">
              <h5 className=" fw-semibold">Reach out</h5>
              <ul className="list-unstyled text-light mt-2 small">
                <li>📍 India: +91 6364833830</li>
                <li>📍 UK: +44 151 453 4030</li>
                <li>📍 USA: +1 682 297 4830</li>
              </ul>
              <h5 className=" fw-semibold mt-4">Office</h5>
              <p className="text-light small mb-1">
                Trinitysoft Solutions Ltd, UK
              </p>
              <p className="text-light small">
                SkillCensus, India — Digital Learning Division
              </p>
              <h5 className=" fw-semibold mt-4">Follow Us</h5>
              <div className="contact-social">
                <a
                  href="https://linkedin.com"
                  className="contact-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com"
                  className="contact-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  className="contact-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://youtube.com"
                  className="contact-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE FORM */}
          <Col md={7}>
            <Form
              onSubmit={handleSubmit}
              className="p-4 rounded-4 bg-white shadow-lg"
            >
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Email / Business Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Company / Institution</Form.Label>
                    <Form.Control
                      type="text"
                      name="company"
                      placeholder="Enter your Company / Institution"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Your Role / Profession</Form.Label>
                    <Form.Control
                      type="text"
                      name="role"
                      placeholder="Enter your role"
                      value={formData.role}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={12} className="mb-3">
                  <Form.Group>
                    <Form.Label>What Are You Looking For? *</Form.Label>
                    <Form.Select
                      name="requirement"
                      required
                      value={formData.requirement}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option>Business Collaboration / Partnership</option>
                      <option>Corporate Training</option>
                      <option>Upskilling / Learning Programme</option>
                      <option>Career Consultation</option>
                      <option>Hackathon / Event Collaboration</option>
                      <option>Something Else</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={12} className="mb-4">
                  <Form.Group>
                    <Form.Label>Tell Us a Little More *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="details"
                      placeholder="Tell us briefly what you need or how we can help."
                      required
                      value={formData.details}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                type="submit"
                variant="primary"
                className="w-100 py-2 fw-semibold"
              >
                Submit
              </Button>

              <p className="text-muted small mt-3 text-center">
                We’ll get back to you within 1–2 business days.
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
