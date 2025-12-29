import React from 'react';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';

const experiences = [
    {
      company: 'Hansa Solutions Private Limited',
      role: 'System Developer (.NET)',
      description: 'Working on the core enterprise product IONE G, developing and maintaining full-stack features using .NET, SSMS, HTML, Bootstrap, JavaScript, and jQuery. Designed schedulers for premium reports and receipt generation using Windows Services. Optimized backend APIs and SQL Server queries for production performance. Delivered solutions for Bajaj Life Insurance, CALI, and MCIS Life Insurance. Led R&D initiatives and implemented Gitea for on-prem version control.',
      duration: 'Jan 2025 - Jan 2026'
    },
    {
      company: 'Symbiosis Technologies',
      role: 'React Developer Intern',
      description: 'Developed reusable React components to improve development efficiency and UI consistency. Improved frontend responsiveness and page load performance through optimized component design. Worked with designers and developers to deliver features within defined timelines.',
      duration: 'May 2024 - Jul 2024'
    },
    {
      company: 'GeeksForGeeks LIET',
      role: 'Technical Associate',
      description: 'Conducted multiple technical sessions and hackathons, mentoring students and promoting hands-on development. Maintained the club website and collaborated with the team to develop new features, significantly enhancing the website\'s functionality.',
      duration: 'May 2023 - Present'
    },
  ];
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Experience</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {experiences.map((experience, index) => (
          <Col xs={12} md={6} lg={3} className="experience-col" key={index}>
            <div className="experience-card">
              <h5 className="experience-role">{experience.role}</h5>
              <h6 className="experience-company">{experience.company}</h6>
              <p className="experience-description">{experience.description}</p>
              <p className="experience-duration">
                <small>{experience.duration}</small>
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </section>
  );
};

export default ExperienceSection;
