import Top from "./Components/Top";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Exp_Edu from "./Components/Exp_Edu";
import MyProjects from "./Components/MyProjects";
import GetinTouch from "./Components/GetinTouch";

import "./App.css";

import { useRef, forwardRef } from "react";
function App() {
  return (
    <div className="min-h-screen text-white font-sans relative">
      
      {/* Fixed background layer */}
      <div className="fixed inset-0 -z-10  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <Top />
      <About />
      <Technologies />
      <Exp_Edu />
      <MyProjects />
      <GetinTouch />
    </div>
  );
}

export default App;