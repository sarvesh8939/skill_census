import { Container, Row, Col } from "react-bootstrap";
import {
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../assets/Logo_Skill_Census.png";

function Footer() {
  return (
    <footer className="footer-main py-5 text-light ">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <div className="fw-bold fs-3 mb-2"  >
              <img src={logo} alt="Skill Census Logo"  className="footer-logo"/>
            </div>
            {/* <div className="mb-2">
              <span className="fw-bold">The Future Learns Here.</span>
            </div> */}
            <div className="footer-note ">
              A division of Trinitysoft solutions ltd{" "}
              <a
                href="https://www.trinitysoft.co.uk"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                (www.trinitysoft.co.uk)
              </a>
            </div>
          </Col>

          <Col md={2} xs={6} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="/aboutus" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/training" className="footer-link">
                  Training
                </a>
              </li>
              <li>
                <a href="/hackathon" className="footer-link">
                  Hackathons
                </a>
              </li>
              <li>
                <a href="/contactus" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blog" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} xs={6} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Contact</h6>
            <div className="mb-2">
              <FaEnvelope className="footer-icon" />{" "}
              <a href="mailto:info@skillcensus.co.uk" className="footer-link">
                info@skillcensus.co.uk
              </a>
            </div>
            <div className="mb-2">
              <FaGlobe className="footer-icon" />{" "}
              <a
                href="https://www.skillcensus.co.uk"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.skillcensus.co.uk
              </a>
            </div>
          </Col>

          <Col md={3} xs={12}>
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="footer-social">
              <a
                href="https://linkedin.com"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://youtube.com"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
