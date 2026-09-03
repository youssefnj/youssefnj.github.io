import { useMemo, useState } from "react";
import { copy as t, profile } from "./data/content";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const featured = useMemo(
    () => t.projects.find((project) => project.featured),
    [],
  );
  const others = useMemo(
    () => t.projects.filter((project) => !project.featured),
    [],
  );

  return (
    <>
      <a className="skip" href="#about">
        {t.skip}
      </a>

      <header className="header">
        <div className="wrap header-inner">
          <a className="brand" href="#top">
            <span className="mark">{profile.monogram}</span>
            <span className="brand-name">{profile.name}</span>
          </a>

          <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Primary">
            {t.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-ghost" href={profile.cv} download>
              {t.cv}
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={menuOpen}
              aria-label="Menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" />
              {t.availability}
            </p>
            <h1>{profile.name}</h1>
            <p className="hero-sub">
              {t.role} · {t.specialty}
            </p>
            <p className="lead">{t.headline}</p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#projects">
                {t.ctaPrimary}
              </a>
              <a className="btn btn-ghost" href="#contact">
                {t.ctaSecondary}
              </a>
            </div>
            <div className="meta-row">
              <span>{profile.location}</span>
              <a href={profile.phoneHref}>{profile.phone}</a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                {profile.githubLabel}
              </a>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <span className="num">01</span>
              <h2>{t.aboutTitle}</h2>
            </div>
            <div className="about-grid">
              <div>
                <p className="about-lead serif">{t.aboutLead}</p>
                <div className="about-body">
                  {t.aboutBody.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <aside className="facts">
                {t.facts.map((fact) => (
                  <div className="fact" key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <span className="num">02</span>
              <h2>{t.skillsTitle}</h2>
            </div>
            <p className="intro">{t.skillsIntro}</p>
            <div className="skills-grid">
              {t.skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="langs">
              {t.languages.map((item) => (
                <div className="lang-card" key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <div className="section-head">
              <span className="num">03</span>
              <h2>{t.experienceTitle}</h2>
            </div>
            <div className="timeline">
              {t.experience.map((job) => (
                <article className="job" key={`${job.role}-${job.year}`}>
                  <div className="year">{job.year}</div>
                  <div>
                    <h3>{job.role}</h3>
                    <div className="org">{job.org}</div>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="section-head">
              <span className="num">04</span>
              <h2>{t.projectsTitle}</h2>
            </div>
            <p className="intro">{t.projectsIntro}</p>

            {featured && (
              <article className="featured">
                <div className="kicker">
                  {t.featuredLabel} · {featured.year}
                </div>
                <h3>{featured.title}</h3>
                <p className="kind">{featured.kind}</p>
                <p className="summary">{featured.summary}</p>
                <div className="chips" style={{ marginTop: "1rem" }}>
                  {featured.stack.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <ul>
                  {featured.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            )}

            <div className="project-grid">
              {others.map((project) => (
                <article className="card" key={project.title}>
                  <div className="kicker">{project.year}</div>
                  <h3>{project.title}</h3>
                  <p className="kind">{project.kind}</p>
                  <p>{project.summary}</p>
                  <div className="chips">
                    {project.stack.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education">
          <div className="wrap">
            <div className="section-head">
              <span className="num">05</span>
              <h2>{t.educationTitle}</h2>
            </div>
            <div className="edu">
              {t.education.map((item) => (
                <article className="edu-item" key={item.title}>
                  <div className="year">{item.years}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                    {item.detail ? <p>{item.detail}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact-box">
              <h2>{t.contactTitle}</h2>
              <p>{t.contactLead}</p>
              <a className="btn btn-solid" href={`mailto:${profile.email}`}>
                {t.contactCta}
              </a>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.phoneHref}>{profile.phone}</a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.cv} download>
                  CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">© {new Date().getFullYear()} · {t.footer}</div>
      </footer>
    </>
  );
}
