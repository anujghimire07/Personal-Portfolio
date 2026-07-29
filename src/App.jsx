import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen theme-text font-sans relative">
        <div
          className="fixed inset-0 -z-10 theme-bg"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 80% at 50% -20%, var(--gradient-base), rgba(255,255,255,0))",
          }}
        />
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
