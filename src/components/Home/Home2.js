import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiLogoGmail } from "react-icons/bi";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">System Developer</b> with 1+ year of experience building and optimizing
              enterprise-grade applications for the insurance industry! 🚀
              <br />
              <br />I work with technologies like
              <i>
                <b className="purple"> .NET, C#, JavaScript, Java, and Python </b>
              </i>
              to deliver robust full-stack solutions.
              <br />
              <br />
              My expertise lies in building &nbsp;
              <i>
                <b className="purple">Enterprise .NET Applications, </b>
                <b className="purple">Backend Optimization, </b>
                <b className="purple">Modern Web Technologies, </b> and
                also exploring areas like <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              I have hands-on experience developing production systems with
              <b className="purple"> .NET Framework, SQL Server, </b> and
              <b className="purple">Windows Services, </b>
              while also building modern web applications with
              <i>
                <b className="purple">
                  {" "}
                  React.js, Redux, Tailwind CSS, Node.js, and Express.js
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded mx-auto d-block"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SudhishAmiti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AmitiSudhish"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sudhish-amiti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sudhishamiti2003@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <BiLogoGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
