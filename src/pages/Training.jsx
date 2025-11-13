import React, { useEffect,useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import "../styles/Training.css";
import heroImg from "../assets/Gemini-lady.png";

import team from "../assets/fourthflip-full.jpg"
import train_model from "../assets/talking-audience.jpg"
import business from "../assets/business-co.jpg"
import career_goals from "../assets/career-goals.png";
import upskilling from "../assets/upskilling.png";
import to_do_list from "../assets/to-do-list.png";
import training from "../assets/training.png";

//===== how we train sectionn =====
const sectors = [
  {
    labelLine1: "Profile",
    // labelLine2: "Your Goals",
    description:
      "We begin with a personalised learning assessment — your background, strengths, and career goals.",
  },
  {
    labelLine1: "Plan",
    // labelLine2: "Learning Plan",
    description:
      "Based on your goals, we design a customised curriculum — beginner or advanced, fast-track or comprehensive.",
  },
  {
    labelLine1: "Pair",
    // labelLine2: "Mentor",
    description:
      "You are paired with a domain expert who guides your learning, growth, and progress.",
  },
  {
    labelLine1: "Practice",
    // labelLine2: "Hands-On Training",
    description:
      "Interactive sessions + real case studies + practical tasks to build real skills.",
  },
  {
    labelLine1: "Project",
    // labelLine2: "Portfolio Work",
    description:
      "Work on industry-relevant projects that showcase your capability and problem-solving.",
  },
  {
    labelLine1: "Polish",
    // labelLine2: "Feedback Cycles",
    description:
      "Continuous improvement through feedback, mock reviews, and skill checkpoints.",
  },
  {
    labelLine1: "Place",
    // labelLine2: "Growth Pathway",
    description:
      "Interview preparation, CV/LinkedIn review, and career direction support.",
  },
];

//===== training pathway sectionn =====
const pathways = [
  {
    title: "Zero-to-Hero Career Path",
    description:
      "Start from the basics and become industry-ready with structured learning, hands-on projects, and career preparation.",
    image: career_goals,
  },
  {
    title: "Upskill Capsules",
    description:
      "Short, focused learning modules covering in-demand tools and technologies.",
    image: upskilling,
  },
  {
    title: "Build-Your-Own Learning Plan",
    description:
      "Create a personalised curriculum by choosing topics across tech and career skills designed around your goals and pace.",
    image: to_do_list,
  },
  {
    title: "1:1 Mentorship Track",
    description:
      "Work directly with an industry mentor for personalised skill development, portfolio guidance, and interview readiness.",
    image: training,
  },
];

//======domain we train=====
const domains = [
  {
    label: "Big Data Systems",
    skills: [
      "Data Engineering",
      "Distributed Systems",
      "ETL Pipelines",
      "Data Warehousing",
      "Real-Time Data Streaming",
      "Cloud Data Platforms",
      "Data Modelling",
      "SQL & NoSQL Databases",
    ],
    tools: [
      { name: "GitHub Copilot", icon: "🌟" },
      { name: "ChatGPT", icon: "🤖" },
      { name: "LangChain", icon: "🔗" },
      { name: "Python", icon: "🐍" },
    ],
    image: heroImg,
  },
  {
    label: "Cyber Security",
    skills: [
      "Network Security",
      "Penetration Testing",
      "SOC Fundamentals",
      "Threat Analysis",
      "Vulnerability Assessment",
      "Ethical Hacking",
      "Incident Response",
      "Security Compliance",
    ],
    tools: [
      { name: "Tableau", icon: "📊" },
      { name: "Excel", icon: "📈" },
      { name: "Pandas", icon: "🐼" },
    ],
  },
  {
    label: "FinTech",
    skills: [
      "Banking Technology",
      "Payment Systems",
      "Financial Modelling",
      "Risk & Compliance (RegTech)",
      "Digital Banking Architecture",
      "Financial Data Analysis",
      "Blockchain in Finance",
    ],
    tools: [
      { name: "Tableau", icon: "📊" },
      { name: "Excel", icon: "📈" },
      { name: "Pandas", icon: "🐼" },
    ],
  },
  {
    label: "Blockchain",
    skills: [
      "Blockchain Fundamentals",
      "Smart Contract Development",
      "Decentralised Applications (DApps)",
      "Tokenization & Web3 Ecosystems",
      "Consensus Systems",
      "Wallets & Smart Contract Security",
    ],
    tools: [
      { name: "Tableau", icon: "📊" },
      { name: "Excel", icon: "📈" },
      { name: "Pandas", icon: "🐼" },
    ],
  },
  {
    label: "Web & Mobile Media Analytics",
    skills: [
      "Digital Analytics",
      "User Behaviour Modelling",
      "App & Web Performance Tracking",
      "Campaign Analytics & Attribution",
      "Funnel Optimisation & Conversion Insights",
      "Statistical Modelling & Predictive Analysis(with R)",
      "Data Visualisation & Reporting",
    ],
    tools: [
      { name: "Tableau", icon: "📊" },
      { name: "Excel", icon: "📈" },
      { name: "Pandas", icon: "🐼" },
    ],
  },
  {
    label: "Generative AI & LLMs",
    skills: [
      "Prompt Engineering",
      "AI Model Training & Fine Tuning",
      "Machine Learning Foundations",
      "Neural Networks",
      "LLM Product Development",
      "Responsible AI & AI Ethics",
    ],
    tools: [
      { name: "Tableau", icon: "📊" },
      { name: "Excel", icon: "📈" },
      { name: "Pandas", icon: "🐼" },
    ],
  },
];

//training points
  const trainingPoints = [
    "Live expert-led sessions",
    "Hands-on labs & real business scenarios",
    "Skill assessments + progress reports",
    "Flexible delivery: weekday, weekend, online, hybrid",
  ];

function Training() {
  //how we train
  const [selected, setSelected] = useState(0);

  //pathway
  const infiniteItems = [...pathways, ...pathways];

  //Domain we train
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const activeDomain = domains[activeDomainIndex];

  //govt section
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  //tech section
  const { ref: trainingRefPoint, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  //section-scroller
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="training-page">
      {/*===== hero sectionn =====*/}
      <section
        className="training-hero-section position-relative d-flex align-items-center"
        style={{ minHeight: "95vh" }}
        id="training-banner"
      >
        {/* Background image */}
        <div className="training-hero-bg-img "></div>
        <div className="training-hero-bg-gradient"></div>
        <Container
          fluid="md"
          className="training-hero-content text-white position-relative z-2 py-5"
        >
          <Row>
            <Col lg={8} md={10}>
              <h1 className="training-hero-title mb-2">
                Learn What Matters. Build What Counts.
                <br />
                <span className="training-hero-title-bold">
                  Grow Where It Matters.
                </span>
              </h1>
              <p className="training-hero-desc mb-4">
                Hands-on tech training powered by industry experts, real
                projects, and smart learning methods.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-5">
                <button className="training-hero-btn-outline">
                  Get Your Learning Plan →
                </button>
                <button className="training-hero-btn-outline">
                  Explore Programmes →
                </button>
              </div>
              <div className="training-hero-scroll-indicator"></div>
            </Col>
          </Row>
        </Container>
        {/* Background actual image (for overlay) */}
        <img
          src={heroImg}
          alt="Training Hero"
          className="training-hero-actual-img"
        />
      </section>

      {/*===== how we train sectionn =====*/}
      <section className="how-we-train-section" id="how-we-train">
        <Container>
          <Row>
            <h3 className="how-we-train-title mt-5">
              The SkillCensus 7-P Success Pathway
            </h3>
          </Row>
          <div className="how-we-train-circle">
            <h2 className="train-circlr-arrow">
              Explore 7P's by clicking on it
            </h2>
            {/* SVG Chart */}
            <svg
              viewBox="0 0 500 500"
              width="100%"
              height="100%"
              className="how-we-train-svg"
            >
              <g>
                {/* Draw sectors */}
                {sectors.map((sector, i) => {
                  const angle = (360 / sectors.length) * i - 90;
                  const r1 = 240; // outer radius
                  const r2 = 180; // inner radius
                  const x1 = 250 + r1 * Math.cos((angle * Math.PI) / 180);
                  const y1 = 250 + r1 * Math.sin((angle * Math.PI) / 180);
                  const x2 = 250 + r2 * Math.cos((angle * Math.PI) / 180);
                  const y2 = 250 + r2 * Math.sin((angle * Math.PI) / 180);
                  const angle2 = (360 / sectors.length) * (i + 1) - 90;
                  const x3 = 250 + r1 * Math.cos((angle2 * Math.PI) / 180);
                  const y3 = 250 + r1 * Math.sin((angle2 * Math.PI) / 180);
                  const x4 = 250 + r2 * Math.cos((angle2 * Math.PI) / 180);
                  const y4 = 250 + r2 * Math.sin((angle2 * Math.PI) / 180);

                  return (
                    <g key={i}>
                      <path
                        d={`M${x1},${y1}
  A${r1},${r1} 0 0,1 ${x3},${y3}
  L${x4},${y4}
  A${r2},${r2} 0 0,0 ${x2},${y2}
  Z`}
                        fill={i === selected ? "#ffe5e5" : "none"}
                        stroke="#fff"
                        strokeWidth="2"
                      />
                      {/* Label clickable */}
                      <text
                        x={
                          250 +
                          210 *
                            Math.cos((((angle + angle2) / 2) * Math.PI) / 180)
                        }
                        y={
                          250 +
                          210 *
                            Math.sin((((angle + angle2) / 2) * Math.PI) / 180)
                        }
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fontSize="22"
                        fill={i === selected ? "#223dce" : "#bad4f9"}
                        style={{
                          fontWeight: 600,
                          cursor: "pointer",
                          userSelect: "none",
                        }}
                        transform={`rotate(${(angle + angle2) / 2 + 90} ${
                          250 +
                          210 *
                            Math.cos((((angle + angle2) / 2) * Math.PI) / 180)
                        } ${
                          250 +
                          210 *
                            Math.sin((((angle + angle2) / 2) * Math.PI) / 180)
                        })`}
                        onClick={() => setSelected(i)}
                      >
                        {sector.labelLine1}
                      </text>
                    </g>
                  );
                })}
                {/* Center Circle */}
                <circle cx="250" cy="250" r="150" fill="#223dce" />
                {/* Center Content */}
                <text
                  x="250"
                  y="220"
                  textAnchor="middle"
                  fontSize="30"
                  fontWeight="700"
                  fill="#fff"
                >
                  {selected + 1}.{sectors[selected].labelLine1}
                </text>
                <text
                  x="380"
                  y="240"
                  textAnchor="middle"
                  fontSize="60"
                  fontWeight="700"
                  fill="#fff"
                  rotate="350"
                  className="arrow"
                >
                  →
                </text>
                <foreignObject x="125" y="240" width="250" height="120">
                  <div className="circle-desc">
                    {sectors[selected].description}
                  </div>
                </foreignObject>
              </g>
            </svg>
          </div>
        </Container>
      </section>

      {/*===== training pathway sectionn =====*/}
      <section className="training-pathway-section py-5" id="training-pathway">
        <div className="container text-center">
          <p className="section-subtitle">
            Choose your learning journey Your goals, your pace.
          </p>
          <h2 className="section-title mb-5">Training Pathways</h2>

          <div className="scroll-container">
            <div className="scroll-content">
              {infiniteItems.map((item, index) => (
                <div key={index} className="pathway-card shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pathway-img mb-3"
                  />
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-secondary mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*===== domain we train===== */}
      <section className="domains-section" id="domains-we-train">
        <Container>
          <Row>
            <h2>Domains We Train In</h2>
            <p>Future-focused. Industry-driven.</p>
          </Row>
          <div className="domains-container">
            <aside className="domains-sidebar">
              {domains.map((d, i) => (
                <button
                  className={`domain-tab${
                    i === activeDomainIndex ? " is-active" : ""
                  }`}
                  key={d.label}
                  onClick={() => setActiveDomainIndex(i)}
                  tabIndex={0}
                >
                  {d.label}
                </button>
              ))}
            </aside>
            <main className="domains-main">
              <div className="domain-header">
                <h2>{activeDomain.label}</h2>
              </div>
              <div>
                <div className="domains-skills">
                  <h3>Skills</h3>
                  <Row>
                    <Col lg={7}>
                      <ul>
                        {activeDomain.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </Col>
                    {/* <Col lg={5} className="mt-0 d-flex justify-content-center">
                      <img src={activeDomain.image} alt="skill-img" />
                    </Col> */}
                  </Row>
                </div>
                {activeDomain.tools && (
                  <div className="domains-tools">
                    {/* <h3>Tools</h3>
                    <div className="domains-tools-row">
                      {activeDomain.tools.map((tool) => (
                        <span className="tool" key={tool.name}>
                          {tool.icon} {tool.name}
                        </span>
                      ))}
                    </div> */}
                  </div>
                )}
              </div>
            </main>
          </div>
        </Container>
      </section>

      {/*=======govt section====== */}
      {/* <section className="py-5 govt-section" id="govt-section">
        <Container>
          <h2 className="mb-5 text-center display-4">
            Government-Funded Professional Tech Upskilling Programme
          </h2>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-8 d-flex">
              <div
                ref={ref}
                className={`card why-choose-card flex-fill h-100 border-0 shadow-sm${
                  inView ? " visible" : ""
                }`}
              >
                <div className="card-body">
                  <div
                    className="mb-3"
                    style={{ fontSize: "2rem", color: "#000" }}
                  >
                    ★
                  </div>
                  <h5 className="card-title fw-bold">
                    In a world where technology evolves fast, staying ahead
                    matters.
                  </h5>
                  <p className="card-text" style={{ whiteSpace: "pre-line" }}>
                    Enrol in a fully-funded, nationally recognised upskilling
                    programme designed for employed professionals in the UK to
                    gain expertise in high-demand tech fields.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <div
                ref={ref}
                className={`card why-choose-card flex-fill h-100 border-0 shadow-sm${
                  inView ? " visible" : ""
                }`}
              >
                <div className="card-body cyber"></div>
              </div>
            </div>
            <div
              className={`col-12 col-md-6 col-lg-4 d-flex`}
            >
              <div
                ref={ref}
                className={`card why-choose-card flex-fill h-100 border-0 shadow-sm${
                  inView ? " visible" : ""
                }`}
              >
                <div className="card-body">
                  <div
                    className="mb-3"
                    style={{ fontSize: "2rem", color: "#000" }}
                  >
                    ★
                  </div>
                  <h5 className="card-title fw-bold">Programme Highlights</h5>
                  <ul>
                    <li>
                      <p
                        className="card-text"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        100% UK government-funded
                      </p>
                    </li>
                    <li>
                      <p
                        className="card-text"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Industry-recognised certification pathway
                      </p>
                    </li>
                    <li>
                      <p
                        className="card-text"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Live online training by senior industry experts
                      </p>
                    </li>
                    <li>
                      <p
                        className="card-text"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Hands-on labs, real business scenarios, & practical
                        skill development
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <div
                ref={ref}
                className={`card why-choose-card flex-fill h-100 border-0 shadow-sm${
                  inView ? " visible" : ""
                }`}
              >
                <div className="card-body">
                  <div
                    className="mb-3"
                    style={{ fontSize: "2rem", color: "#000" }}
                  >
                    ★
                  </div>
                  <h5 className="card-title fw-bold">Purpose & Benefits</h5>
                  <ul>
                    <li>
                      <p
                        className="card-text"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Build in-demand tech capabilities
                      </p>
                    </li>
                    <li>
                      <p
                        className="card-text"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Strengthen professional growth & future readiness
                      </p>
                    </li>
                    <li>
                      <p
                        className="card-text"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Upskill at no cost to you or your employer
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 d-flex">
              <div
                ref={ref}
                className={`card why-choose-card flex-fill h-100 border-0 shadow-sm${
                  inView ? " visible" : ""
                }`}
              >
                <div className="card-body devops"></div>
              </div>
            </div>
          </div>
          <div className="row mt-4 dflex  justify-content-center">
            <Button
              variant="primary"
              className="discover-btn w-50 shadow"
              onClick={() => navigate("")}
            >
              <a href="https://forms.gle/zZfypzNbqW5P58Tb7">
                Apply for the progam now →
              </a>
            </Button>
            <p className="text-center">Hurry, Limited Seats Available !</p>
          </div>
        </Container>
      </section> */}
      <section className="py-5 govt-section" id="govt-section">
        <Container>
          <h2 className="mb-5 text-center display-4">
            Government-Funded Professional Tech Upskilling Programme
          </h2>

          <div className="row g-4">
            {[
              {
                type: "text",
                icon: "★",
                title:
                  "In a world where technology evolves fast, staying ahead matters.",
                desc: "Enroll in a fully-funded, nationally recognised upskilling programme designed for employed professionals in the UK.",
              },
              { type: "image", className: "cyber" },
              { type: "image", className: "security" },
              {
                type: "text",
                icon: "★",
                title: "Programme Highlights",
                list: [
                  "100% UK government-funded",
                  "Industry-recognised certification pathway",
                  "Live online training by senior industry experts",
                  "Hands-on labs & real scenarios",
                ],
              },
              {
                type: "text",
                icon: "★",
                title: "Purpose & Benefits",
                list: [
                  "Build in-demand tech capabilities",
                  "Strengthen professional growth & readiness",
                  "Upskill at no cost to you or employer",
                ],
              },
              { type: "image", className: "devops" },
            ].map((card, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.15,
              });

              return (
                <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
                  <div
                    ref={ref}
                    className={`card why-choose-card flex-fill h-100 border-0 shadow-sm ${
                      inView ? "visible" : "hidden-card"
                    }`}
                  >
                    <div className={`card-body ${card.className || ""}`}>
                      {card.type === "text" && (
                        <>
                          <div className="mb-3" style={{ fontSize: "2rem" }}>
                            {card.icon}
                          </div>
                          <h5 className="card-title fw-bold">{card.title}</h5>

                          {card.desc && <p>{card.desc}</p>}

                          {card.list && (
                            <ul>
                              {card.list.map((li, i) => (
                                <li key={i}>
                                  <p>{li}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row mt-4 justify-content-center">
            <Button variant="primary" className="discover-btn w-50 shadow">
              <a href="https://forms.gle/zZfypzNbqW5P58Tb7">
                Apply for the programme now →
              </a>
            </Button>
            <p className="text-center">Hurry, Limited Seats Available!</p>
          </div>
        </Container>
      </section>

      {/*====corporate tech===== */}
      <section className="corptech-section" id="corptech">
        <div className="corptech-container">
          <div className="corptech-image">
            <img src={business} alt="img" />
          </div>
          <div className="corptech-content">
            {/* <h3>Specialist topic areas</h3> */}
            <h1>Corporate Tech & Digital Workforce Training</h1>
            <p>
              Empower your teams with modern, practical tech skills that drive
              business performance.
            </p>
            <div className="corptech-stats">
              <div>
                <span className="stat-num">
                  100<sup>+</sup>
                </span>
                <div className="stat-label">Core topic areas covered.</div>
              </div>
              {/* <div className="stat-divider" /> */}
              <div>
                <span className="stat-num">
                  30<sup>+</sup>
                </span>
                <div className="stat-label">
                  Years of experienced training professionals
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="corptech-container mt-5">
          <div className="corptech-image">
            <img src={team} alt="" />
          </div>
          <div className="corptech-content ">
            {/* <h3>Specialist topic areas</h3> */}
            <h1>Programmes Designed For Companies</h1>
            {/* <p>
              Empower your teams with modern, practical tech skills that drive
              business performance.
            </p> */}
            <div className="corptech-stats">
              <ul>
                <li>Custom tech upskilling tracks (beginner → advanced)</li>
                <hr />
                <li>Tool-specific & stack-specific training</li>
                <hr />
                <li>
                  Role-based learning paths (engineers, analysts, PMs, security
                  teams)
                </li>
                <hr />
                <li>Executive tech briefings & digital leadership workshops</li>
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
              <h2 className="fw-bold training-title mb-3">Training Model</h2>
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
            <div className="col-lg-6 col-md-12">
              <img
                src={train_model}
                alt="Training Team"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/*======call section======= */}
      <section className="call-section">
        <h2>Ready to Start Learning?</h2>
        <h5 className="text-center">Tell us your goal, we’ll guide you to the right programme.</h5>
        <button className="btn-primary btn">
          Explore programmes &amp; options
        </button>
      </section>
    </div>
  );
}

export default Training;
