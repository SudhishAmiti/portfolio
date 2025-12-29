import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import charity from "../../Assets/Projects/charity.png";
import youtube from "../../Assets/Projects/youtube.png";
import farmBuddy from "../../Assets/Projects/FarmBuddy.png"
import swaadh from "../../Assets/Projects/swaadh.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charity}
              isBlog={false}
              title="Cross-Border Charity Donations Platform"
              description="Built a React-based web application enabling users to donate to charities and natural disaster relief funds globally. Integrated multiple payment methods including blockchain-based payments and PayPal. Used MetaMask and Ganache for blockchain transaction handling. Implemented a fake URL detection feature using Brave Web Search API with a RAG-based model to identify fraudulent charity links."
              ghLink="https://github.com/SudhishAmiti/cross_border_charity_donations"
              demoLink="https://cross-border-charity-donations.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmBuddy}
              isBlog={false}
              title="FarmBuddy"
              description="Agrotech website developed during hackathon. An online marketplace connecting farmers directly with customers, eliminating intermediaries to reduce costs. Integrated Firebase authentication with reliable uptime during event usage. Implemented Plant ID and Mapbox APIs for enhanced usability. Deployed on GitHub Pages for public access."
              ghLink="https://github.com/SudhishAmiti/FarmBuddy"
              demoLink="https://farmbuddy2023.github.io/FarmBuddy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="A React-based YouTube clone with video browsing, search functionality, and responsive design. Built using React.js with modern component architecture and API integration for fetching video data. Features include video playback, channel information, and a clean user interface."
              ghLink="https://github.com/SudhishAmiti/React-Youtube-clone"
              demoLink="https://react-youtube-clone-silk.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swaadh}
              isBlog={false}
              title="Swaadh"
              description="A food ordering platform built with React from scratch. Deep dives into JSX, core React features, and important hooks. Implemented Tailwind CSS for styling, React routing for navigation, and handled live API data. Distinguished between functional and class-based components, implemented Redux and Redux Toolkit for state management, and tested the app with Jest."
              ghLink="https://github.com/SudhishAmiti/Swaadh"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
