import {
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { availability, CV_FORMATS, profile } from "../data";
import Reveal from "./Reveal";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/parvathykrish",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Parvathy-Krishnan",
    href: profile.github,
    icon: Github,
    external: true,
  },
  {
    label: "Website",
    value: profile.websiteDisplay,
    href: profile.website,
    icon: Globe,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow">07 — Contact</p>
          <h2 className="section-title">
            Let&rsquo;s talk about
            <br />
            the next <em>release.</em>
          </h2>
          <p className="contact-lede">
            Open to Lead SDET, test automation and quality engineering roles
            across product teams &mdash; with direct contact and a CV in whichever
            format is useful.
          </p>

          <p className="contact-location">
            <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
            {availability.base}
            <span aria-hidden="true">·</span>
            {availability.relocation}
          </p>
        </Reveal>

        <Reveal className="contact-links-wrap" delay={120}>
          <div className="contact-links">
            <span className="micro">Direct contact &amp; profiles</span>
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact-link"
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  <span className="contact-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <span className="contact-link-text">
                    <strong>{link.label}</strong>
                    <span>{link.value}</span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="contact-arrow"
                  />
                </a>
              );
            })}
          </div>

          <div className="cv-downloads">
            <span className="micro cv-downloads-label">
              <ArrowDownToLine size={13} strokeWidth={1.8} aria-hidden="true" />
              CV downloads · 4 formats
            </span>

            <ul className="cv-format-list">
              {CV_FORMATS.map((format) => (
                <li key={format.code}>
                  <span className="cv-format-info">
                    <strong>{format.label}</strong>
                    <span>
                      {format.lang} · {format.note}
                    </span>
                  </span>
                  <span className="cv-format-links">
                    <a
                      href={format.pdf}
                      download
                      aria-label={`${format.label} (${format.lang}), PDF`}
                    >
                      PDF
                    </a>
                    <a
                      href={format.docx}
                      download
                      aria-label={`${format.label} (${format.lang}), Word`}
                    >
                      DOCX
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            PK
          </span>
          <div>
            <strong>{profile.name}</strong>
            <p className="footer-role">{profile.role}</p>
            <a
              className="footer-site"
              href={profile.website}
              target="_blank"
              rel="noreferrer noopener"
            >
              {profile.websiteDisplay}
            </a>
          </div>
        </div>

        <div className="footer-meta">
          <span>Chennai, India</span>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span aria-hidden="true">·</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
