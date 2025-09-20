import { Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FSApp from "./practicals/FSApp";
import PracticalApp from "./practicals/PracticalApp";

export default function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fsapp" element={<FSApp />} />
        <Route path="/practicals" element={<PracticalApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>404 - Page Not Found</h2>
      <p>We couldn't find that page.</p>
      <Link to="/" style={{ color: "#0077b6" }}>Go back Home</Link>
    </div>
  );
}
