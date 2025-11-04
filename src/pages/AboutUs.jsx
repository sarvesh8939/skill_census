import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "../styles/AboutUs.css";
import book from "../assets/back-school.jpg"
import aboutImg from "../assets/freepik.png";
import bulb from "../assets/light-bulb.png";
import technology from "../assets/innovation.png";
import passion from "../assets/passion.png";
import peopleImage from "../assets/grp_office.jpg";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // image translate effect

  return (
    <div className="aboutus-page">
      {/* Banner */}
      <section className="about-banner text-center position-relative">
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h1>About Us</h1>
          <p className="slogan">
            Skill Census, Where Learning Evolves, and Learners Lead.
          </p>
        </div>
      </section>

      <section
        ref={ref}
        className={`about-section py-5 ${inView ? "fade-in" : ""}`}
      >
        <Container>
          <Row className="align-items-center">
            {/* LEFT IMAGE */}
            <Col lg={6} md={12} className="text-center mb-4 mb-lg-0">
              <img
                src={aboutImg}
                alt="Who We Are"
                className="img-fluid rounded-3  about-img"
              />
            </Col>

            {/* RIGHT TEXT */}
            <Col lg={6} md={12}>
              <h2 className="fw-bold display-6 text-dark">
                <span className="highlight">Skill Census</span> is more than a
                learning platform — it’s a movement to{" "}
                <span className="highlight">evolve education</span> for the
                future.
              </h2>
              <p className="mt-3 fs-5 text-muted">
                At Skill Census, we believe education should evolve as fast as
                the world does. We are the education and training wing of
                Trinitysoft Solutions Ltd, a UK-based IT consultancy with 15+
                years of expertise in AI, software innovation, and enterprise
                solutions.
              </p>
              <p className="fs-5 text-muted">
                Skill Census was born from a simple idea — learning should be as
                dynamic, exciting, and impactful as the careers it leads to. Our
                learners don’t just complete courses; they build skills, create
                solutions, and grow careers that matter.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Vision Section */}
      <section
        ref={containerRef}
        className="py-5 text-center our-vision-section text-white"
      >
        <Container>
          <h2 className="fw-bold display-6 mb-3">Our Vision</h2>
          <p className="lead text-light mb-4">
            “To create the world’s most trusted, vibrant, and empowering
            ecosystem where learners, mentors, and organisations grow together.”
          </p>
          <p className="medium mb-5 text-light opacity-75">
            We envision a world where learning, mentorship, and opportunity
            exist within a single connected ecosystem — a place where ambition
            meets guidance and skill meets purpose. We’re not just preparing
            professionals for jobs; we’re building a global community of
            innovators ready to shape what comes next.
          </p>
          <div className="row justify-content-center">
            {[
              {
                title: "Passion",
                desc: "Learning driven by curiosity and purpose.",
                color: "#4361ee",
                icon: passion,
              },
              {
                title: "Technology",
                desc: "Harnessing the tools that power tomorrow.",
                color: "#fbbc05",
                icon: technology,
              },
              {
                title: "Mentorship",
                desc: "Guided by those who’ve already walked the path.",
                color: "#0f9d58",
                icon: bulb,
              },
            ].map((p, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div
                  className={`pillar-card p-3 rounded-4 h-100 ${
                    containerInView ? "slide-up" : "hidden"
                  }`}
                  style={{ transitionDelay: `${0.5 * i}s` }}
                >
                  <div
                    className="icon-circle mx-auto mb-3"
                    style={{ borderColor: p.color }}
                  >
                    <img
                      src={p.icon}
                      alt={p.title}
                      width="40"
                      height="40"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  <h6
                    className="fw-semibold mb-2"
                    style={{ color: p.color, fontSize: "1rem" }}
                  >
                    {p.title}
                  </h6>
                  <p className="small text-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mission-section py-5">
        <Container>
          <div className="mission-main mb-5 text-center">
            <div className="mission-subtitle mb-2 fw-bold">Our Difference</div>
            <h1 className="mission-title fw-bold mb-2">
              Built for the Future of Learning
            </h1>
            <p className="mission-desc">
              The world doesn’t stand still, and neither do we. What makes Skill
              Census different is our ability to connect learning with
              real-world results. We’re not a course provider; we’re a career
              accelerator.
            </p>
          </div>
          <Row className="mission-people-row align-items-center">
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <div className="mission-people-block p-4">
                <h2 className="people-title fw-bold mb-3">
                  Our Parent Company
                </h2>
                <p className="people-desc ">
                  Skill Census is part of the Trinitysoft Solutions family, a
                  forward-thinking UK-based technology company leading in
                  digital transformation, IT services, AI, product innovation,
                  and digital strategy. Backed by Trinitysoft’s technology
                  expertise and PlumPot Media’s creative vision, Skill Census
                  stands at the intersection of education, innovation, and
                  digital identity.
                </p>
                <p className="people-desc">
                  We don’t just teach future skills, we connect learners to
                  real-world visibility, mentorship, and opportunities that
                  accelerate their careers globally.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="mission-image-card position-relative">
                <img
                  src={peopleImage}
                  alt="Our Community"
                  className="mission-people-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="network-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* LEFT: TEXT SECTION */}
            <Col lg={12} md={12} className="mb-4 mb-lg-0 text-center">
              <div className="network-text">
                <h2>Our Global Network</h2>
                <p>
                  We’re proud to be part of a growing international community of
                  learners, mentors, and innovators. Skill Census partners with
                  experts from across industries and continents, creating a
                  powerful knowledge exchange that keeps learning dynamic and
                  globally relevant. Here, education is not confined to a
                  classroom, it’s a global conversation about innovation, ideas,
                  and growth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
