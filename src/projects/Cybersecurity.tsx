
import "../App.css";

interface CybersecurityProps {
  onBack: () => void;
}

function Cybersecurity({ onBack }: CybersecurityProps) {
  return (
    <div className="project-page">
      <nav className="project-navbar">
        <button onClick={onBack} className="back-button">
          ← Back to portfolio
        </button>

        <span className="project-nav-title">
          APPLICATION SECURITY
        </span>
      </nav>

      <main>
        <section className="project-hero">
          <div className="project-hero-content">
            <p className="eyebrow">
              03 — CYBERSECURITY & JAVA
            </p>

            <h1>
              Application
              <span>Security.</span>
            </h1>

            <p className="project-hero-description">
              A security-focused Java project combining threat
              modelling, STRIDE risk analysis, password validation,
              JWT authentication and software component analysis.
            </p>

            <div className="project-meta">
              <div>
                <span>ROLE</span>
                <strong>Java Developer</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>Application Security</strong>
              </div>

              <div>
                <span>TOOLS</span>
                <strong>OWASP · Threat Dragon</strong>
              </div>

              <div>
                <span>ARTIFACTS</span>
                <strong>Threat Model · SBOM</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">
            <span>01</span>
            <span>OVERVIEW</span>
          </div>

          <div className="case-content">
            <h2>
              Security from
              <span>design to implementation.</span>
            </h2>

            <p>
              This project explored application security through a
              Java-based messaging application. The work combined
              threat modelling with security-related implementation
              details and software component documentation.
            </p>

            <p>
              The goal was to identify potential threats, understand
              how they could affect the application and document
              possible mitigations.
            </p>

            <div className="case-tech">
              <span>Java</span>
              <span>Application Security</span>
              <span>OWASP</span>
              <span>Threat Modelling</span>
            </div>
          </div>
        </section>

        <section className="case-section case-dark">
          <div className="case-label">
            <span>02</span>
            <span>THREAT MODELLING</span>
          </div>

          <div className="case-content">
            <h2>
              Identify threats
              <span>before they become problems.</span>
            </h2>

            <p>
              Using OWASP Threat Dragon, I created a STRIDE threat
              model covering user registration, login, message
              sending, message retrieval and database interactions.
            </p>

            <p>
              The model identifies potential weaknesses involving
              identity spoofing, data tampering, information
              disclosure and denial-of-service attacks.
            </p>

            <div className="case-tech">
              <span>OWASP Threat Dragon</span>
              <span>STRIDE</span>
              <span>Trust Boundaries</span>
              <span>Data Flows</span>
              <span>Risk Analysis</span>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">
            <span>03</span>
            <span>THREAT ANALYSIS</span>
          </div>

          <div className="case-content">
            <h2>
              Four threats.
              <span>Four areas to protect.</span>
            </h2>

            <p>
              The threat model documents the following risks and
              suggested mitigation strategies.
            </p>

            <div className="case-tech">
              <span>Spoofing — verify sender identity</span>
              <span>Tampering — protect message integrity</span>
              <span>Information Disclosure — access control and encryption</span>
              <span>Denial of Service — rate limiting and monitoring</span>
            </div>

            <p>
              These are documented threats and proposed mitigations
              in the model. They should not be interpreted as proof
              that every mitigation was implemented or tested.
            </p>
          </div>
        </section>

        <section className="case-section case-dark">
          <div className="case-label">
            <span>04</span>
            <span>AUTHENTICATION</span>
          </div>

          <div className="case-content">
            <h2>
              Stronger password
              <span>requirements.</span>
            </h2>

            <p>
              The registration interface validates passwords before
              submitting them to the backend. The defined policy
              requires at least 12 characters, an uppercase letter,
              a lowercase letter, a number and a special character.
            </p>

            <p>
              The user dashboard also checks for a JWT, validates
              its expiration and includes the token in authenticated
              API requests for messages and user data.
            </p>

            <div className="case-tech">
              <span>Password Validation</span>
              <span>12+ Characters</span>
              <span>JWT</span>
              <span>Authenticated API Requests</span>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">
            <span>05</span>
            <span>SOFTWARE COMPONENTS</span>
          </div>

          <div className="case-content">
            <h2>
              Understand the
              <span>software supply chain.</span>
            </h2>

            <p>
              I generated a Software Bill of Materials (SBOM)
              in CycloneDX JSON format for the Java messaging
              application using the CycloneDX Gradle Plugin.
            </p>

            <p>
              An SBOM documents the software components and their
              associated metadata, helping developers understand
              which dependencies a project contains and supporting
              further dependency and vulnerability reviews.
            </p>

            <div className="case-tech">
              <span>SBOM</span>
              <span>CycloneDX</span>
              <span>Gradle</span>
              <span>Dependency Analysis</span>
            </div>
          </div>
        </section>

        <section className="case-section case-dark">
          <div className="case-label">
            <span>06</span>
            <span>KEY LEARNINGS</span>
          </div>

          <div className="case-content">
            <h2>
              Think beyond
              <span>the happy path.</span>
            </h2>

            <p>
              This project strengthened my understanding of how
              application components, authentication and data flows
              can introduce security risks.
            </p>

            <p>
              It also gave me practical experience documenting
              threats, proposing mitigations and producing an SBOM
              as part of a more security-conscious development process.
            </p>

            <div className="case-tech">
              <span>Secure Development</span>
              <span>Threat Identification</span>
              <span>Security Documentation</span>
              <span>Risk Mitigation</span>
            </div>
          </div>
        </section>

        <section className="case-final">
          <p className="section-label">
            APPLICATION SECURITY — JAVA PROJECT
          </p>

          <h2>
            Build with security.
            <span>Design with awareness.</span>
          </h2>

          <button
            onClick={onBack}
            className="back-button final-back"
          >
            ← Back to all projects
          </button>
        </section>
      </main>
    </div>
  );
}

export default Cybersecurity;