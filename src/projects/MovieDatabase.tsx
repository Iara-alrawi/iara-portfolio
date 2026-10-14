
import "../App.css";

interface MovieDatabaseProps {
  onBack: () => void;
}

function MovieDatabase({ onBack }: MovieDatabaseProps) {
  const liveUrl =
    "https://iara-alrawi.github.io/java24-js-slutprojekt-Iara_Alrawi/";
  const githubUrl =
    "https://github.com/Iara-alrawi/java24-js-slutprojekt-Iara_Alrawi";

  return (
    <main className="project-page movie-database-page">
      <style>{`
        .movie-database-page {
          overflow: hidden;
          color: #f4f1eb;
        }

        .movie-database-page .project-navbar {
          box-sizing: border-box;
          gap: 20px;
        }

        .movie-database-page .project-hero {
          box-sizing: border-box;
          min-height: 88vh;
          padding: 170px 6vw 100px;
          align-items: flex-end;
        }

        .movie-database-page .project-hero-content {
          width: 100%;
          max-width: 1100px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        .movie-database-page .project-hero h1 {
          margin: 28px 0 0;
          font-size: clamp(4rem, 10vw, 9rem);
          line-height: 0.98;
          letter-spacing: -0.065em;
          overflow-wrap: anywhere;
        }

        .movie-database-page .project-hero h1 span {
          display: block;
        }

        .movie-database-page .project-hero-description {
          width: 100%;
          max-width: 620px;
          margin: 32px 0 0;
          font-size: 1rem;
          line-height: 1.85;
        }

        .movie-database-page .case-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .movie-database-page .project-card-links {
          position: static;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 24px;
          margin-top: 32px;
        }

        .movie-database-page .case-section {
          box-sizing: border-box;
          grid-template-columns: minmax(130px, 0.4fr) minmax(0, 1.6fr);
          align-items: start;
          column-gap: 5vw;
          row-gap: 30px;
          padding: 130px 6vw;
        }

        .movie-database-page .case-label {
          margin: 0;
          line-height: 1.7;
        }

        .movie-database-page .case-content {
          width: 100%;
          max-width: 850px;
          min-width: 0;
        }

        .movie-database-page .case-content h2 {
          margin: 0 0 36px;
          font-size: clamp(2.8rem, 5.5vw, 5.5rem);
          line-height: 1.04;
          letter-spacing: -0.055em;
          overflow-wrap: anywhere;
        }

        .movie-database-page .case-content h2 span {
          display: block;
          margin-top: 8px;
        }

        .movie-database-page .case-content > p {
          margin: 0 0 22px;
          max-width: 680px;
          line-height: 1.9;
          overflow-wrap: break-word;
        }

        .movie-database-page .case-final {
          box-sizing: border-box;
          min-height: 65vh;
          padding: 120px 6vw;
          align-items: flex-start;
        }

        .movie-database-page .case-final h2 {
          margin: 28px 0 0;
          font-size: clamp(3.5rem, 7vw, 7rem);
          line-height: 1.02;
          letter-spacing: -0.06em;
          overflow-wrap: anywhere;
        }

        .movie-database-page .case-final h2 span {
          display: block;
          margin-top: 8px;
        }

        .movie-database-page .final-back {
          margin-top: 55px;
        }

        @media (max-width: 700px) {
          .movie-database-page .project-navbar {
            padding: 20px 5vw;
            flex-wrap: wrap;
          }

          .movie-database-page .project-nav-title {
            display: none;
          }

          .movie-database-page .project-hero {
            min-height: auto;
            padding: 150px 5vw 85px;
          }

          .movie-database-page .project-hero h1 {
            font-size: clamp(3.2rem, 13vw, 5rem);
            line-height: 1.02;
            letter-spacing: -0.06em;
          }

          .movie-database-page .project-hero-description {
            margin-top: 26px;
            font-size: 0.95rem;
          }

          .movie-database-page .project-card-links {
            gap: 18px;
          }

          .movie-database-page .case-section {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
            padding: 85px 5vw;
          }

          .movie-database-page .case-content h2 {
            margin-bottom: 28px;
            font-size: clamp(2.7rem, 10vw, 4rem);
            line-height: 1.05;
          }

          .movie-database-page .case-final {
            min-height: auto;
            padding: 100px 5vw;
          }

          .movie-database-page .case-final h2 {
            font-size: clamp(3.2rem, 12vw, 5rem);
            line-height: 1.05;
          }
        }
      `}</style>

      <nav className="project-navbar">
        <button className="back-button" onClick={onBack}>
          ← Back to projects
        </button>

        <span className="project-nav-title">PROJECT 04 / 06</span>

        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>

      <section className="project-hero">
        <div className="project-hero-content">
          <p className="case-label">JAVASCRIPT · API INTEGRATION</p>

          <h1>
            Movie
            <span>Database.</span>
          </h1>

          <p className="project-hero-description">
            A movie discovery application built with JavaScript, allowing
            users to explore movies, search for titles and people, and
            organize results using data from the TMDB API.
          </p>

          <div className="case-tech">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>TMDB API</span>
            <span>REST API</span>
          </div>

          <div className="project-card-links">
            <a
              className="project-card-link"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live application ↗
            </a>

            <a
              className="project-card-link"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Source code ↗
            </a>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="case-label">01 / OVERVIEW</p>

        <div className="case-content">
          <h2>
            Discover
            <span>your next movie.</span>
          </h2>

          <p>
            Movie Database is a web application that uses the TMDB API
            to retrieve movie information and present it in an
            interactive interface.
          </p>

          <p>
            Users can browse movie collections, search for movies or
            people, and sort the displayed results.
          </p>
        </div>
      </section>

      <section className="case-section case-dark">
        <p className="case-label">02 / FEATURES</p>

        <div className="case-content">
          <h2>
            Built for
            <span>movie discovery.</span>
          </h2>

          <p>
            The application brings movie information together in one
            place, making it easier to discover films and find relevant
            information.
          </p>

          <p>
            Search functionality helps users find specific titles or
            people, while movie collections make browsing more convenient.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="case-label">03 / TECHNOLOGY</p>

        <div className="case-content">
          <h2>
            Connecting
            <span>data and design.</span>
          </h2>

          <p>
            JavaScript handles the application's interactive behaviour,
            while the TMDB API provides the movie data displayed to users.
          </p>

          <p>
            HTML and CSS structure and style the interface, with a focus
            on presenting information clearly.
          </p>

          <div className="case-tech">
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>API Integration</span>
            <span>JSON</span>
          </div>
        </div>
      </section>

      <section className="case-section case-dark">
        <p className="case-label">04 / LEARNINGS</p>

        <div className="case-content">
          <h2>
            Learning by
            <span>building.</span>
          </h2>

          <p>
            This project strengthened my understanding of working with
            external APIs, handling dynamic data, and building interactive
            interfaces with JavaScript.
          </p>

          <p>
            It also gave me practical experience in organising code and
            presenting API-driven content in a user-friendly way.
          </p>
        </div>
      </section>

      <section className="case-final">
        <p className="case-label">EXPLORE THE PROJECT</p>

        <h2>
          Take a closer
          <span>look.</span>
        </h2>

        <div className="project-card-links">
          <a
            className="project-card-link"
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live application ↗
          </a>

          <a
            className="project-card-link"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Source code ↗
          </a>
        </div>

        <button className="back-button final-back" onClick={onBack}>
          ← Back to all projects
        </button>
      </section>
    </main>
  );
}

export default MovieDatabase;