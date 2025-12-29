import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amiti Sudhish </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            <br />
            I am a <span className="purple">System Developer</span> with 1+ year of experience in building, optimizing, and maintaining enterprise-grade full-stack .NET applications on on-prem infrastructure.
            <br />
            <br />
            I have hands-on experience working on a core company product serving insurance clients, with strong exposure to backend optimization, frontend performance improvements, and internal tooling.
            <br />
            <br />
            I am currently pursuing my B.Tech in Computer Science and Engineering at Lendi Institute of Engineering and Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new gadgets
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aim to create innovations that make an impact!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
