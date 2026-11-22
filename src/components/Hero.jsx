import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { atAGlance, domains, profile } from "../data";
import CvDownload from "./CvDownload";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <MapPin size={13} strokeWidth={1.7} aria-hidden="true" />
            {profile.location}
            <span aria-hidden="true">·</span>
            {profile.credentials}
          </p>

          <h1 className="hero-title">
            {profile.firstName}
            <br />
            <em>{profile.lastName}</em>
          </h1>

          <p className="hero-certification">
            <BadgeCheck size={17} strokeWidth={2} aria-hidden="true" />
            <span>
              <strong>ISTQB®</strong> Certified Tester · Foundation Level
            </span>
          </p>

          <p className="hero-role">
            Lead Software Development Engineer in Test
          </p>

          <p className="hero-lede">
            Thirteen years in software quality engineering, leading test
            automation and release confidence for video, commerce, CRM and
            healthcare products. I work across web, mobile, API, performance,
            security and accessibility — with hands-on client delivery in
            Singapore.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              View experience
              <ArrowRight size={16} strokeWidth={1.9} aria-hidden="true" />
            </a>
            <CvDownload />
          </div>

          <div className="hero-credentials">
            <span className="label">Domain experience</span>
            <ul className="domain-list">
              {domains.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Current position">
          <div className="panel-head">
            <span className="label">Currently</span>
            <span className="panel-year">Chennai, IN</span>
          </div>

          <h2 className="panel-title">Lead SDET</h2>
          <p className="panel-org">
            Comcast India Engineering Center
          </p>

          <dl className="fact-list">
            {atAGlance.map(([label, value]) => (
              <div className="fact-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <a className="text-link panel-link" href="#experience">
            Full experience
            <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}
