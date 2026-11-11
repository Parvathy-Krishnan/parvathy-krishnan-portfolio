import { Award, Medal, Sparkles, Trophy } from "lucide-react";
import { awards } from "../data";
import Reveal from "./Reveal";

const icons = [Trophy, Trophy, Sparkles, Medal, Award, Award, Award];

export default function Awards() {
  return (
    <section id="awards" className="section awards">
      <div className="container">
        <Reveal className="section-head awards-head">
          <div>
            <p className="eyebrow">05 — Recognition</p>
            <h2 className="section-title">
              Work that was <em>noticed.</em>
            </h2>
          </div>
          <p className="section-lede">
            Recognition across broadcast-scale delivery and everyday product
            quality &mdash; from two Olympic broadcasts to a company-wide
            innovation award.
          </p>
        </Reveal>

        <div className="awards-grid">
          {awards.map((award, index) => {
            const Icon = icons[index] ?? Award;
            return (
              <Reveal key={award.title} delay={index * 55}>
                <article className={`award-card ${award.year ? "has-year" : ""}`}>
                  <div className="award-top">
                    <span className="award-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                    {award.year ? (
                      <span className="award-year">{award.year}</span>
                    ) : (
                      <span className="award-label">{award.label}</span>
                    )}
                  </div>
                  <h3>{award.title}</h3>
                  <p>{award.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
