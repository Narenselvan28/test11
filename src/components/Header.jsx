export default function Header({ total, programCount }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="logo">
          <div className="logo-badge">DSP</div>
          <div className="logo-text">
            <p className="logo-title">MATLAB Programs</p>
            <p className="logo-sub">Digital Signal Processing Lab</p>
          </div>
        </a>
        <div className="header-pill">
          {total} Experiments · {programCount} Programs
        </div>
      </div>
    </header>
  );
}
