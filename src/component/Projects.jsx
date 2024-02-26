import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import viteSVG from "../assets/svg/viteLogo.svg";
import netlifySVG from "../assets/svg/netlifyLogo.svg";
import "../css/Projects.css";
import currencyConvertor from "../assets/Currency-convertor.jpg";
import personalPort from "../assets/personalPortfolio.jpg";
import qrGenSite from "../assets/QRGeneratorSite.jpg";
import {
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const [activeIndex, setCurrentIndex] = useState(0);
  const reactLogo = (
    <FontAwesomeIcon icon={faReact} style={{ color: "cyan" }} />
  );
  const htmlLogo = (
    <FontAwesomeIcon icon={faHtml5} style={{ color: "orangered" }} />
  );
  const cssLogo = <FontAwesomeIcon icon={faCss3} style={{ color: "blue" }} />;
  const jsLogo = (
    <FontAwesomeIcon icon={faJsSquare} style={{ color: "gold" }} />
  );
  const netlifyLogo = (
    <img src={netlifySVG} className="netlifyLogo" alt="Netlify Logo" />
  );
  const viteLogo = <img src={viteSVG} className="viteLogo" alt="Vite Logo" />;

  function updateIndex(newIndex) {
    newIndex < 0
      ? (newIndex = 0)
      : newIndex >= projects.length
      ? (newIndex = projects.length - 1)
      : newIndex;
    setCurrentIndex(newIndex);
  }

  const projects = [
    {
      name: "Personal Portfolio",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
        </>
      ),
      description: (
        <>
          <p>
            This is my portfolio website built using{" "}<em>React and Vite </em> is a modern 
            and efficient way to showcase my skills and projects Utilizing React allows for dynamic 
            and interactive components, enabling seamless navigation and engaging 
            user experiences. Vite, as a fast build tool, ensures rapid development 
            and efficient bundling, resulting in quick loading times for the website. 
            By combining these technologies, the portfolio website can feature a 
            polished design, responsive layout, and smooth transitions, effectively 
            highlighting your talents and accomplishments while leaving a lasting 
            impression on visitors.
          </p>
        </>
      ),
      demoUrl: "https://voguevalue.netlify.app",
      codeUrl: "https://github.com/aksarvaiya/qr-code-generator",
      image: personalPort,
    },
    {
      name: "QR Code Generator",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>react-qr-code</p>
        </>
      ),
      description: (
        <>
          <p>
            This website makes use of the library react-qr-code to generate,
            customize, and download your own QR Codes for websites, business
            cards, social media, you name it! This project highlights some
            interesting features possible with the library such as{" "}
            <em>SVG to PNG conversion for file downloads</em> and{" "}
            <em>state management to handle the styling of SVG elements</em>.
          </p>
        </>
      ),
      demoUrl: "https://qr-box.netlify.app/",
      codeUrl: "https://github.com/aksarvaiya/qr-code-generator",
      image: qrGenSite,
    },
    {
      name: "Currency Convertor",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>Currency API</p>
        </>
      ),
      description: (
        <>
          <p>
          This web application built with <em>React.js</em> and <em>Vite</em> that enables users to quickly and accurately convert 
          between various currencies. Leveraging live API integration, the converter ensures up-to-date exchange rates for 
          seamless transactions and precise conversions.
          </p>
        </>
      ),
      demoUrl: "https://currencyconvertorapp.netlify.app/",
      codeUrl: "https://github.com/aksarvaiya/currency-convertor",
      image: currencyConvertor,
    },
  ];

  return (
    <div className="projectWheelContainer" onTouchMove={updateIndex}>
      <div
        className="projectWheel"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, index) => {
          return (
            <section className="project" key={index}>
              <div className="projectImg">
                <img className="" src={project.image} />
              </div>
              <div className="projectInfo">
                <h3>{project.name}</h3>
                <div className="projectStacks">{project.techstack}</div>
                <div className="projectDeps">{project.dependencies}</div>
                <div className="projectDesc">{project.description}</div>
                <span>
                  <a target="_blank" href={project.codeUrl}>
                    Code
                  </a>{" "}
                  &nbsp;
                  <a target="_blank" href={project.demoUrl}>
                    Live Demo
                  </a>
                </span>
              </div>
            </section>
          );
        })}
      </div>

      <div className="wheel-btns">
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>{" "}
        </button>
        <div className="indicators">
          {projects.map((project, index) => {
            return (
              <button
                className="indicator-btns"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
