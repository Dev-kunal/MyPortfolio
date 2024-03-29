import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-brand">
        <span className="nav-brand-heading">Kunal Tijare</span>
      </div>
      <div className="nav-group">
        <div className="nav-menu">
          <a className="nav-link" href="#about">
            About
          </a>
        </div>
        <div className="nav-menu">
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </div>

        <div className="nav-menu">
          <a className="nav-link" href="#blogs">
            Blogs
          </a>
        </div>
        <div className="nav-menu">
          <a className="nav-link" href="#connect">
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};
