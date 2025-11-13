import { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo_Skill_Census.png";
import "../styles/Navbar.css";

function NavigationBar() {
  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // const controlNavbar = () => {
  //   if (window.scrollY > lastScrollY) setShow(false);
  //   else setShow(true);
  //   setLastScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => window.removeEventListener("scroll", controlNavbar);
  // }, [lastScrollY]);

  // Collapse navbar anytime location changes (after navigation finishes)
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Toggle handler for burger menu - must be only true/false
  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <Navbar
      expand="lg"
      // ${show ? "navbar-show" : "navbar-hide"}
      className={`navbar-custom shadow-sm `}
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
            {/* <Nav.Link
              as={Link}
              to="/aboutus"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Nav.Link> */}
            <NavDropdown title="About Us" id="aboutus-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/aboutus#vision"
                onClick={() => setExpanded(false)}
              >
                Vision
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/aboutus#about-banner"
                onClick={() => setExpanded(false)}
              >
                Why Us
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/aboutus#difference"
                onClick={() => setExpanded(false)}
              >
                Parent
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/aboutus#network"
                onClick={() => setExpanded(false)}
              >
                Network
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Training" id="training-dropdown">
              {/* <NavDropdown.Item
                as={Link}
                to="/training#training-banner"
                onClick={() => setExpanded(false)}
              >
                Training
              </NavDropdown.Item> */}
              <NavDropdown.Item
                as={Link}
                to="/training#how-we-train"
                onClick={() => setExpanded(false)}
              >
                7P Pathway
              </NavDropdown.Item>
              {/* <NavDropdown.Item
                as={Link}
                to="/training#training-pathway"
                onClick={() => setExpanded(false)}
              >
                Training pathway
              </NavDropdown.Item> */}
              <NavDropdown.Item
                as={Link}
                to="/training#domains-we-train"
                onClick={() => setExpanded(false)}
              >
                Skill development
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/training#govt-section"
                onClick={() => setExpanded(false)}
              >
                Government Apprenticeships
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/training#corptech"
                onClick={() => setExpanded(false)}
              >
                Corporate
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link
              as={Link}
              to="/training"
              onClick={() => setExpanded(false)}
            >
              Training
            </Nav.Link> */}
            <NavDropdown title="Hackathon" id="hackathon-dropdown">
              {/* <NavDropdown.Item
                as={Link}
                to="/hackathon#hackathon-banner"
                onClick={() => setExpanded(false)}
              >
                Hackathon
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/hackathon#fw-section"
                onClick={() => setExpanded(false)}
              >
                Future Workforce Pipeline
              </NavDropdown.Item> */}
              <NavDropdown.Item
                as={Link}
                to="/hackathon#our-model"
                onClick={() => setExpanded(false)}
              >
                Formats
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/hackathon#categories"
                onClick={() => setExpanded(false)}
              >
                Categories
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/hackathon#runfor"
                onClick={() => setExpanded(false)}
              >
                For Whom
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/hackathon#different"
                onClick={() => setExpanded(false)}
              >
                Our Edge
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/hackathon#values"
                onClick={() => setExpanded(false)}
              >
                Value
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/hackathon#results"
                onClick={() => setExpanded(false)}
              >
                Impact
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link
              as={Link}
              to="/hackathon"
              onClick={() => setExpanded(false)}
            >
              Hackathon
            </Nav.Link> */}
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
