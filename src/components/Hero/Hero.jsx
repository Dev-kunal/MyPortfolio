import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="info">
        <span className="hey">HEY THERE!</span>
        <h1 style={{ fontSize: "3rem" }}>
          I'm <span className="myname">Kunal</span>
        </h1>
        <h2 className="sec-text">
          {" "}
          A FullStack Javascript Engineer.
          <br />
          Love to work on the Frontend.
          <br />
        </h2>
        <a className="connect-btn" href="#connect">
          <button className="btn">Let's Connect</button>
        </a>
      </div>
      <div className="hero-img-container">
        <img
          className="hero-img"
          width="100%"
          height="auto"
          src="Images/hero.png"
          alt="hero"
        />
      </div>
    </div>
  );
};
