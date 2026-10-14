
import "./App.css";
import { useEffect, useState } from "react";
import Forma from "./projects/Forma";
import FulkopingLibrary from "./projects/FulkopingLibrary";
import Cybersecurity from "./projects/Cybersecurity";
import MovieDatabase from "./projects/MovieDatabase";
import ScrumBoard from "./projects/ScrumBoard";
import WeatherNow from "./projects/WeatherNow";

function App() {
  const [showForma, setShowForma] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showCybersecurity, setShowCybersecurity] = useState(false);
  const [showMovieDatabase, setShowMovieDatabase] = useState(false);
  const [showScrumBoard, setShowScrumBoard] = useState(false);
  const [showWeatherNow, setShowWeatherNow] = useState(false);

  useEffect(() => {
    if (
      showForma ||
      showLibrary ||
      showCybersecurity ||
      showMovieDatabase ||
      showScrumBoard ||
      showWeatherNow
    ) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [
    showForma,
    showLibrary,
    showCybersecurity,
    showMovieDatabase,
    showScrumBoard,
    showWeatherNow,
  ]);

  if (showForma) {
    return (
      <Forma
        onBack={() => {
          setShowForma(false);
          setTimeout(() => {
            document.getElementById("work")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 0);
        }}
      />
    );
  }

  if (showLibrary) {
    return (
      <FulkopingLibrary
        onBack={() => {
          setShowLibrary(false);
          setTimeout(() => {
            document.getElementById("work")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 0);
        }}
      />
    );
  }

  if (showCybersecurity) {
    return (
      <Cybersecurity
        onBack={() => {
          setShowCybersecurity(false);
          setTimeout(() => {
            document.getElementById("work")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 0);
        }}
      />
    );
  }

  if (showMovieDatabase) {
    return (
      <MovieDatabase
        onBack={() => {
          setShowMovieDatabase(false);
          setTimeout(() => {
            document.getElementById("work")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 0);
        }}
      />
    );
  }

  if (showScrumBoard) {
    return (
      <ScrumBoard
        onBack={() => {
          setShowScrumBoard(false);
          setTimeout(() => {
            document.getElementById("work")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 0);
        }}
      />
    );
  }

  if (showWeatherNow) {
    return (
      <WeatherNow
        onBack={() => {
          setShowWeatherNow(false);
          setTimeout(() => {
            document.getElementById("work")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 0);
        }}
      />
    );
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#" className="logo">
          IARA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">JAVA & FULL-STACK DEVELOPER</p>

            <h1>
              I build digital
              <span> experiences.</span>
            </h1>

            <p className="hero-description">
              I'm Iara, a Java developer based in Sweden. I create modern,
              functional and user-focused applications using technologies
              such as Java, React and TypeScript.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="button button-primary">
                View my work
                <span>↗</span>
              </a>

              <a href="#contact" className="button button-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-line"></div>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro-section">
          <p>
            From full-stack web applications to cybersecurity and mobile
            development, I enjoy turning ideas into real, working products.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="work" className="projects-section">
          <div className="section-heading">
            <p className="section-label">01 — SELECTED WORK</p>

            <h2>
              Projects that I've built
              <span>from idea to implementation.</span>
            </h2>
          </div>

          {/* FEATURED PROJECT */}
          <article className="featured-project">
            <div className="featured-images">
              <div className="featured-image main-image">
                <img
                  src="/images/leaf-sculpture.jpeg"
                  alt="Forma leaf sculpture"
                />
              </div>

              <div className="featured-image secondary-image">
                <img
                  src="/images/double-candle-holder.jpeg"
                  alt="Forma double candle holder"
                />
              </div>
            </div>

            <div className="featured-info">
              <div>
                <p className="project-number">01</p>
                <h3>Forma</h3>
                <p className="project-subtitle">Made in Skåne</p>
              </div>

              <p className="project-description">
                A modern e-commerce platform for handcrafted Scandinavian
                home decor. I am building the application from the ground up,
                combining a React and TypeScript frontend with a Spring Boot
                backend and MySQL database.
              </p>

              <div className="tech-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>Docker</span>
              </div>

              <button
                onClick={() => setShowForma(true)}
                className="project-link project-button"
              >
                View project <span>↗</span>
              </button>
            </div>
          </article>

          {/* OTHER PROJECTS */}
          <div className="projects-grid">
            {/* FULKÖPING LIBRARY */}
            <article className="project-card">
              <div className="project-card-top">
                <span>02</span>
                <span>JAVA · WEB</span>
              </div>

              <div className="project-card-content">
                <h3>Fulköping Library</h3>

                <p>
                  A library management web application where users can search
                  for books, view details and borrow or return books.
                </p>

                <div className="tech-tags">
                  <span>Java</span>
                  <span>JSP</span>
                  <span>Servlets</span>
                  <span>MySQL</span>
                  <span>Tomcat</span>
                </div>
              </div>

              <div className="project-card-links">
                <button
                  onClick={() => setShowLibrary(true)}
                  className="project-card-link project-card-button"
                >
                  View project ↗
                </button>

                <a
                  href="https://github.com/MH-GRIT/fulk-pings-bibliotek-Iara-alrawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                >
                  GitHub ↗
                </a>
              </div>
            </article>

            {/* CYBERSECURITY */}
            <article className="project-card">
              <div className="project-card-top">
                <span>03</span>
                <span>CYBERSECURITY</span>
              </div>

              <div className="project-card-content">
                <h3>Secure Web Application</h3>

                <p>
                  A cybersecurity project focused on OWASP principles,
                  threat modelling and security requirements for an
                  administrative web application.
                </p>

                <div className="tech-tags">
                  <span>OWASP</span>
                  <span>Threat Dragon</span>
                  <span>Authentication</span>
                  <span>Security</span>
                </div>
              </div>

              <button
                onClick={() => setShowCybersecurity(true)}
                className="project-card-link project-card-button"
              >
                View project ↗
              </button>
            </article>

            {/* MOVIE DATABASE */}
            <article className="project-card">
              <div className="project-card-top">
                <span>04</span>
                <span>JAVASCRIPT · API</span>
              </div>

              <div className="project-card-content">
                <h3>Movie Database</h3>

                <p>
                  A movie discovery application using the TMDB API to display
                  popular and top-rated movies with search functionality.
                </p>

                <div className="tech-tags">
                  <span>JavaScript</span>
                  <span>TMDB API</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>

              <div className="project-card-links">
                <button
                  onClick={() => setShowMovieDatabase(true)}
                  className="project-card-link project-card-button"
                >
                  View project ↗
                </button>

                <a
                  href="https://iara-alrawi.github.io/java24-js-slutprojekt-Iara_Alrawi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                >
                  Live demo ↗
                </a>

                <a
                  href="https://github.com/Iara-alrawi/java24-js-slutprojekt-Iara_Alrawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                >
                  GitHub ↗
                </a>
              </div>
            </article>

            {/* SCRUM BOARD */}
            <article className="project-card">
              <div className="project-card-top">
                <span>05</span>
                <span>REACT · FIREBASE</span>
              </div>

              <div className="project-card-content">
                <h3>Scrum Board</h3>

                <p>
                  A task management application built with React and Firebase
                  to organise tasks in a Scrum-inspired workflow.
                </p>

                <div className="tech-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Firebase</span>
                  <span>Realtime DB</span>
                </div>
              </div>

              <div className="project-card-links">
                <button
                  onClick={() => setShowScrumBoard(true)}
                  className="project-card-link project-card-button"
                >
                  View project ↗
                </button>

                <a
                  href="https://iara-alrawi.github.io/JAVA24-AJS-slutprojekt-Iara-Alrawi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                >
                  Live demo ↗
                </a>

                <a
                  href="https://github.com/Iara-alrawi/JAVA24-AJS-slutprojekt-Iara-Alrawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                >
                  GitHub ↗
                </a>
              </div>
            </article>

            {/* WEATHER NOW */}
            <article className="project-card">
              <div className="project-card-top">
                <span>06</span>
                <span>FLUTTER · MOBILE</span>
              </div>

              <div className="project-card-content">
                <h3>WeatherNow</h3>

                <p>
                  An Android weather application integrating an external API
                  to display current weather information.
                </p>

                <div className="tech-tags">
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>REST API</span>
                </div>
              </div>

              <div className="project-card-links">
                <button
                  onClick={() => setShowWeatherNow(true)}
                  className="project-card-link project-card-button"
                >
                  View project ↗
                </button>

                <a
                  href="https://github.com/Iara-alrawi/Mobilt_java24_iara_alrawi_Flutter_v_3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <div className="about-header">
            <p className="section-label">02 — ABOUT</p>

            <h2>
              I like understanding
              <span>how things work.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p className="about-lead">
                I'm a Java developer who enjoys turning ideas into real,
                functional products.
              </p>

              <p>
                My journey into development started with Java, where I
                discovered how much I enjoy solving problems through code.
                Since then, I've worked across backend development, frontend,
                mobile applications and cybersecurity.
              </p>

              <p>
                I enjoy working on projects where I can understand the whole
                picture — from the database and backend logic to the interface
                that the user actually interacts with.
              </p>

              <p>
                I'm currently looking for opportunities where I can continue
                developing my skills, contribute to real projects and grow as
                a developer.
              </p>
            </div>

            <div className="about-focus">
              <div className="focus-item">
                <span>01</span>
                <div>
                  <h3>Backend</h3>
                  <p>Java · Spring Boot · REST APIs · MySQL</p>
                </div>
              </div>

              <div className="focus-item">
                <span>02</span>
                <div>
                  <h3>Frontend</h3>
                  <p>React · TypeScript · JavaScript · CSS</p>
                </div>
              </div>

              <div className="focus-item">
                <span>03</span>
                <div>
                  <h3>Cybersecurity</h3>
                  <p>OWASP · Threat modelling · Secure applications</p>
                </div>
              </div>

              <div className="focus-item">
                <span>04</span>
                <div>
                  <h3>Mobile</h3>
                  <p>Kotlin · Android · API integration</p>
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="experience">
            <div className="experience-heading">
              <p className="section-label">EXPERIENCE & EDUCATION</p>
              <h3>A few chapters of my journey.</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2026</div>
                <div className="timeline-line">
                  <span></span>
                </div>
                <div className="timeline-content">
                  <h4>Java Developer</h4>
                  <p className="timeline-company">Grit Academy · Malmö</p>
                  <p>
                    Completed a Java development program with projects
                    covering backend development, web applications,
                    databases, frontend, mobile development and cybersecurity.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2026</div>
                <div className="timeline-line">
                  <span></span>
                </div>
                <div className="timeline-content">
                  <h4>LIA — Project Leader / Growth</h4>
                  <p className="timeline-company">podmanager.AI</p>
                  <p>
                    Worked remotely as part of a growth and publicity team,
                    contributing to project coordination, digital initiatives
                    and technical development. I also worked with APIs and API
                    integrations, connecting different services and working
                    with data exchanged between systems.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2023 — 2024</div>
                <div className="timeline-line">
                  <span></span>
                </div>
                <div className="timeline-content">
                  <h4>Production Engineer / Assembly</h4>
                  <p className="timeline-company">Haldex</p>
                  <p>
                    Worked with truck brake production, troubleshooting and
                    industrial automation, including robot-related issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills-section">
          <div className="skills-header">
            <p className="section-label">03 — SKILLS</p>

            <h2>
              Technologies I
              <span>work with.</span>
            </h2>

            <p className="skills-intro">
              A growing toolkit built through school projects, professional
              experience and my own development work.
            </p>
          </div>

          <div className="skills-grid">
            {/* BACKEND */}
            <div className="skill-category">
              <div className="skill-category-top">
                <span>01</span>
                <span>BACKEND</span>
              </div>
              <div className="skill-list">
                <div className="skill-item featured">
                  <span>Java</span>
                  <small>Primary</small>
                </div>
                <div className="skill-item"><span>Spring Boot</span></div>
                <div className="skill-item"><span>REST APIs</span></div>
                <div className="skill-item"><span>MySQL</span></div>
                <div className="skill-item"><span>MongoDB</span></div>
                <div className="skill-item"><span>Maven</span></div>
              </div>
            </div>

            {/* FRONTEND */}
            <div className="skill-category">
              <div className="skill-category-top">
                <span>02</span>
                <span>FRONTEND</span>
              </div>
              <div className="skill-list">
                <div className="skill-item featured">
                  <span>React</span>
                  <small>Primary</small>
                </div>
                <div className="skill-item featured">
                  <span>TypeScript</span>
                  <small>Primary</small>
                </div>
                <div className="skill-item"><span>JavaScript</span></div>
                <div className="skill-item"><span>HTML</span></div>
                <div className="skill-item"><span>CSS</span></div>
              </div>
            </div>

            {/* TESTING */}
            <div className="skill-category">
              <div className="skill-category-top">
                <span>03</span>
                <span>TESTING</span>
              </div>
              <div className="skill-list">
                <div className="skill-item featured"><span>JUnit</span></div>
                <div className="skill-item"><span>Unit Testing</span></div>
                <div className="skill-item">
                  <span>Test-driven development</span>
                </div>
              </div>
            </div>

            {/* SECURITY */}
            <div className="skill-category">
              <div className="skill-category-top">
                <span>04</span>
                <span>CYBERSECURITY</span>
              </div>
              <div className="skill-list">
                <div className="skill-item featured"><span>OWASP</span></div>
                <div className="skill-item"><span>Threat Dragon</span></div>
                <div className="skill-item"><span>Threat Modelling</span></div>
                <div className="skill-item"><span>Authentication</span></div>
                <div className="skill-item"><span>Secure Applications</span></div>
              </div>
            </div>

            {/* MOBILE */}
            <div className="skill-category">
              <div className="skill-category-top">
                <span>05</span>
                <span>MOBILE</span>
              </div>
              <div className="skill-list">
                <div className="skill-item"><span>Kotlin</span></div>
                <div className="skill-item"><span>Android</span></div>
                <div className="skill-item featured"><span>Flutter</span></div>
                <div className="skill-item"><span>Firebase</span></div>
              </div>
            </div>

            {/* TOOLS */}
            <div className="skill-category">
              <div className="skill-category-top">
                <span>06</span>
                <span>TOOLS</span>
              </div>
              <div className="skill-list">
                <div className="skill-item featured"><span>Git</span></div>
                <div className="skill-item featured"><span>GitHub</span></div>
                <div className="skill-item"><span>Docker</span></div>
                <div className="skill-item"><span>IntelliJ IDEA</span></div>
                <div className="skill-item"><span>VS Code</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="contact-header">
            <p className="section-label">04 — CONTACT</p>

            <h2>
              Let's build
              <span>something.</span>
            </h2>

            <p className="contact-intro">
              I'm currently open to new opportunities, collaborations and
              interesting projects. If you'd like to get in touch, I'd love
              to hear from you.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:Iaraalrawi3@gmail.com" className="contact-link">
              <div>
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">Iaraalrawi3@gmail.com</span>
              </div>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://github.com/Iara-alrawi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">GITHUB</span>
                <span className="contact-value">Iara-alrawi</span>
              </div>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://linkedin.com/in/iara-alrawi-aa7612271"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">LINKEDIN</span>
                <span className="contact-value">Iara Alrawi</span>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
          </div>

          <footer className="footer">
            <span>© 2026 Iara Alrawi</span>
            <span>Java & Full-Stack Developer</span>
            <span>Sweden</span>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;