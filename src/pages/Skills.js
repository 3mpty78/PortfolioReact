import React from "react";

// Import des icons
import figma from "../assets/icons/tech/figma.svg";
import illustrator from "../assets/icons/tech/illustrator.svg";
import photoshop from "../assets/icons/tech/photoshop.svg";
import html from "../assets/icons/tech/html.svg";
import css from "../assets/icons/tech/css.svg";
import js from "../assets/icons/tech/js.svg";
import react from "../assets/icons/tech/react.svg";
import node from "../assets/icons/tech/node.svg";

export default function Skills() {
      const lists = document.querySelectorAll(".list");

      lists.forEach((list) => {
            list.innerHTML += list.innerHTML;
      });

      return (
            <div id="skills">
                  <h2>Skills</h2>

                  <div className="banner-container">
                        <div className="banner">
                              <h3>Design</h3>
                              <ul className="design list">
                                    <li>
                                          <img src={figma} alt="Figma icon" />
                                          <p>Figma</p>
                                    </li>
                                    <li>
                                          <img
                                                src={illustrator}
                                                alt="Adobe Illustrator icon"
                                          />
                                          <p>Illustrator</p>
                                    </li>
                                    <li>
                                          <img
                                                src={photoshop}
                                                alt="Adobe Photoshop icon"
                                          />
                                          <p>Photoshop</p>
                                    </li>
                              </ul>
                        </div>
                        <div className="banner">
                              <h3>Web</h3>
                              <ul className="web list">
                                    <li>
                                          <img src={html} alt="HTML 5 icon" />
                                          <p>HTML</p>
                                    </li>
                                    <li>
                                          <img src={css} alt="CSS 3 icon" />
                                          <p>CSS</p>
                                    </li>
                                    <li>
                                          <img src={js} alt="Javascript icon" />
                                          <p>Javascript</p>
                                    </li>
                              </ul>
                        </div>
                        <div className="banner">
                              <h3>J'apprends</h3>
                              <ul className="learning list">
                                    <li>
                                          <img
                                                src={react}
                                                alt="React JS icon"
                                          />
                                          <p>React JS</p>
                                    </li>
                                    <li>
                                          <img
                                                src={react}
                                                alt="React Native icon"
                                          />
                                          <p>React Native</p>
                                    </li>
                                    <li>
                                          <img src={node} alt="Node JS icon" />
                                          <p>Node JS</p>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
}
