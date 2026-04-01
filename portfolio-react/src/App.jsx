import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Parcours from "./pages/Parcours";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
       <ScrollToTop />
      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />
      
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/parcours" element={<Parcours />} />
      </Routes>

      <Footer />
    </>
  );
}
