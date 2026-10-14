import "../App.css";

interface FormaProps {
  onBack: () => void;
}

function Forma({ onBack }: FormaProps) {
  return (
    <div className="project-page">
      <nav className="project-navbar">
        <button onClick={onBack} className="back-button">
          ← Back to portfolio
        </button>

        <span className="project-nav-title">
          FORMA
        </span>
      </nav>

      <main>
        {/* HERO */}
        <section className="project-hero">
          <div className="project-hero-content">
            <p className="eyebrow">01 — FEATURED PROJECT</p>

            <h1>
              Forma
              <span>Made in Skåne.</span>
            </h1>

            <p className="project-hero-description">
              A modern e-commerce experience for handcrafted Scandinavian
              home decor, built from the ground up with a React frontend
              and Spring Boot backend.
            </p>

            <div className="project-meta">
              <div>
                <span>ROLE</span>
                <strong>Full-Stack Developer</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>E-commerce</strong>
              </div>

              <div>
                <span>STACK</span>
                <strong>React · TypeScript · Java</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>In Development</strong>
              </div>
            </div>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="project-feature-image">
          <img
            src="/images/leaf-sculpture.jpeg"
            alt="Forma handcrafted leaf sculpture"
          />
        </section>

        {/* ABOUT */}
        <section className="case-section">
          <div className="case-label">
            <span>01</span>
            <span>THE IDEA</span>
          </div>

          <div className="case-content">
            <h2>
              From handcrafted objects
              <span>to a digital storefront.</span>
            </h2>

            <p>
              Forma is an e-commerce project created around handcrafted
              home decor made from Scandinavian materials and manufactured
              in Skåne, Sweden.
            </p>

            <p>
              The goal is to create a digital experience that reflects
              the character of the physical products while making it easy
              for customers to explore collections, view individual
              products and place orders.
            </p>
          </div>
        </section>

        {/* FRONTEND */}
        <section className="case-section case-dark">
          <div className="case-label">
            <span>02</span>
            <span>FRONTEND</span>
          </div>

          <div className="case-content">
            <h2>
              A clean interface
              <span>built for the products.</span>
            </h2>

            <p>
              The frontend is built with React and TypeScript. The focus
              is on creating a modern, minimal interface where the
              products remain the main focus.
            </p>

            <div className="case-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
              <span>Responsive Design</span>
            </div>
          </div>
        </section>

        {/* PRODUCT IMAGE */}
        <section className="project-secondary-image">
          <img
            src="/images/double-candle-holder.jpeg"
            alt="Forma double candle holder"
          />
        </section>

        {/* BACKEND */}
        <section className="case-section">
          <div className="case-label">
            <span>03</span>
            <span>BACKEND</span>
          </div>

          <div className="case-content">
            <h2>
              Connecting the interface
              <span>to a real backend.</span>
            </h2>

            <p>
              The backend is being developed with Java and Spring Boot,
              providing the API layer that connects the frontend with
              the application's data and business logic.
            </p>

            <p>
              The architecture is designed to keep the frontend and backend
              clearly separated while allowing data to be exchanged through
              RESTful endpoints.
            </p>

            <div className="case-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
              <span>Maven</span>
            </div>
          </div>
        </section>

        {/* DATABASE */}
        <section className="case-section case-dark">
          <div className="case-label">
            <span>04</span>
            <span>DATABASE</span>
          </div>

          <div className="case-content">
            <h2>
              Structured product data
              <span>behind the experience.</span>
            </h2>

            <p>
              Product information is stored in a MySQL database, providing
              a structured foundation for the e-commerce application.
            </p>

            <p>
              The backend communicates with the database and exposes the
              required data through the API, creating a clear connection
              between the application's data layer and frontend.
            </p>

            <div className="case-tech">
              <span>MySQL</span>
              <span>Database Design</span>
              <span>REST API</span>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT */}
        <section className="case-section">
          <div className="case-label">
            <span>05</span>
            <span>DEVELOPMENT</span>
          </div>

          <div className="case-content">
            <h2>
              Building the whole
              <span>experience end-to-end.</span>
            </h2>

            <p>
              Forma brings the frontend, backend and database together
              into one full-stack application. The project is developed
              with a focus on clean structure, maintainability and a
              consistent user experience.
            </p>

            <p>
              Docker is used as part of the development environment,
              while Git and GitHub support version control and the
              development workflow.
            </p>

            <div className="case-tech">
              <span>Docker</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>IntelliJ IDEA</span>
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="case-final">
          <p className="section-label">FORMA — MADE IN SKÅNE</p>

          <h2>
            Built with purpose.
            <span>Designed to last.</span>
          </h2>

          <button onClick={onBack} className="back-button final-back">
            ← Back to all projects
          </button>
        </section>
      </main>
    </div>
  );
}

export default Forma;