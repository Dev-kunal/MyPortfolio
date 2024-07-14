import React from "react";
import "./experience.css";

export default function Experience(props) {
  return (
    <div id="experience" className="experience">
      <div className="faint-heading">&lt; Experience /&gt;</div>
      <div className="experience-container">
        <div className="exp-term">
          <div className="org-logo">
            <a href="https://source.one/" target="_blank" rel="noreferrer">
              <img
                className="org-img"
                src="https://framerusercontent.com/images/lY1aRk2YjHnVuxtKqVZ26tgTzeQ.png"
                alt=""
              />
            </a>
            <h2 className="org-name"> SDE-1 (Dec-2021 - Jan 2024)</h2>
          </div>
          <div className="exp-details">
            <ul>
              <li>
                Developed e-commerce CRM for online polymer trading,
                contributing to frontend, backend, and on-call support.
              </li>
              <li>
                Architected and optimized Node.js APIs and database queries,
                integrated various services, improving workflow efficiency by
                30% and reducing manual work.
              </li>
              <li>
                Implemented comprehensive testing (unit, integration,
                acceptance) to enhance code quality and reliability, reducing
                post-release defects by 30%, and led the on-call team for
                critical issue resolution.
              </li>
            </ul>
          </div>
        </div>

        <div className="badge-container">
          <span className="badge">
            Open to Opportunities - Looking for my next Adventure/Experience.
          </span>
        </div>
      </div>
    </div>
  );
}
