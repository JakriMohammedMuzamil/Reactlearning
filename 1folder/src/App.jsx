import React from 'react'
import './App.css'

const App = () => {
  const skills = [
    "Java", "ReactJS", "HTML", "CSS", "JavaScript", "Full Stack Development"
  ]

  const projects = [
    {
      name: "MediDiag",
      description: "A medical diagnosis college project built to help users identify health conditions.",
      tech: "Java, ReactJS"
    }
  ]

  return (
    <div className="portfolio">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Muzamil</span> 👋</h1>
          <h2>Full Stack Java Developer</h2>
          <p className="bio">A guy with love for coding and traveling 🌍</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="tech-badge">{project.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-box">
          <p>I'm currently open to new opportunities!</p>
          <a href="mailto:muzamil@email.com" className="btn primary">
            📧 Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made with ❤️ by Jakri Mohammed Muzamil</p>
      </footer>

    </div>
  )
}

export default App