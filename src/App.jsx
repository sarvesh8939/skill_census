import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Training from "./pages/Training";
import Hackathon from "./pages/Hackathon";
import ContactUs from "./pages/ContactUs";
import ThankYou from "./pages/ThankYou";
import Blog from "./pages/Blog";
import EduNews from "./pages/EduNews";
import BlogDetail from "./pages/BlogDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // instantly scrolls to top on route change
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <NavigationBar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/training" element={<Training />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/edunews" element={<EduNews />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
