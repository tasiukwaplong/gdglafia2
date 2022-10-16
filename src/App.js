import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/home/Home";
import Bottomnav from "./components/Bottomnav";
import Event from "./pages/events/Event";
import About from "./pages/about/About";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [intersec, setIntersec] = useState(false);
  console.log(intersec);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Bottomnav toggle={intersec} />
      <Footer toggle={setIntersec} />
    </Router>
  );
}

export default App;
