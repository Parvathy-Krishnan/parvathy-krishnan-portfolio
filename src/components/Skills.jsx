import {
  BarChart3,
  CloudCog,
  Code2,
  Gauge,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";
import { principles, skillGroups, waysOfWorking } from "../data";
import Reveal from "./Reveal";

const icons = {
  workflow: Workflow,
  code: Code2,
  cloud: CloudCog,
  gauge: Gauge,
  devices: MonitorSmartphone,
  chart: BarChart3,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-head skills-head">
          <div>
            <p className="eyebrow">04 — Skills</p>
            <h2 className="section-title">
              The test surface, <em>covered.</em>
            </h2>
          </div>
          <p className="section-lede">
            Six capability areas that work together: automation, code, delivery
            pipelines, specialised testing, device coverage and the observability
            to understand what happened in production.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] ?? Workflow;
            return (
              <Reveal key={group.title} delay={index * 60}>
                <article className="skill-card">
                  <span className="skill-icon" aria-hidden="true">
                    <Icon size={21} strokeWidth={1.6} />
                  </span>
                  <h3>{group.title}</h3>
                  <p>{group.copy}</p>
                  <ul className="tag-list">
                    {group.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="working-knowledge" delay={80}>
          <div className="working-knowledge-head">
            <span className="micro">{waysOfWorking.label}</span>
            <ul className="working-tags">
              {waysOfWorking.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="working-note">{waysOfWorking.note}</p>
        </Reveal>

        <div className="principles">
          <Reveal className="principles-head">
            <p className="eyebrow">How I work</p>
          </Reveal>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 90}>
                <article className="principle">
                  <span className="principle-number">{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
