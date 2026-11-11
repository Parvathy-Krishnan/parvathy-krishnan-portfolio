import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import { cvLocales } from "./cv-content.mjs";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 48;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const BOTTOM = PAGE_HEIGHT - MARGIN;

const COLORS = {
  ink: "#241C26",
  muted: "#6E6472",
  accent: "#4B2A4F",
  rule: "#C9B9A9",
  footer: "#7C7280",
};

function generatePdf(cv, outFile) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
      bufferPages: true,
      info: {
        Title: cv.docTitle,
        Author: "Parvathy Krishnan",
        Subject: cv.docDescription,
        Keywords:
          "Lead SDET, test automation, quality engineering, Selenium, TestCafe, Appium, API testing, performance testing, accessibility",
      },
    });

    const output = fs.createWriteStream(outFile);
    doc.pipe(output);

    const ensure = (height) => {
      if (doc.y + height > BOTTOM) doc.addPage();
    };

    const section = (title) => {
      ensure(62);
      if (doc.y > MARGIN + 4) doc.moveDown(0.6);
      const y = doc.y;
      doc
        .font("Helvetica-Bold")
        .fontSize(9.6)
        .fillColor(COLORS.accent)
        .text(title.toUpperCase(), MARGIN, y, {
          width: CONTENT_WIDTH,
          characterSpacing: 0.9,
        });
      const lineY = doc.y + 3;
      doc
        .moveTo(MARGIN, lineY)
        .lineTo(MARGIN + CONTENT_WIDTH, lineY)
        .lineWidth(0.7)
        .strokeColor(COLORS.rule)
        .stroke();
      doc.y = lineY + 5;
    };

    const body = (text, options = {}) => {
      ensure(16);
      let font = "Helvetica";
      if (options.italics) font = "Helvetica-Oblique";
      if (options.bold) font = "Helvetica-Bold";
      doc
        .font(font)
        .fontSize(options.size ?? 9.2)
        .fillColor(options.color ?? COLORS.ink)
        .text(text, MARGIN, doc.y, {
          width: CONTENT_WIDTH,
          lineGap: 1.45,
        });
      doc.moveDown(options.after ?? 0.18);
    };

    const bullet = (text) => {
      ensure(16);
      const y = doc.y;
      doc
        .font("Helvetica")
        .fontSize(9.2)
        .fillColor(COLORS.ink)
        .text("•", MARGIN, y, { width: 10 });
      doc
        .font("Helvetica")
        .fontSize(9.2)
        .fillColor(COLORS.ink)
        .text(text, MARGIN + 12, y, {
          width: CONTENT_WIDTH - 12,
          lineGap: 1.35,
        });
      doc.y = Math.max(doc.y, y + 12) + 2.0;
    };

    const rightAlignedLine = (left, right, options = {}) => {
      ensure(18);
      const y = doc.y;
      doc
        .font("Helvetica-Bold")
        .fontSize(options.size ?? 10.4)
        .fillColor(options.color ?? COLORS.ink)
        .text(left, MARGIN, y, { width: CONTENT_WIDTH * 0.78, lineGap: 1.2 });
      const afterLeft = doc.y;
      doc
        .font("Helvetica")
        .fontSize(8.4)
        .fillColor(COLORS.muted)
        .text(right, MARGIN, y, {
          width: CONTENT_WIDTH,
          align: "right",
          lineGap: 1.2,
        });
      doc.y = afterLeft + 2;
    };

    // Header
    doc
      .font("Helvetica-Bold")
      .fontSize(21)
      .fillColor(COLORS.accent)
      .text(cv.name, MARGIN, MARGIN, {
        width: CONTENT_WIDTH,
        characterSpacing: 0.4,
      });
    doc.moveDown(0.12);
    doc
      .font("Helvetica")
      .fontSize(9.6)
      .fillColor(COLORS.muted)
      .text(cv.role, { width: CONTENT_WIDTH, lineGap: 1 });
    doc.moveDown(0.35);
    cv.contact.forEach((line, index) => {
      doc
        .font("Helvetica")
        .fontSize(8.4)
        .fillColor(COLORS.muted)
        .text(line.join("   |   "), { width: CONTENT_WIDTH, lineGap: 0.4 });
      if (index < cv.contact.length - 1) doc.moveDown(0.06);
    });
    const headerRuleY = doc.y + 5;
    doc
      .moveTo(MARGIN, headerRuleY)
      .lineTo(MARGIN + CONTENT_WIDTH, headerRuleY)
      .lineWidth(1.2)
      .strokeColor(COLORS.accent)
      .stroke();
    doc.y = headerRuleY + 4;

    section(cv.labels.summary);
    body(cv.summary);

    section(cv.labels.achievements);
    cv.achievements.forEach(bullet);

    section(cv.labels.experience);
    cv.experience.forEach((job, index) => {
      ensure(58);
      if (index > 0) doc.moveDown(0.3);
      rightAlignedLine(job.title, job.dates);
      body(job.org, { bold: true, size: 9.1, color: COLORS.accent, after: 0.04 });
      body(job.location, { size: 8.4, color: COLORS.muted, after: 0.18 });
      if (job.intro) {
        body(job.intro, {
          size: 8.4,
          color: COLORS.muted,
          italics: true,
          after: 0.24,
        });
      }
      job.bullets.forEach(bullet);
    });

    section(cv.labels.education);
    cv.education.forEach((entry, index) => {
      ensure(42);
      if (index > 0) doc.moveDown(0.35);
      rightAlignedLine(entry.degree, entry.dates, { size: 9.6 });
      const detail = entry.note
        ? `${entry.institution} · ${entry.note}`
        : entry.institution;
      body(detail, {
        size: 8.8,
        color: COLORS.muted,
        after: 0.1,
      });
    });

    section(cv.labels.languages);
    cv.languages.forEach((language) => {
      ensure(16);
      doc
        .font("Helvetica-Bold")
        .fontSize(9.2)
        .fillColor(COLORS.ink)
        .text(`${language.name}  -  ${language.level}`, MARGIN, doc.y, {
          width: CONTENT_WIDTH,
          continued: true,
        })
        .font("Helvetica")
        .fillColor(COLORS.muted)
        .text(`  -  ${language.note}`);
      doc.moveDown(0.16);
    });

    section(cv.labels.digital);
    cv.digitalSkills.forEach((skill) => {
      ensure(18);
      doc
        .font("Helvetica-Bold")
        .fontSize(9)
        .fillColor(COLORS.ink)
        .text(`${skill.label}: `, MARGIN, doc.y, {
          width: CONTENT_WIDTH,
          continued: true,
        })
        .font("Helvetica")
        .fillColor(COLORS.ink)
        .text(skill.value, { width: CONTENT_WIDTH, lineGap: 1.4 });
      doc.moveDown(0.16);
    });

    section(cv.labels.awards);
    cv.awards.forEach((award) => {
      ensure(18);
      doc
        .font("Helvetica-Bold")
        .fontSize(9)
        .fillColor(COLORS.ink)
        .text(`${award.title}: `, MARGIN, doc.y, {
          width: CONTENT_WIDTH,
          continued: true,
        })
        .font("Helvetica")
        .fillColor(COLORS.muted)
        .text(award.note, { width: CONTENT_WIDTH, lineGap: 1.4 });
      doc.moveDown(0.16);
    });

    section(cv.labels.additional);
    cv.additional.forEach(bullet);

    // Footer with page numbers
    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i += 1) {
      doc.switchToPage(range.start + i);
      const previousBottom = doc.page.margins.bottom;
      doc.page.margins.bottom = 0;
      doc
        .font("Helvetica")
        .fontSize(7.4)
        .fillColor(COLORS.footer)
        .text(
          `${cv.labels.footer}  |  ${cv.labels.page} ${i + 1} ${cv.labels.of} ${range.count}`,
          MARGIN,
          PAGE_HEIGHT - 26,
          { width: CONTENT_WIDTH, align: "right", lineBreak: false }
        );
      doc.page.margins.bottom = previousBottom;
    }

    doc.end();

    output.on("finish", () => resolve(fs.statSync(outFile).size));
    output.on("error", reject);
  });
}

const outDir = path.resolve("public");
fs.mkdirSync(outDir, { recursive: true });

const requested = process.argv.slice(2).filter(Boolean);
const codes = requested.length ? requested : Object.keys(cvLocales);

for (const code of codes) {
  const cv = cvLocales[code];
  if (!cv) {
    console.error(`Unknown CV locale: ${code}`);
    process.exitCode = 1;
    continue;
  }
  const outFile = path.join(outDir, `${cv.fileBase}.pdf`);
  const size = await generatePdf(cv, outFile);
  console.log(`Wrote ${outFile} (${size.toLocaleString()} bytes)`);
}
