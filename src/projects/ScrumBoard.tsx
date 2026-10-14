
type ScrumBoardProps = {
  onBack: () => void;
};

const liveUrl =
  "https://iara-alrawi.github.io/JAVA24-AJS-slutprojekt-Iara-Alrawi/";

const githubUrl =
  "https://github.com/Iara-alrawi/JAVA24-AJS-slutprojekt-Iara-Alrawi";

function ScrumBoard({ onBack }: ScrumBoardProps) {
  return (
    <main className="scrum-board-page">
      <style>{`
        .scrum-board-page {
          --sb-bg: #0d0d0d;
          --sb-ink: #f4f1eb;
          --sb-muted: #85827b;
          --sb-accent: #a7a293;
          --sb-line: #34332f;

          min-height: 100vh;
          background: var(--sb-bg);
          color: var(--sb-ink);
          padding: 0 6vw 40px;
          font-family: "DM Sans", sans-serif;
        }

        .scrum-board-page * {
          box-sizing: border-box;
        }

        .scrum-board-nav {
          position: relative;
          z-index: 2;
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #242422;
        }

        .scrum-board-brand {
          color: var(--sb-ink);
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.05em;
          text-decoration: none;
        }

        .scrum-board-brand span {
          color: var(--sb-accent);
        }

        .scrum-board-back {
          border: none;
          background: transparent;
          color: #aaa7a0;
          font: inherit;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .scrum-board-back:hover {
          color: var(--sb-ink);
        }

        .scrum-board-hero {
          min-height: 78vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 100px 0 90px;
          border-bottom: 1px solid #242422;
        }

        .scrum-board-eyebrow {
          color: var(--sb-accent);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          margin: 0 0 30px;
        }

        .scrum-board-hero h1 {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(4.5rem, 10vw, 10rem);
          line-height: 0.85;
          letter-spacing: -0.085em;
          font-weight: 500;
          margin: 0;
        }

        .scrum-board-hero h1 span {
          display: block;
          color: #77736b;
        }

        .scrum-board-intro {
          max-width: 650px;
          color: #85827b;
          font-size: 1.05rem;
          line-height: 1.8;
          margin: 45px 0 0;
        }

        .scrum-board-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 35px;
        }

        .scrum-board-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 15px 23px;
          border: 1px solid #3b3a37;
          color: var(--sb-ink);
          background: transparent;
          font-size: 0.8rem;
          text-decoration: none;
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .scrum-board-action.primary {
          background: #f4f1eb;
          color: #0d0d0d;
          border-color: #f4f1eb;
        }

        .scrum-board-action:hover {
          transform: translateY(-3px);
          border-color: #a7a293;
        }

        .scrum-board-action.primary:hover {
          background: #ffffff;
          border-color: #ffffff;
        }

        .scrum-board-action:not(.primary):hover {
          background: #151514;
          color: #f4f1eb;
        }

        .scrum-board-section {
          display: grid;
          grid-template-columns: 0.4fr 1.6fr;
          gap: 40px;
          padding: 100px 0;
          border-bottom: 1px solid #242422;
        }

        .scrum-board-section-label {
          margin: 5px 0 0;
          color: #77736b;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .scrum-board-section h2 {
          margin: 0 0 30px;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(2.5rem, 5vw, 5rem);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 500;
        }

        .scrum-board-section p {
          max-width: 700px;
          color: #85827b;
          font-size: 1rem;
          line-height: 1.9;
          margin: 0;
        }

        .scrum-board-feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid #34332f;
          border-left: 1px solid #34332f;
          margin-top: 40px;
        }

        .scrum-board-feature {
          min-height: 180px;
          padding: 25px;
          border-right: 1px solid #34332f;
          border-bottom: 1px solid #34332f;
          transition: background 0.3s ease;
        }

        .scrum-board-feature:hover {
          background: #151514;
        }

        .scrum-board-feature > span {
          display: block;
          color: #77736b;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          margin-bottom: 25px;
        }

        .scrum-board-feature h3 {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.35rem;
          font-weight: 500;
          letter-spacing: -0.03em;
          margin: 0 0 12px;
        }

        .scrum-board-feature p {
          font-size: 0.85rem;
          line-height: 1.7;
        }

        .scrum-board-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 35px;
        }

        .scrum-board-tech span {
          padding: 11px 16px;
          border: 1px solid #34332f;
          color: #aaa7a0;
          background: transparent;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition:
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .scrum-board-tech span:hover {
          background: #f4f1eb;
          color: #0d0d0d;
          border-color: #f4f1eb;
          transform: translateY(-2px);
        }

        .scrum-board-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-top: 30px;
          color: #5f5c56;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .scrum-board-section {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 80px 0;
          }
        }

        @media (max-width: 700px) {
          .scrum-board-page {
            padding: 0 5vw 30px;
          }

          .scrum-board-nav {
            min-height: 72px;
          }

          .scrum-board-hero {
            min-height: 70vh;
            padding: 100px 0 70px;
          }

          .scrum-board-hero h1 {
            font-size: clamp(4rem, 18vw, 6rem);
          }

          .scrum-board-intro {
            font-size: 0.95rem;
            margin-top: 35px;
          }

          .scrum-board-actions {
            flex-direction: column;
            align-items: flex-start;
          }

          .scrum-board-action {
            width: fit-content;
          }

          .scrum-board-feature-grid {
            grid-template-columns: 1fr;
          }

          .scrum-board-feature {
            min-height: auto;
            padding: 25px;
          }

          .scrum-board-footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }
        }
      `}</style>

      <nav className="scrum-board-nav">
        <a className="scrum-board-brand" href="#" onClick={(event) => {
          event.preventDefault();
          onBack();
        }}>
          IARA<span>.</span>
        </a>

        <button className="scrum-board-back" onClick={onBack}>
          ← Back to projects
        </button>
      </nav>

      <section className="scrum-board-hero">
        <p className="scrum-board-eyebrow">
          PROJECT 05 / 06 · REACT & FIREBASE
        </p>

        <h1>
          ToDo
          <span>Application.</span>
        </h1>

        <p className="scrum-board-intro">
          A task management application built with React and Firebase
          Realtime Database. The project explores how a clear, interactive
          interface can help users organise and manage their tasks.
        </p>

        <div className="scrum-board-actions">
          <a
            className="scrum-board-action primary"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open live application <span>↗</span>
          </a>

          <a
            className="scrum-board-action"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source code <span>↗</span>
          </a>
        </div>
      </section>

      <section className="scrum-board-section">
        <p className="scrum-board-section-label">01 — OVERVIEW</p>

        <div>
          <h2>Tasks, organised.</h2>

          <p>
            This project was built to provide a simple place to manage tasks.
            React handles the user interface, while Firebase Realtime Database
            provides the data layer. The project helped me practise connecting
            a frontend application to a cloud database.
          </p>
        </div>
      </section>

      <section className="scrum-board-section">
        <p className="scrum-board-section-label">02 — FOCUS AREAS</p>

        <div>
          <h2>From interface to data.</h2>

          <div className="scrum-board-feature-grid">
            <article className="scrum-board-feature">
              <span>01</span>
              <h3>Task management</h3>
              <p>
                A dedicated interface for keeping tasks organised in one place.
              </p>
            </article>

            <article className="scrum-board-feature">
              <span>02</span>
              <h3>React components</h3>
              <p>
                A component-based approach to building the user interface.
              </p>
            </article>

            <article className="scrum-board-feature">
              <span>03</span>
              <h3>Firebase integration</h3>
              <p>
                Connecting the application to Firebase Realtime Database.
              </p>
            </article>

            <article className="scrum-board-feature">
              <span>04</span>
              <h3>User experience</h3>
              <p>
                Keeping the interface focused, clear and easy to navigate.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="scrum-board-section">
        <p className="scrum-board-section-label">03 — TECHNOLOGY</p>

        <div>
          <h2>Tools used.</h2>

          <p>
            The application combines a modern frontend with a cloud-based
            database for storing and managing application data.
          </p>

          <div className="scrum-board-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>Firebase</span>
            <span>Realtime Database</span>
          </div>
        </div>
      </section>

      <footer className="scrum-board-footer">
        <span>TODO APPLICATION</span>
        <span>REACT · FIREBASE</span>

        <button className="scrum-board-back" onClick={onBack}>
          ← Back to projects
        </button>
      </footer>
    </main>
  );
}

export default ScrumBoard;