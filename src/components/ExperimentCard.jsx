import { useState } from "react";

export default function ExperimentCard({ no, title, code }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied("err");
      setTimeout(() => setCopied(false), 1400);
    }
  }

  return (
    <article className="exp-card" data-no={no}>
      <div className="exp-badges">
        <span className="exp-badge">EXP. NO. {no}</span>
        <span className="exp-type">MATLAB PROGRAM</span>
      </div>
      <h2 className="exp-title">{title}</h2>

      <div className="code-container">
        <div className="code-header">
          <div className="code-dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="code-filename">program.m</span>
          </div>
          <button
            onClick={handleCopy}
            className={`copy-btn ${copied === true ? "copy-btn--success" : ""}`}
          >
            {copied === true ? "Copied!" : copied === "err" ? "Select manually" : "Copy"}
          </button>
        </div>
        <pre className="code-block">
          <code>{code}</code>
        </pre>
      </div>
    </article>
  );
}
