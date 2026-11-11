import { metrics } from "../data";
import Reveal from "./Reveal";

export default function Metrics() {
  return (
    <section id="impact" className="section metrics">
      <div className="container">
        <Reveal className="metrics-head">
          <div>
            <p className="eyebrow">01 &mdash; Impact</p>
            <h2 className="section-title">A practice measured in releases.</h2>
          </div>
          <p className="section-lede">
            Thirteen years across three organisations, five product domains and
            two Olympic broadcasts &mdash; with quality engineering at the centre
            of every one.
          </p>
        </Reveal>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} className="metric" delay={index * 70}>
              <p className="metric-value">
                {metric.value}
                <span className="metric-suffix">{metric.suffix}</span>
              </p>
              <p className="metric-label">{metric.label}</p>
              <p className="metric-note">{metric.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
