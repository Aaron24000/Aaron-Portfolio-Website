import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./about.style.css";
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
        <Col className="d-flex text-center justify-content-center flex-wrap my-details">
          Hi there! I am <strong>&nbsp;Aaron Nobles</strong>
          <br />
          Web developer with a broad experience in the Information Technology
          field and achieved success working amongst a team of desktop engineers
          deploying computer hardware, migrating users, and guiding end-users to
          satisfactory results. Dedicated to driving innovation with the ability
          to adapt to latest industry trends and frameworks.
          <br />
          In 2015, I started my interest in computers by researching the latest
          technologies and building my own PC. Fast forward to 2021, and that
          passion has become a career.
          <br />
          Working with various clients, and employees, my goal has always been
          to learn the latest technologies in order to solve problems
          efficiently.
          <br />
          <br /> <br />
          <Col className="d-flex justify-content-center flex-wrap">
            <div>
              <a href="#contact">
                <Button className="m-2" variant="outline-primary">
                  Let's talk
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1HzJ5kpJD0GreKeVPWY005IYwSlKNLdDq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-success">
                  My Resume
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Aaron24000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-dark">
                  GitHub
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/aaronlnobles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-info">
                  LinkedIn
                </Button>
              </a>
            </div>
          </Col>
        </Col>
        </Container>
      </div>
    </div>
  );
};

export default About;

