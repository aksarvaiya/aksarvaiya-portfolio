import React, { useRef } from "react";
import conf from '../conf/conf.js'
import "../css/HomePage.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Lottie from "lottie-react";
import waveSVG from "../assets/svg/101786-wave.json";
import emailSVG from "../assets/svg/95247-email.json";
import viteSVG from "../assets/svg/viteLogo.svg";
import netlifySVG from "../assets/svg/netlifyLogo.svg";
import vuejsSVG from "../assets/svg/vue-js-seeklogo.svg";
import nodeJSSVG from "../assets/svg/nodejs-seeklogo.svg";
import mongoDBSVG from "../assets/svg/MongoDB-SVG.svg";
import myResume from "../assets/pdf/ankit-resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import Projects from "./Projects";
import emailjs from "@emailjs/browser";

export default function HomePage() {
  const ref = useRef();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(conf.seviceID, conf.templateID, form.current, 
     conf.publicKEY ,
      )
      .then(
        () => {
          alert("Message Sent");
          console.log("SUCCESS!", form.current.user_name);
          form.current.user_name.value= "",
          form.current.user_email.value="",
          form.current.message.value=""
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="homePage">
      <Parallax pages={4} ref={ref}>
        {/* Navigation Section */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1.5 }}
          style={{ height: "fit-content" }}
        >
          <nav>
            <h1
              className="logo"
              ref={ref}
              onClick={() => ref.current.scrollTo(0)}
            >
              AKSARVAIYA
              <span
                style={{
                  color: "rgb(217, 4, 41)",
                  fontFamily: "Helvetica",
                  fontSize: "65px",
                  margin: "0",
                }}
              >
                .
              </span>
            </h1>
            <ul className="navOptions">
              <li
                ref={ref}
                onClick={() =>
                  window.innerWidth < 768
                    ? ref.current.scrollTo(2.5)
                    : ref.current.scrollTo(2.25)
                }
              >
                PROJECTS
              </li>
              <li ref={ref} onClick={() => ref.current.scrollTo(1)}>
                RESUME
              </li>
              <li
                style={{ fontWeight: "200" }}
                ref={ref}
                onClick={() => ref.current.scrollTo(3)}
              >
                CONTACT
              </li>
            </ul>
          </nav>
        </ParallaxLayer>
        {/* Introduction Section */}
        <ParallaxLayer>
          <section className="introSection">
            <div style={{ display: "flex" }}>
              <div className="introText">
                <h1>MY NAME IS ANKITBHAI SARVAIYA</h1>
                <p>FULL STACK DEVELOPER</p>
                <p>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "red" }}
                  />{" "}
                  Bangalore, India.
                </p>
                <div className="contactBtns">
                  <a target="#" href="https://www.linkedin.com/in/aksarvaiya/">
                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
                  </a>
                  <a target="#" href="https://github.com/aksarvaiya">
                    <FontAwesomeIcon className="github" icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="profileImg"></div>
            </div>
          </section>
        </ParallaxLayer>
        {/* SVG Transition Section */}
        <ParallaxLayer offset={0.75} speed={1}>
          <Lottie className="lottieWave" animationData={waveSVG} />
        </ParallaxLayer>
        {/* About Me Section */}
        <ParallaxLayer offset={1}>
          <section className="aboutMe">
            <div className="aboutIntro">
              <h2>ABOUT ME</h2>
              <p>
                As a Full Stack Developer, I bring expertise in both front-end
                and back-end web development, enabling me to create dynamic and
                robust web applications. With proficiency in languages such as
                React.js (Vite), Vue.js and backend technologies JavaScript
                (Node.js), I am capable of designing and implementing scalable
                solutions that meet both user needs and business requirements.
                My comprehensive understanding of the entire web development
                stack, coupled with experience in databases, version control
                systems, and deployment platforms, allows me to contribute
                effectively to projects from concept to deployment.
              </p>
            </div>
            <div className="aboutResume">
              <object
                data={myResume}
                width="100%"
                height="100%"
                type="application/pdf"
              />
              <a href={myResume}>Download</a>
            </div>
          </section>
          <section className="techStack">
            <h2>MY TECHSTACK</h2>
            <div className="scrollStack">
              <div className="stackLogos">
                <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />

                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={viteSVG} />

                <img src={vuejsSVG} className="vuejsLogo" />
                <img src={nodeJSSVG} className="nodejsLogo" />
                <img src={mongoDBSVG} className="mongoDBSVG" />
                <img src={netlifySVG} />
              </div>
              <div className="stackLogos" aria-hidden="true">
                <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />

                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={viteSVG} />
                <img src={vuejsSVG} className="vuejsLogo" />
                <img src={nodeJSSVG} className="nodejsLogo" />
                <img src={mongoDBSVG} className="mongoDBSVG" />
                <img src={netlifySVG} />
              </div>
            </div>
          </section>
        </ParallaxLayer>
        {/* Projects Section */}
        <ParallaxLayer offset={window.innerWidth < 768 ? 2.5 : 2.25}>
          <section className="projectSection">
            <h2>PROJECTS</h2>
            <Projects />
          </section>
        </ParallaxLayer>
        {/* Contact Section */}
        <ParallaxLayer
          offset={3}
          speed={window.innerWidth < 768 ? 2 : 1}
          style={{ backgroundColor: "var(--body_background)" }}
        >
          <Lottie className="lottieEmail" animationData={emailSVG} />
          <section className="contactSection">
            <h2>LETS WORK</h2>
            <div className="formContainer">
              <form
                netlify
                ref={form}
                name="contact"
                method="POST"
                onSubmit={sendEmail}
                className="contactForm"
              >
                <input type="hidden" name="form-name" value="contact" />

                <label>
                  Name
                  <input
                    type="text"
                    name="user_name"
                    required
                    aria-required="true"
                  />
                </label>

                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    type="email"
                    name="user_email"
                    required
                    aria-required="true"
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    required
                    aria-required="true"
                  ></textarea>
                </label>

                <button type="submit">Submit</button>
              </form>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>      
    </div>
  );
}
