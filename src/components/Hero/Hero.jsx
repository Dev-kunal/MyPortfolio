import "./hero.css";

export const Hero = () => {
  return (
    <header className="profile">
      <div className="profile-header">
        <a href="#about">
          <img className="avatar" src="Images/my-icon.jpg" alt="profile" />
        </a>
        <h1 className="title">Kunal Tijare</h1>
        <p className="subtitle">Full‑Stack JavaScript Engineer</p>
        <div className="socials">
          <a
            className="social"
            rel="noreferrer"
            target="_blank"
            href="mailto: kunaltijare77@gmail.com"
          >
            <i className="fas fa-at"></i>
          </a>
          <a
            className="social"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/kunal-tijare"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="social"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Dev-kunal"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            className="social"
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/kunal_tijare"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="social"
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/kunal_tijare/"
          >
            <i className="fab fa-instagram"></i>
          </a>

        </div>
      </div>
      <div className="divider" />
      <nav className="pills">
        <a className="pill" href="#about">About</a>
        <a className="pill" href="#projects">Projects</a>
        <a className="pill" href="#blogs">Blogs</a>
      </nav>
    </header>
  );
};
