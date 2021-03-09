import "./App.css";
import React from "react";
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.jsx";
import TitleMessage from "./components/title-message/title-message.component.jsx";
import Fade from "react-reveal/Fade";
import "./assets/img/parallex/background.webp";
import About from "./pages/about/about.component";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import Skills from "./pages/skills/skills.component.jsx";
import Experience from "./pages/experience/experience.component";
import Slide from "react-reveal/Slide";
import Project from "./components/projects-timeline/projects-timeline.jsx";
import Contact from "./pages/contact-form/contact-form-component.jsx";
import FooterPanel from "./components/footer/footer.component.jsx";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousel />
      <TitleMessage />
      <MyNavbar />
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Slide bottom duration={500}>
            <Skills />
          </Slide>
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Project />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
