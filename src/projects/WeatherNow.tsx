
type WeatherNowProps = {
  onBack: () => void;
};

const githubUrl =
  "https://github.com/Iara-alrawi/Mobilt_java24_iara_alrawi_Flutter_v_3";

function WeatherNow({ onBack }: WeatherNowProps) {
  return (
    <main className="weather-now-page">
      <style>{`
        .weather-now-page {
          --wn-bg: #0d0d0d;
          --wn-ink: #f4f1eb;
          --wn-muted: #a7a293;
          --wn-line: #34332f;
          min-height: 100vh;
          background: var(--wn-bg);
          color: var(--wn-ink);
          padding: 0 clamp(22px, 7vw, 100px) 36px;
          font-family: inherit;
          box-sizing: border-box;
        }

        .weather-now-page *,
        .weather-now-page *::before,
        .weather-now-page *::after {
          box-sizing: border-box;
        }

        .weather-now-nav {
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--wn-line);
          gap: 20px;
        }

        .weather-now-brand {
          color: var(--wn-ink);
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -.04em;
          text-decoration: none;
        }

        .weather-now-brand span {
          color: var(--wn-muted);
        }

        .weather-now-hero {
          padding: clamp(70px, 12vw, 150px) 0 75px;
          border-bottom: 1px solid var(--wn-line);
        }

        .weather-now-eyebrow {
          color: var(--wn-muted);
          font-size: 11px;
          letter-spacing: .16em;
          font-weight: 700;
          margin: 0 0 22px;
        }

        .weather-now-hero h1 {
          font-size: clamp(52px, 10vw, 120px);
          line-height: .95;
          letter-spacing: -.075em;
          font-weight: 500;
          margin: 0;
          max-width: 950px;
        }

        .weather-now-hero h1 span {
          color: var(--wn-muted);
        }

        .weather-now-intro {
          max-width: 650px;
          color: #b8b5ad;
          font-size: clamp(16px, 2vw, 19px);
          line-height: 1.8;
          margin: 30px 0 0;
        }

        .weather-now-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .weather-now-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 14px 18px;
          border: 1px solid #a7a293;
          color: var(--wn-ink);
          text-decoration: none;
          font-size: 13px;
          transition:
            background .2s ease,
            color .2s ease,
            border-color .2s ease;
        }

        .weather-now-action:hover {
          background: #f4f1eb;
          color: #0d0d0d;
          border-color: #f4f1eb;
        }

        .weather-now-section {
          display: grid;
          grid-template-columns: minmax(140px, .7fr) minmax(0, 1.7fr);
          gap: clamp(30px, 7vw, 100px);
          padding: 54px 0;
          border-bottom: 1px solid var(--wn-line);
        }

        .weather-now-section-label {
          margin: 5px 0 0;
          font-size: 11px;
          letter-spacing: .14em;
          color: var(--wn-muted);
          font-weight: 700;
        }

        .weather-now-section h2 {
          margin: 0 0 18px;
          font-size: clamp(28px, 4vw, 42px);
          letter-spacing: -.05em;
          font-weight: 500;
        }

        .weather-now-section p {
          color: #b8b5ad;
          line-height: 1.8;
          max-width: 720px;
          margin: 0;
        }

        .weather-now-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 22px;
        }

        .weather-now-tech span {
          display: inline-block;
          border: 1px solid var(--wn-line);
          color: #b8b5ad;
          padding: 9px 12px;
          font-size: 12px;
          transition:
            color .2s ease,
            border-color .2s ease,
            background .2s ease;
          cursor: default;
        }

        .weather-now-tech span:hover {
          color: #ffffff;
          border-color: #a7a293;
          background: rgba(255, 255, 255, .04);
        }

        .weather-now-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 30px;
          margin-top: 20px;
        }

        .weather-now-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 24px;
          color: #77736b;
          font-size: 11px;
          letter-spacing: .04em;
        }

        .weather-now-back {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 0;
          background: transparent;
          border: 0;
          color: #b8b5ad;
          font: inherit;
          font-size: 13px;
          cursor: pointer;
          transition: color .2s ease;
        }

        .weather-now-back:hover {
          color: #ffffff;
        }

        .weather-now-back span {
          transition: transform .2s ease;
        }

        .weather-now-back:hover span {
          transform: translateX(-4px);
        }

        @media (max-width: 650px) {
          .weather-now-section {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .weather-now-bottom {
            align-items: flex-start;
            flex-direction: column-reverse;
          }

          .weather-now-footer {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>

      <nav className="weather-now-nav">
        <a className="weather-now-brand" href="#top">
          IARA<span>.</span>
        </a>

        <span className="weather-now-eyebrow" style={{ margin: 0 }}>
          PROJECT 06 / 06
        </span>
      </nav>

      <section className="weather-now-hero" id="top">
        <p className="weather-now-eyebrow">
          MOBILE DEVELOPMENT · FLUTTER
        </p>

        <h1>
          WeatherNow<span>.</span>
        </h1>

        <p className="weather-now-intro">
          A mobile weather application developed as part of my mobile
          development project. The project explores API integration and
          presenting weather information through a mobile interface.
        </p>

        <div className="weather-now-actions">
          <a
            className="weather-now-action"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source code <span>↗</span>
          </a>
        </div>
      </section>

      <section className="weather-now-section">
        <p className="weather-now-section-label">
          01 — OVERVIEW
        </p>

        <div>
          <h2>Weather information, made accessible.</h2>

          <p>
            WeatherNow is a mobile development project focused on
            connecting an application to an external weather API and
            presenting weather-related information to the user.
          </p>
        </div>
      </section>

      <section className="weather-now-section">
        <p className="weather-now-section-label">
          02 — TECHNOLOGY
        </p>

        <div>
          <h2>Tools used.</h2>

          <p>
            The project repository is the source for exploring the
            implementation and technical details.
          </p>

          <div className="weather-now-tech">
            <span>Flutter</span>
            <span>Dart</span>
            <span>REST API</span>
            <span>Mobile Development</span>
          </div>
        </div>
      </section>

      <div className="weather-now-bottom">
        <footer className="weather-now-footer">
          <span>© 2026 Iara Alrawi</span>
          <span>WeatherNow · Mobile Development</span>
          <span>Sweden</span>
        </footer>

        <button
          type="button"
          className="weather-now-back"
          onClick={onBack}
        >
          <span>←</span> Back to projects
        </button>
      </div>
    </main>
  );
}

export default WeatherNow;