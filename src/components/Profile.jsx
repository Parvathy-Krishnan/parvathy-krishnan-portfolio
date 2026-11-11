import { about, availability, languages, mandate, qualityLoop } from "../data";
import Reveal from "./Reveal";

export default function Profile() {
  return (
    <section id="profile" className="section profile">
      <div className="container profile-grid">
        <Reveal className="profile-copy">
          <p className="eyebrow">02 — Profile</p>
          <h2 className="section-title">
            Quality is a
            <br />
            <em>practice,</em> not a gate.
          </h2>

          <blockquote className="profile-quote">
            <p>{about}</p>
          </blockquote>

          <div className="profile-body">
            <p>
              I have spent thirteen years in software quality engineering, from
              functional and regression testing through to leading automation
              for a video platform, player development kit and commerce payment
              gateway at Comcast. Along the way I have tested knowledge
              management, course tracking, operator qualification, CRM and
              healthcare systems &mdash; and worked on client location in
              Singapore.
            </p>
            <p>
              My work sits across the whole test surface: web and mobile
              automation with TestCafe, Appium and Selenium; API and integration
              checks; performance with JMeter and BlazeMeter; security with
              ZAProxy and manual audit; accessibility; and cross-browser and
              device coverage through BrowserStack and AWS Device Farm. I wire
              those checks into delivery with Jenkins, Concourse, TeamCity,
              Docker, Kubernetes and AWS.
            </p>
            <p>
              I also hold an MBA in Technology Management from Anna University,
              which shapes how I read delivery risk, report quality metrics and
              lead projects beyond the test suite itself.
            </p>
          </div>

          <div className="profile-languages">
            <span className="label">Languages</span>
            <ul>
              {languages.map((language) => (
                <li key={language.name}>
                  <strong>{language.name}</strong>
                  <span>{language.level}</span>
                  <span className="language-note">{language.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mandate-wrap" delay={120}>
          <aside className="mandate" aria-label="Current mandate">
            <div className="mandate-top">
              <span className="micro">Current mandate</span>
              <span className="mandate-index">2026</span>
            </div>
            <h3 className="mandate-title">
              Quality engineering across video, player and commerce products.
            </h3>

            <dl className="mandate-list">
              {mandate.map(([label, value]) => (
                <div key={label} className="mandate-row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mandate-quote">
              <span aria-hidden="true">&ldquo;</span>
              Automation, coverage and release confidence &mdash; owned end to
              end.
            </p>
          </aside>
        </Reveal>
      </div>

      <div className="container">
        <div className="quality-loop">
          <Reveal className="quality-loop-head">
            <p className="eyebrow">The quality loop</p>
            <p className="quality-loop-lede">
              How a test practice stays useful after the first release.
            </p>
          </Reveal>
          <ol className="quality-loop-grid">
            {qualityLoop.map((step, index) => (
              <Reveal
                as="li"
                key={step.number}
                delay={index * 70}
                className="quality-step"
              >
                <span className="quality-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal className="profile-relocation" delay={80}>
          <span className="label">Location</span>
          <p>
            Based in {availability.base}. {availability.relocation}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
