import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "../styles/Home.css";
import studentImage from "../assets/student.jpg";
import learn from "../assets/learn.jpg";
import communityImage from "../assets/community.jpg";

import education from "../assets/education.png"
import office from "../assets/office.png"
import hackathon from "../assets/hackathon.png"
import path from "../assets/path.png"

import discover from "../assets/discovery.png"
import list from "../assets/list.png"
import operation from "../assets/operation.png"

import brain_understand from "../assets/think.png"
import skill from "../assets/skill.png"
import person from "../assets/user.png"
import experience from "../assets/experience.png"


function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: (
        // Target icon
        <svg
          width="42"
          height="42"
          fill="none"
          stroke="#212227"
          strokeWidth="2"
        >
          <circle cx="21" cy="21" r="14" />
          <circle cx="21" cy="21" r="3" fill="none" />
          <path d="M21 9V7M21 35v-2M9 21H7M35 21h-2M29.2 12.8l1.4-1.4M11.4 30.6l1.4-1.4M29.2 29.2l1.4 1.4M11.4 11.4l1.4 1.4" />
        </svg>
      ),
      title: "Expert opinions and industry updates.",
      desc: "Access 10,000+ courses in AI, business, technology, and more.",
    },
    {
      icon: (
        // Certificate icon
        <svg
          width="42"
          height="42"
          fill="none"
          stroke="#212227"
          strokeWidth="2"
        >
          <rect x="8" y="11" width="26" height="20" rx="3" />
          <circle cx="21" cy="21" r="3" />
          <path d="M17 28l4-4 4 4" />
        </svg>
      ),
      title: "Peer discussions and knowledge-sharing spaces",
      desc: "Get certificates for every course you finish and boost your chances of getting hired after your trial ends at no additional cost.",
    },
    {
      icon: (
        // Star icon
        <svg
          width="42"
          height="42"
          fill="none"
          stroke="#212227"
          strokeWidth="2"
        >
          <polygon points="21,10 24,18 33,18 25,22.5 28,31 21,25.5 14,31 17,22.5 9,18 18,18 21,10" />
        </svg>
      ),
      title:
        "Opportunities to participate in projects, events, and global initiatives",
      desc: "Take your skills to the next level with expert-led courses and Coursera Coach, your AI-powered guide.",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={6}>
              <h1>
                <span className="highlight">Empowering Learners</span> for the
                World of Tomorrow
              </h1>
              <p>
                Skill Census stands apart as a new-generation education platform
                built for professionals and graduates who want more than just
                courses, they want transformation. Our training is shaped by
                real industry needs, guided by experts with decades of global
                experience, and designed for the skills that matter today and
                will lead tomorrow.
              </p>
              <div className="mt-4 home-buttons">
                <Button
                  className="btn"
                  variant="primary"
                  onClick={() => navigate("/training")}
                >
                  Explore Training
                </Button>
                <Button
                  variant="dark"
                  className="btn"
                  onClick={() => navigate("/hackathon")}
                >
                  Learn Through Experience
                </Button>
              </div>
            </Col>
            <Col md={12} lg={6} className="text-center mt-3">
              <img src={studentImage} alt="Student" className="hero-img" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="whatwedo-section ">
        <Container>
          <Row className="text-center ">
            <h2>What We Do</h2>

            <p className="mt-4">
              We provide innovative learning paths that combine practical
              experience, mentorship, and project-based education. Our goal is
              to help students and professionals upskill and stay relevant in a
              fast-changing digital world.
            </p>

            <h3 className="mt-4">
              "A Smarter Way to Learn. <br /> A Stronger Way to Grow."
            </h3>
          </Row>

          {/*Flip Cards inside What We Do */}
          <Row className="mt-5 g-4 justify-content-center text-center">
            {[
              {
                icon: education,
                title: "Professional Training & Upskilling",
                backText:
                  "Structured live online programmes in high-demand technologies, led by experienced industry mentors.",
              },
              {
                icon: office,
                title: "Corporate Learning Solutions",
                backText:
                  "Tailored training for organisations that need to equip their teams with new-age digital capabilities.",
              },
              {
                icon: hackathon,
                title: "Hackathons & Industry Collaborations",
                backText:
                  "Real-world, project-driven events that connect learning to innovation.",
              },
              {
                icon: path,
                title: "Career Guidance Consultations",
                backText:
                  "Personalised sessions with global experts to help define your career direction and growth strategy.",
              },
            ].map((item, index) => (
              <Col
                key={index}
                lg={3}
                md={6}
                sm={6}
                xs={12}
                className="d-flex justify-content-center"
              >
                <div className="flip-card mb-5">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      {/* <img
                        src={item.icon}
                        alt=""
                        className="flipcard-img position-absolute bottom-50"
                      /> */}
                      <h3 className="">{item.title}</h3>
                    </div>
                    <div className="flip-card-back">
                      <p>{item.backText}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Skill Census Section */}
      <section className="py-5">
        <Container>
          <h2 className="mb-5 text-center display-4">
            WHY CHOOSE SKILL CENSUS?
          </h2>
          <div className="row g-4">
            {[
              {
                title: "Future-Focused Curriculum",
                description:
                  "We only teach skills that match today’s and tomorrow’s career opportunities.",
              },
              {
                title: "Expert-Led Learning",
                description:
                  "Every session is delivered by professionals with years of industry experience.",
              },
              {
                title: "Tailored for Every Learner",
                description:
                  "Whether you’re a graduate or a working professional, our programmes adapt to your goals and level.",
              },
              {
                title: "Edutainment-Driven",
                description:
                  "We believe learning should be engaging. Our method combines education with games, fun, interaction and experience.",
              },
              {
                title: "Global Mentorship Network",
                description:
                  "Learn from experts across industries and continents.",
              },
              {
                title: "Career Guidance Support",
                description:
                  "Our consultants help you identify the right roles, upskill paths, and career roadmap.",
              },
            ].map((feature, idx) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });
              return (
                <div key={idx} className="col-12 col-md-6 col-lg-4 d-flex">
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
                      <h5 className="card-title fw-bold">{feature.title}</h5>
                      <p
                        className="card-text"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row mt-4 dflex justify-content-center">
            <Button
              variant="primary"
              className="discover-btn w-25 shadow"
              onClick={() => navigate("/aboutus")}
            >
              Discover More About Us
            </Button>
          </div>
        </Container>
      </section>

      {/* Career Consultation Section */}
      <section className="py-5">
        <Container className="career-section">
          <h2 className="text-center fw-bold mb-3 display-5">
            Career Consultation
          </h2>
          <h4 className="text-center fw-semibold mb-4">
            Plan Your Next Move with Clarity
          </h4>
          <p
            className="text-center mx-auto mb-4 lead "
            // style={{ maxWidth: 800 }}
          >
            At Skill Census, we understand that every career journey is
            different. Whether you’re a recent graduate exploring your first
            opportunity or an experienced professional planning a transition,
            our career guidance consultations connect you with mentors <br />{" "}
            who have walked the path themselves.
          </p>
          <p
            className="text-center mx-auto mb-5"
            style={{ maxWidth: 820, fontSize: 20 }}
          >
            Our experts come from diverse industries and global markets. They
            help you,
          </p>
          <div className="row align-items-center">
            {/* Left: Features */}
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              {[
                {
                  icon: brain_understand,
                  title:
                    "Understand which roles best align with your background and ambitions.",
                  desc: "Get effective care with reduced time needed for your treatment and less inconvenience.",
                  color: "#B8E1FF",
                },
                {
                  icon: skill,
                  title:
                    "Identify the skills, certifications, and tools needed to reach those roles.",
                  desc: "Modern methods and skilled staff ensure your visits are fast and efficient.",
                  color: "#FBE7FF",
                },
                {
                  icon: person,
                  title:
                    "Refine your CV and professional profile to stand out in competitive markets.",
                  desc: "Our treatments are designed for lasting results with fewer returns needed.",
                  color: "#FFECE8",
                },
                {
                  icon: experience,
                  title:
                    "Gain practical insights from real experiences not just generic advice.",
                  desc: "Enjoy a relaxing atmosphere and gentle care for a pleasant experience.",
                  color: "#E8FFF5",
                },
              ].map((feature, idx) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.15,
                });
                return (
                  <div
                    ref={ref}
                    key={idx}
                    className={`feature-card d-flex align-items-start mb-4 px-3 py-3 shadow-sm rounded-3${
                      inView ? " visible" : ""
                    }`}
                    style={{
                      background: feature.color,
                      transitionDelay: `${idx * 80}ms`,
                      minHeight: 100,
                    }}
                  >
                    <div className="me-3 flex-shrink-0">
                      <img
                        src={feature.icon}
                        alt=""
                        srcset=""
                        className="career-icon"
                      />
                    </div>
                    <div>
                      <div className="fw-bold mb-1" style={{ fontSize: 20 }}>
                        {feature.title}
                      </div>
                      {/* <div style={{ fontSize: 15, color: "#474a57" }}>
                        {feature.desc}
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Right: Image */}
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div
                className="feature-img-wrapper rounded-4 shadow-lg overflow-hidden"
                style={{
                  background: "#eaf5ff",
                  padding: "16px",
                  maxWidth: 405,
                }}
              >
                <img
                  src={studentImage}
                  alt="Dentist Consultation"
                  className="feature-img-lg"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            {/* <button className="btn btn-dark btn-lg px-4 mt-2 shadow">
              Book a Career Consultation
            </button> */}
            <Button
              variant="primary"
              className="btn btn-dark btn-lg px-4 mt-2 shadow"
              onClick={() => navigate("/contactus")}
            >
              Book a Career Consultation
            </Button>
          </div>
        </Container>
      </section>

      {/* The Edutainment Way Section */}
      <section className="edutainment-section py-5">
        <Container className="edutainment-container">
          <Row className="align-items-center">
            {/* LEFT: TEXT SECTION */}
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <div className="edutainment-text">
                <h2>The Edutainment Way</h2>

                <h4>How We Make Learning Stick</h4>
                <p>
                  At Skill Census, Edutainment isn’t just a concept, it’s our
                  entire learning philosophy. We’ve reimagined how professionals
                  absorb, retain, and apply knowledge by turning learning into
                  an active, emotional, and experiential process.
                </p>
              </div>
            </Col>

            {/* RIGHT: SECTION */}
            <Col lg={6} md={12}>
              <div className="edu-process-panel ms-3">
                {/* Step 1: Discover */}
                <div className="edu-process-step d-flex align-items-center mb-3">
                  <div className="edu-step-icon me-3">
                    <img src={discover} alt="Discover" width={38} height={38} />
                  </div>
                  <div>
                    <div className="fw-bold edu-step-title mb-1">Discover</div>
                    <div className="edu-step-desc">
                      We analyze your needs and goals, ensuring a strategy
                      tailored to your unique requirements.
                    </div>
                  </div>
                </div>

                {/* Step 2: Strategize */}
                <div className="edu-process-step d-flex align-items-center mb-3">
                  <div className="edu-step-icon me-3">
                    <img src={list} alt="Strategize" width={38} height={38} />
                  </div>
                  <div>
                    <div className="fw-bold edu-step-title mb-1">
                      Strategize
                    </div>
                    <div className="edu-step-desc">
                      With research-driven insights, we craft innovative
                      solutions to maximise efficiency and impact.
                    </div>
                  </div>
                </div>

                {/* Step 3: Execute */}
                <div className="edu-process-step d-flex align-items-center">
                  <div className="edu-step-icon me-3">
                    <img src={operation} alt="Execute" width={38} height={38} />
                  </div>
                  <div>
                    <div className="fw-bold edu-step-title mb-1">Execute</div>
                    <div className="edu-step-desc">
                      Our team implements the plan with precision, ensuring
                      seamless execution and measurable success.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Community Section */}
      <section className="community-section py-5">
        <Container>
          <Row className="align-items-center flex-lg-row flex-column-reverse">
            {/* LEFT: IMAGE SECTION */}
            <Col lg={6} md={12} className="text-center mt-4 mt-lg-0">
              <img
                src={communityImage}
                alt="Community of Mentors and Learners"
                className="img-fluid community-image"
              />
            </Col>

            {/* RIGHT: TEXT SECTION */}
            <Col lg={6} md={12}>
              <div className="community-text">
                <h2>Community of Mentors & Learners</h2>
                <h4>Grow Together, Globally</h4>
                <p>
                  Skill Census is more than a learning platform, it’s a
                  community that connects people who share the same goal: to
                  grow, learn, and lead. Our ecosystem brings together mentors,
                  professionals, students, and innovators from around the world
                  to exchange knowledge, share insights, and collaborate on new
                  ideas.
                </p>

                <p>
                  It’s not just about learning, it’s about belonging to a
                  network that continues to support and inspire your journey
                  long after the course ends.
                </p>
              </div>
            </Col>
          </Row>
          <Row
            className="invest-row mt-5 py-4 gx-lg-5 gx-3"
            style={{ background: "#f2f6fb", borderRadius: 18 }}
          >
            <Row>
              <h2 className="text-center mb-4 fw-bold">
                Through our webinars, newsletters, and future discussion forums,
                <br />
                members gain access to
              </h2>
            </Row>
            <Col lg={4} md={12} className="d-flex justify-content-center">
              <FeatureBox {...features[0]} />
            </Col>
            <Col lg={4} md={12} className="d-flex justify-content-center">
              <FeatureBox {...features[1]} /> 
            </Col>
            <Col lg={4} md={12} className="d-flex justify-content-center">
              <FeatureBox {...features[2]} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final Call to Action Section */}
      <section className="final-call-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* LEFT: TEXT SECTION */}
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <div className="final-call-text">
                {/* <h4>Final Call to Action: </h4> */}
                <h2>
                  Build the Career You Deserve <br />
                  The Future Learns Here.
                </h2>
                <p>
                  At Skill Census, we don’t just prepare you for today we equip
                  you for what comes next. Learn with industry experts, grow
                  through experience, and become part of a global community that
                  believes in learning without limits.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

 function FeatureBox({ icon, title, desc }) {
   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.14 });
   return (
     <div
       ref={ref}
       className={`feature-upbox px-2 px-md-3 py-2 my-3 text-center ${
         inView ? "feature-upbox-visible" : ""
       }`}
       style={{ maxWidth: 420 }}
     >
       <div className="mb-1">{icon}</div>
       <div className="fw-bold mb-1 fs-5">{title}</div>
       {/* <div className="fs-6" style={{ color: "#2d3748" }}>
         {desc}
       </div> */}
     </div>
   );
 }  

export default Home;
