import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo_Skill_Census.png";
import "../styles/Navbar.css";

function NavigationBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Collapse navbar anytime location changes (after navigation finishes)
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Toggle handler for burger menu - must be only true/false
  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom shadow-sm ${
        show ? "navbar-show" : "navbar-hide"
      }`}
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Skill Census Logo"
            className="navbar-logo me-2"
          />
          {/* <span className="fw-bold text-primary">SkillCensus</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              as={Link}
              to="/aboutus"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/training"
              onClick={() => setExpanded(false)}
            >
              Training
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/hackathon"
              onClick={() => setExpanded(false)}
            >
              Hackathon
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contactus"
              onClick={() => setExpanded(false)}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={() => setExpanded(false)}>
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/edunews"
              onClick={() => setExpanded(false)}
            >
              Edu News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
