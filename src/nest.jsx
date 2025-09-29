import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import GraphicDesign from "./pages/GraphicDesign";
import Cybersecurity from "./pages/Cybersecurity";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>
  <ToastContainer position="top-right" autoClose={1000} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
