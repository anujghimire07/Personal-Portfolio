import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaLayerGroup,
} from "react-icons/fa";

import { FiDownload } from "react-icons/fi";

const Top = () => {
  return (
    <div>
      {/* name mark and socials */}
      <div>
        <div>AG</div>

        {/* instagram svg */}
        <a href="https://www.instagram.com/anuz_ghimire_/" target="_blank">
          <FaInstagram></FaInstagram>
        </a>

        {/* facebook svg */}
        <a href="https://www.facebook.com/anuj.ghimire.12" target="_blank">
          {" "}
          <FaFacebook></FaFacebook>
        </a>

        {/* github svg */}
        <a href="https://github.com/anujghimire07" target="_blank">
          <FaGithub></FaGithub>
        </a>

        {/* linkedin svg */}
        <a
          href="https://www.linkedin.com/in/anuj-ghimire-788279348/"
          target="_blank"
        >
          <FaLinkedin></FaLinkedin>
        </a>
      </div>
      {/* introduction */}
      <div>
        <div>
          <h1>Anuj Ghimire</h1>
          <h2>JavaScript | MERN Stack</h2>
          <p>
            I’m a Full-Stack Developer from Nepal who loves the intersection of
            great design and solid engineering. I craft responsive, modern
            frontends using React and Tailwind CSS, and build reliable, scalable
            backends with Node.js, Express.js, MongoDB, and RESTful Web APIs. I
            enjoy turning ideas into clean, functional, and user-friendly
            digital experiences.
          </p>
          <button>
            <FiDownload />
            Download CV
          </button>
          <button>
            <FaLayerGroup />
            See My Work
          </button>
        </div>
        <div>
          <img src="/MY PIC.jpeg" alt="My image" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Top;
