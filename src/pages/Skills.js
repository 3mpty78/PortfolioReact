import React from "react";
import Marquee from "react-fast-marquee";

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
      const articles = document.querySelectorAll(" #skills article");

      articles.forEach((item) => {
            item.innerHTML += item.innerHTML;
      });

      return (
            <div id="skills">
                  <section className="banner-container">
                        <div className="banner">
                              <Marquee
                                    className="marquee"
                                    play={true}
                                    pauseOnHover={true}
                                    direction="left"
                                    speed={100}
                                    loop={0}>
                                    <article id="design">
                                          <div className="tech">
                                                <img
                                                      src={figma}
                                                      alt="Figma icon"
                                                />
                                                <p>Figma</p>
                                          </div>
                                          <div className="tech">
                                                <img
                                                      src={illustrator}
                                                      alt="Adobe Illustrator icon"
                                                />
                                                <p>Illustrator</p>
                                          </div>
                                          <div className="tech">
                                                <img
                                                      src={photoshop}
                                                      alt="Adobe Photoshop icon"
                                                />
                                                <p>Photoshop</p>
                                          </div>
                                          <div className="tech">
                                                <img
                                                      src={html}
                                                      alt="HTML 5 icon"
                                                />
                                                <p>HTML</p>
                                          </div>
                                          <div className="tech">
                                                <img
                                                      src={css}
                                                      alt="CSS 3 icon"
                                                />
                                                <p>CSS</p>
                                          </div>
                                          <div className="tech">
                                                <img
                                                      src={js}
                                                      alt="Javascript icon"
                                                />
                                                <p>Javascript</p>
                                          </div>
                                          <div className="tech">
                                                <img
                                                      src={react}
                                                      alt="React JS icon"
                                                />
                                                <p>React JS</p>
                                          </div>
                                          <div className="tech">
                                                <img
                                                      src={react}
                                                      alt="React Native icon"
                                                />
                                                <p>React Native</p>
                                          </div>
                                          <div className="tech">
                                                <img
                                                      src={node}
                                                      alt="Node JS icon"
                                                />
                                                <p>Node JS</p>
                                          </div>
                                    </article>
                              </Marquee>
                        </div>
                  </section>
            </div>
      );
}
