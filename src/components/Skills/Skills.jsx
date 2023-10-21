import { skillsData } from "../../utils";
import "./skills.css";

export const Skills = () => {
  return (
    <div id="skills">
      <div className="faint-heading">&lt; Skills /&gt;</div>
      <div className="skills-container">
        <div className="skills">
          {skillsData.map(({ label, icon }) => (
            <span className="skillBullet">
              <img width={30} height={30} src={icon} alt="" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
