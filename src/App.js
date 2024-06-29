import Photoss from "./Photo/Photoss";
import Templete from "./Templete/Templete";
import Contact from "./Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./About/About";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Photoss />} />
        <Route path="/photoss" element={<Photoss />} />
        <Route path="/template" element={<Templete />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
