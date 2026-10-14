import "../App.css";

interface FulkopingLibraryProps {
  onBack: () => void;
}

function FulkopingLibrary({ onBack }: FulkopingLibraryProps) {
  return (
    <div className="project-page">
      {/* NAVBAR */}
      <nav className="project-navbar">
        <button onClick={onBack} className="back-button">
          ← Back to portfolio
        </button>

        <span className="project-nav-title">
          FULKÖPING LIBRARY
        </span>
      </nav>

      <main>
        {/* HERO */}
        <section className="project-hero">
          <div className="project-hero-content">
            <p className="eyebrow">
              02 — JAVA WEB APPLICATION
            </p>

            <h1>
              Fulköping
              <span>Library.</span>
            </h1>

            <p className="project-hero-description">
              A Java-based library management web application where
              users can search for books, view book details and manage
              borrowing and returns.
            </p>

            <div className="project-meta">
              <div>
                <span>ROLE</span>
                <strong>Java Developer</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>Web Application</strong>
              </div>

              <div>
                <span>STACK</span>
                <strong>Java · JSP · MySQL</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>Completed</strong>
              </div>
            </div>
          </div>
        </section>

        {/* 01 — THE PROJECT */}
        <section className="case-section">
          <div className="case-label">
            <span>01</span>
            <span>THE PROJECT</span>
          </div>

          <div className="case-content">
            <h2>
              A complete library system
              <span>built with Java.</span>
            </h2>

            <p>
              Fulköping Library is a Java-based web application
              designed to provide a simple digital library experience.
            </p>

            <p>
              Users can search for books, view individual book
              information and manage borrowing and returning books
              through the application.
            </p>
          </div>
        </section>

        {/* 02 — ARCHITECTURE */}
        <section className="case-section case-dark">
          <div className="case-label">
            <span>02</span>
            <span>ARCHITECTURE</span>
          </div>

          <div className="case-content">
            <h2>
              Structured around
              <span>MVC architecture.</span>
            </h2>

            <p>
              The application follows an MVC-based structure where
              servlets handle requests and application logic while
              JSP is used to present information to the user.
            </p>

            <p>
              This separation helps organize the application's
              responsibilities and keeps the different parts of the
              application easier to maintain.
            </p>

            <div className="case-tech">
              <span>Java</span>
              <span>MVC</span>
              <span>JSP</span>
              <span>Servlets</span>
            </div>
          </div>
        </section>

        {/* 03 — FUNCTIONALITY */}
        <section className="case-section">
          <div className="case-label">
            <span>03</span>
            <span>FUNCTIONALITY</span>
          </div>

          <div className="case-content">
            <h2>
              Designed around
              <span>the user experience.</span>
            </h2>

            <p>
              The application includes a search function for finding
              books and dedicated views for displaying individual
              book information.
            </p>

            <p>
              Logged-in users can borrow available books and return
              them through the application.
            </p>

            <div className="case-tech">
              <span>Search</span>
              <span>Book Details</span>
              <span>Login</span>
              <span>Borrowing</span>
              <span>Returns</span>
            </div>
          </div>
        </section>

        {/* 04 — DATABASE */}
        <section className="case-section case-dark">
          <div className="case-label">
            <span>04</span>
            <span>DATABASE</span>
          </div>

          <div className="case-content">
            <h2>
              Persistent data
              <span>behind the application.</span>
            </h2>

            <p>
              MySQL is used to store the application's library data.
              The database provides the persistent layer used by the
              Java application to manage books and user-related data.
            </p>

            <div className="case-tech">
              <span>MySQL</span>
              <span>SQL</span>
              <span>Database Design</span>
            </div>
          </div>
        </section>

        {/* 05 — SERVER */}
        <section className="case-section">
          <div className="case-label">
            <span>05</span>
            <span>SERVER</span>
          </div>

          <div className="case-content">
            <h2>
              Running as a
              <span>Jakarta web application.</span>
            </h2>

            <p>
              The application is deployed and tested using Apache
              Tomcat with Jakarta EE technologies. Maven is used to
              manage the project's dependencies and build configuration.
            </p>

            <div className="case-tech">
              <span>Tomcat</span>
              <span>Jakarta EE</span>
              <span>Maven</span>
            </div>
          </div>
        </section>

        {/* 06 — DEVELOPMENT */}
        <section className="case-section case-dark">
          <div className="case-label">
            <span>06</span>
            <span>DEVELOPMENT</span>
          </div>

          <div className="case-content">
            <h2>
              From database
              <span>to user interface.</span>
            </h2>

            <p>
              The project brought together backend development,
              database integration and server-side web development
              into one complete application.
            </p>

            <div className="case-tech">
              <span>Java</span>
              <span>JSP</span>
              <span>Servlets</span>
              <span>MySQL</span>
              <span>Tomcat</span>
              <span>Maven</span>
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="case-final">
          <p className="section-label">
            FULKÖPING LIBRARY — JAVA WEB APPLICATION
          </p>

          <h2>
            Built with structure.
            <span>Designed to work.</span>
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

export default FulkopingLibrary;