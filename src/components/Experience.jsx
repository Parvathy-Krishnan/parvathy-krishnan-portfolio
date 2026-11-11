import { MapPin } from "lucide-react";
import { earlierNote, education, experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal className="section-head experience-head">
          <div>
            <p className="eyebrow">03 — Experience</p>
            <h2 className="section-title">
              Thirteen years,
              <br />
              one through-line: quality that <em>ships.</em>
            </h2>
          </div>
          <p className="section-lede">
            From functional testing in small product teams to leading test
            automation for streaming, player and payment products at Comcast.
          </p>
        </Reveal>

        <ol className="timeline">
          {experience.map((role, index) => (
            <Reveal key={role.company} as="li" className="timeline-item" delay={index * 80}>
              <div className="timeline-rail" aria-hidden="true">
                <span className={`timeline-dot ${role.status ? "is-current" : ""}`} />
              </div>

              <article className="role-card">
                <div className="role-top">
                  <div className="role-dates">
                    <span className="role-dates-range">{role.dates}</span>
                    <span className="role-duration">{role.duration}</span>
                  </div>
                  {role.status && <span className="role-status">{role.status}</span>}
                </div>

                <h3>{role.title}</h3>
                <p className="role-org">{role.company}</p>
                <p className="role-meta">
                  <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
                  {role.location}
                </p>

                <p className="role-intro">{role.intro}</p>

                <ul className="role-list">
                  {role.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="role-products" aria-label="Products and projects">
                  <span className="label">Products &amp; projects</span>
                  <ul>
                    {role.products.map((product) => (
                      <li key={product}>{product}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <div className="experience-extra">
          <Reveal className="education">
            <div className="extra-head">
              <span className="label">Education</span>
              <span className="extra-count">Anna University</span>
            </div>
            <ul className="degree-list">
              {education.degrees.map((item) => (
                <li key={item.degree}>
                  <strong>{item.degree}</strong>
                  <span>{item.meta}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="experience-note" delay={90}>
            <span className="label">In short</span>
            <p>{earlierNote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
