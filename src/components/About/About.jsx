import "./about.css";
import "../Hero/hero.css";

export const About = () => {
  return (
    <div id="about">
      <div className="faint-heading">&lt; About /&gt;</div>
      <div className="about">
        <div className="about-info">
          <p>
            Hello! I'm <span className="hey">Kunal Tijare</span>
            <br />
            A JavaScript Developer with an eye for UI-UX, I’ve experience in
            building end-to-end web-apps across MERN stack.I Love building
            things on web.
            <br />
            Currently working as a full stack developer at Source.One <br />
            <br /> When I'm not immersed in the digital world, you'll find me
            exploring the great outdoors. Hiking, trekking ⛰️ & especially going
            for road trips in monsoon. I also enjoy some lazy 🥱 weekends
            streaming movies and shows.
          </p>
          <a
            className="connect-btn"
            href="https://drive.google.com/file/d/1E9fSrBt602QqDL5ltHT6aylovS8vdrge/view?usp=sharing"
          >
            <button className="btn">Download CV</button>
          </a>
        </div>

        <div className="hero-img-container">
          <img
            className="about-img"
            width="100%"
            height="auto"
            src="Images/myimage2.jpeg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};
