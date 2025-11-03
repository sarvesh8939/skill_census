import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "../styles/Hackathon.css";
import heroImg from "../assets/Gemini-lady.png";

import checked from "../assets/checked.png";
import puzzle from "../assets/puzzle.png";
import idea from "../assets/idea.png";
import growth from "../assets/growth.png";

import corporate from "../assets/corporate.png";
import university from "../assets/university.png";
import recruitment from "../assets/recruitment.png";

const points = [
  {
    title: "Problem-solving & logical thinking",
    desc: "Featuring the pace and flexibility you need – we design, we deliver, we support.",
  },
  {
    title: "Collaboration & leadership",
    desc: "Whether you have a learning audience of 100 or 100,000, we have the people, the infrastructure, and the know-how to deliver.",
  },
  {
    title: "Creativity & innovation",
    desc: "We can leverage our ‘mix and match’ Core content library to quickly create custom programmes.",
  },
  {
    title: "Communication & pitching",
    desc: "We build the best-looking, most engaging learning solutions.",
  },
  {
    title: "Time & priority management",
    desc: "We build the best-looking, most engaging learning solutions.",
  },
];

//===== run for sectionn =====
const pathways = [
  {
    title: "Corporate Hackathons",
    description:
      "Skilled employees, innovation culture, solutions for real internal challenges.",
    usecase:
      "internal training, digital transformation culture, innovation sprints.",
    sub: "For employees | blended with fun + learning",
    image: corporate,
  },
  {
    title: "Campus & University Hackathons",
    description:
      "Students build portfolios, industry exposure, practical learning.",
    usecase: "placement-prep, employability training, innovation events.",
    sub: "For Colleges & student communities",
    image: university,
  },
  {
    title: "Hiring/Recruitment Hackathons",
    description: "Companies hire based on performance, not interviews.",
    usecase: "fresher hiring, lateral role scouting, talent pipeline.",
    sub: "Startups, SMEs, Enterprises, Recruiters",
    image: recruitment,
  },
];

//training points
const trainingPoints = [
  "Tech hackathons",
  "Design jams",
  "Business strategy challenges",
  "Product thinking competitions",
  "Cybersecurity battles / DevOps labs",
  "Marketing & growth challenges",
];

function Hackathon() {
  //run for
  const infiniteItems = [...pathways, ...pathways, ...pathways];

  //model section
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  //our model
  const [hovered, setHovered] = useState(null);

  //our value
  const [valuehover, setValueHover] = useState(null);

  //training
  const { ref: trainingRefPoint, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="hackathon-page">
      {/*===== hero sectionn =====*/}
      <section
        className="hackathon-hero-section position-relative d-flex align-items-center"
        // style={{ minHeight: "95vh" }}
      >
        <div className="hackathon-hero-bg-img "></div>
        <div className="hackathon-hero-bg-gradient"></div>
        <Container
          fluid="md"
          className="hackathon-hero-content text-white position-relative z-2 py-5"
        >
          <Row>
            <Col lg={8} md={10}>
              <h1 className="hackathon-hero-title mb-2">
                Watch Skills in Action.
                <br />
                <span className="hackathon-hero-title-bold">
                  Discover the Real Performers.
                </span>
              </h1>
              <p className="hackathon-hero-desc mb-4">
                Real-world problem-solving. Cross-domain challenges. Talent
                discovered through action, not just resumes.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-5">
                <button className="hackathon-hero-btn-outline">
                  Host a Hackathon →
                </button>
                <button className="hackathon-hero-btn-outline">
                  Partner with Us →
                </button>
              </div>
              <div className="hackathon-hero-scroll-indicator"></div>
            </Col>
          </Row>
        </Container>
        <img
          src={heroImg}
          alt="Training Hero"
          className="hackathon-hero-actual-img"
        />
      </section>

      {/*=======future work section=========*/}
      <section className="fw-section">
        <div className="fw-container">
          <div className="fw-left">
            <h2>
              The Future Workforce Pipeline Starts Here
              <br />
              <strong>Solve. Create. Present. Grow.</strong>
            </h2>
            <p>
              We don't run events for the sake of competition, we build learning
              ecosystems.
            </p>
            <div className="fw-badges">
              <img src={puzzle} alt="Top 20 2025" />
              <img src={idea} alt="Top 20 2024" />
              <img src={growth} alt="Top 20 Leadership" />
            </div>
          </div>
          <div className="fw-right">
            <ul className="fw-points-list">
              {points.map((point, i) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.13,
                });
                return (
                  <li
                    ref={ref}
                    className={inView ? "animate" : ""}
                    key={point.title}
                    style={{ animationDelay: `${0.13 * i}s` }}
                  >
                    {/* <span className="fw-icon">✔</span> */}
                    <div>
                      <h3>{point.title}</h3>
                      {/* <p>{point.desc}</p> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="fw-bottom">
          <h3 className="text-center">
            Hackathons aren’t just for coders — we run them across every
            industry and role.
          </h3>
        </div>
      </section>

      <section className="different-section ">
        {/* <div className="different text-center">
          <div className="different-overlay"></div>
          <div className="different-content">
            <h2>Our Model</h2>
            <h4>Learn → Build → Pitch → Get Opportunities</h4>
          </div>
        </div> */}
        <div className="corptech-container ">
          <div className="corptech-image"></div>
          <div className="corptech-content ">
            {/* <h3>Specialist topic areas</h3> */}
            <h1>Modular formats</h1>
            {/* <p>
              Empower your teams with modern, practical tech skills that drive
              business performance.
            </p> */}
            <div className="corptech-stats">
              <ul>
                <li>Flexible timed sprint hackathons up to 24 hours</li>
                <hr />
                <li>3-day bootcamps</li>
                <hr />
                <li>1-week innovation challenge</li>
                <hr />
                <li>30-day competition series</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="training-section py-5">
        <div className="container-fluid px-md-5">
          <div className="row align-items-center">
            {/* Left Section */}
            <div className="col-lg-6 col-md-12 text-white mb-4 mb-lg-0">
              <h2 className="fw-bold training-title mb-3">Formats we run</h2>
              {/* <h5 className="fw-semibold mb-4">Empowering Through Knowledge</h5>
                    <p className="training-text mb-4">
                      Our training division focuses on developing real-world skills
                      with a learner-first approach. We combine innovation,
                      technology, and expert-led content to help professionals stay
                      ahead in the modern digital landscape.
                    </p> */}

              <ul
                className="training-list list-unstyled"
                ref={trainingRefPoint}
              >
                {trainingPoints.map((point, index) => (
                  <li
                    key={index}
                    className={`training-item ${
                      isVisible ? "slide-forward" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className="training-number">{index + 1}.</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Image */}
            <div className="col-lg-6 col-md-12 text-center">
              <img
                src={heroImg}
                alt="Training Team"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/*===== run for sectionn =====*/}
      <section className="runfor-section py-5">
        <div className="container text-center">
          {/* <p className="runfor-section-subtitle">
            Choose your learning journey Your goals, your pace.
          </p> */}
          <h2 className="runfor-section-title mb-5">Who We Run Them For</h2>

          <div className="runfor-scroll-container">
            <div className="runfor-scroll-content">
              {infiniteItems.map((item, index) => (
                <div key={index} className="runfor-card shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="runfor-img mb-3"
                  />
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-secondary mt-2">
                    <strong>Outcome: </strong>
                    {item.description}
                  </p>
                  <p className="text-secondary mt-2">
                    <strong>Usecases: </strong>
                    {item.usecase}
                  </p>
                  <h6>{item.sub}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*=========our model============= */}
      <div className="model">
        <section className="our-model">
          <div className="model-title">
            <h2>What Makes Us Different</h2>
            {/* <h4>Learn → Build → Pitch → Get Opportunities</h4> */}
          </div>
          <div className="our-model-row">
            <div
              className={`our-model-col ${hovered === 1 ? "active" : ""} ${
                hovered === 2 ? "blur" : ""
              }`}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3>Traditional Hackathons</h3>
              <ul>
                <li>Mostly coding-only</li>
                <li>Test theory & speed</li>
                <li>Limited real-world context</li>
                <li>Only students participate</li>
                <li>Ends with prize</li>
              </ul>
            </div>
            <div
              className={`our-model-col ${hovered === 2 ? "active" : ""} ${
                hovered === 1 ? "blur" : ""
              }`}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3>Skill Census Hackathons</h3>
              <ul>
                <li>Multi-domain challenges</li>
                <li>Test thinking, execution & teamwork</li>
                <li>Real business problems & use-cases</li>
                <li>Students + working pros + internal teams</li>
                <li>Ends with skills, exposure & opportunities</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="our-model">
          <div className="model-title">
            <h2>Value We Deliver</h2>
            {/* <h4>Learn → Build → Pitch → Get Opportunities</h4> */}
          </div>
          <div className="our-model-row">
            <div
              className={`our-model-col ${valuehover === 1 ? "active" : ""} ${
                valuehover === 2 ? "blur" : ""
              }`}
              onMouseEnter={() => setValueHover(1)}
              onMouseLeave={() => setValueHover(null)}
            >
              <h3>For Organisations</h3>
              <ul>
                <li>Spot top talent</li>
                <li>Real solutions to real problems</li>
                <li>Internal capability boost</li>
                <li>Employer branding</li>
              </ul>
            </div>
            <div
              className={`our-model-col ${valuehover === 2 ? "active" : ""} ${
                valuehover === 1 ? "blur" : ""
              }`}
              onMouseEnter={() => setValueHover(2)}
              onMouseLeave={() => setValueHover(null)}
            >
              <h3>For Participants</h3>
              <ul>
                <li>Build portfolio & skills</li>
                <li>Work on real-world challenges</li>
                <li>Mentorship & feedback</li>
                <li>Job & internship opportunities</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="corptech-section">
        <div className="corptech-container">
          <div className="corptech-image"></div>
          <div className="corptech-content">
            <h1>Impact Snapshot</h1>
            <p>Results That Matter</p>
            <div className="corptech-stats">
              <div className="">
                <span className="stat-num">
                  90<sup>%</sup>
                </span>
                <div className="stat-label">
                  participants report skill growth
                </div>
              </div>
              <div className="stat-divider" />
              <div className="">
                <span className="stat-num">
                  70<sup>%</sup>
                </span>
                <div className="stat-label">
                  companies find interview-ready talent
                </div>
              </div>
              <div>
                <span className="stat-num">
                  85<sup>%</sup>
                </span>
                <div className="stat-label">
                  students gain industry exposure
                </div>
              </div>
              <div className="stat-divider" />
              <div>
                <span className="stat-num">
                  100<sup>%</sup>
                </span>
                <div className="stat-label">
                  events delivered end-to-end by us
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="hackathon-call-section">
        <div className="overlay"></div>
        <div className="hackathon-call-content">
          <h2>Bring Innovation & Skill-Based Hiring to Your Organisation</h2>
          <h6>Host a Hackathon • Partner for Hiring • Join as a Participant</h6>
          <div className="button gap-3 d-flex">
            <Button className="call-btn">Host a Hackathon</Button>
            <Button className="call-btn">Partner with Us</Button>
            <Button className="call-btn">Join Community Events</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hackathon;
