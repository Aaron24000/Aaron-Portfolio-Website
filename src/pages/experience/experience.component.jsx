import React from "react";
import { CardDeck, Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import ulh from "./ulh.png";
import argentum from "./Argentum.png";
import humana from "./Humana.png";
import memstim from "./MEMStim.png";
import Col from "react-bootstrap/Col";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <CardDeck>
            <Col md={12}>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={ulh}
                    alt="ULH"
                    style={{ width: "250px" }}
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Desktop Support Technician
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style "></strong>
                      <br />
                      <strong>Technology:</strong> EPIC, Citrix, Cerner
                      <br />
                      <strong>Duration:</strong> June 2019 - Present
                      <br />
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li>
                          <strong>Planned, initiated, &amp; built</strong>{" "}
                          approximately 1,500 windows 10 computers for a domain
                          migration project.
                        </li>
                        <li>
                          <strong>Remediated</strong> computers on 50+ sites to
                          ensure a functioning workflow on launch day.
                        </li>
                        <li>
                          <strong>Strengthened</strong> relationships between
                          end-user and I.T. employees by alleviating concerns of
                          the end- user to ensure a positive experience.
                        </li>
                        <li>
                          <strong>Performed</strong> "technical dress
                          rehearsals" to verify full functionality before the
                          offical launch day (Dec 3rd, March 1st).
                        </li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <br />
            </Col>
            
            <Col md={12}>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={argentum}
                    alt="ULH"
                    style={{ width: "100px" }}
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Field Engineer
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style ">
                        Helpdesk Technician
                      </strong>
                      <br />
                      <strong>Technology:</strong> Cisco Meraki, VMWare, VEEAM,
                      Connectwise
                      <br />
                      <strong>Duration:</strong> October 2019 - March 2020
                      <br />
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li>
                          <strong>Installed</strong> structured cabling and
                          network equipment such as Cisco equipment, speaker
                          systems, and cameras into client stores.
                        </li>
                        <li>
                          <strong>Coordinated</strong> with clients and ISPs
                          regarding migrations, documentation, server upgrades
                          and monitoring.
                        </li>
                        <li>
                          Used scripting and collaboration technology to improve
                          team efficiency and save time on a short deadline for
                          two large projects.
                        </li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <br />
            </Col>
            
            <Col md={12}>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={humana}
                    alt="ULH"
                    style={{ width: "100px" }}
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Desktop Support
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <br />
                      <strong>Technology:</strong> CA (Ticketing), Powershell
                      <br />
                      <strong>Duration:</strong> August 2018 - October 2019
                      <br />
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li>
                          <strong>Imaged</strong> approximately 2,500 Windows 10
                          machines with the Microsoft Deployment Toolkit.
                        </li>
                        <li>
                          Used Administrator rights to configure files on
                          end-user computers.
                        </li>
                        <li>
                          <strong>Helped create</strong> PowerShell scripts to
                          install programs to developer computers.
                        </li>
                        <li>
                          <strong>Streamlined</strong> the process between I.T.
                          professional and end-user by creating a CSV file to
                          automate email to schedule end-users for migration
                          appointments.
                        </li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <br />
            </Col>
            
            <Col md={12}>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={memstim}
                    alt="ULH"
                    style={{ width: "100px" }}
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Business Automation Intern
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <br />
                      <strong>Technology:</strong> Python
                      <br />
                      <strong>Duration:</strong> March 2018 - July 2018
                      <br />
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li>
                          <strong>Automated</strong> workflow using Python
                          (openpyxl library).
                        </li>
                        <li>
                          <strong>Evaluated</strong> business processes,
                          anticipating requirements, uncovering areas for
                          improvement, and developing and implementing
                          solutions.
                        </li>
                        <li>Gave a 20-minute weekly presentation.</li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </CardDeck>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
