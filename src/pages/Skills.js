import React from "react";

const cards = [
      {
            name: "Design",
            technos: ["Canva", "Photoshop", "Illustrator"],
      },
      {
            name: "Web",
            technos: ["HTML", "CSS", "Javascript"],
      },
      {
            name: "J'apprends...",
            technos: ["React", "Node.js", "React Native"],
      },
];

export default function Skills() {
      return (
            <div id="skills">
                  <h2>Skills</h2>
                  <div className="cards_container">
                        {cards.map((card, index) => (
                              <div className={`card`} id={`card ${index}`}>
                                    <h3>{card.name}</h3>
                                    <div className="border"></div>
                                    <div className="technos">
                                          <span
                                                className={`icon ${
                                                      card.technos[0] ===
                                                      "Canva"
                                                            ? "canva"
                                                            : card
                                                                    .technos[0] ===
                                                              "HTML"
                                                            ? "html"
                                                            : card
                                                                    .technos[0] ===
                                                              "React"
                                                            ? "react"
                                                            : ""
                                                }`}></span>
                                          <p>{card.technos[0]}</p>
                                    </div>
                                    <div className="technos">
                                          <span
                                                className={`icon ${
                                                      card.technos[1] ===
                                                      "Photoshop"
                                                            ? "photoshop"
                                                            : card
                                                                    .technos[1] ===
                                                              "CSS"
                                                            ? "css"
                                                            : card
                                                                    .technos[1] ===
                                                              "Node.js"
                                                            ? "node"
                                                            : ""
                                                }`}></span>
                                          <p>{card.technos[1]}</p>
                                    </div>
                                    <div className="technos">
                                          <span
                                                className={`icon ${
                                                      card.technos[2] ===
                                                      "Illustrator"
                                                            ? "illustrator"
                                                            : card
                                                                    .technos[2] ===
                                                              "Javascript"
                                                            ? "javascript"
                                                            : card
                                                                    .technos[2] ===
                                                              "React Native"
                                                            ? "react"
                                                            : ""
                                                }`}></span>
                                          <p>{card.technos[2]}</p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}
