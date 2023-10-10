import React from "react";

const menu = ["Qui suis-je ?", "Mes projets", "Skills", "Me contacter"];

export default function Navigation() {
      return (
            <nav id="nav">
                  <ul>
                        {menu.map((item, index) => (
                              <li key={index}>
                                    <a
                                          href={
                                                index === 0
                                                      ? "#about"
                                                      : index === 1
                                                      ? "#projects"
                                                      : index === 2
                                                      ? "#skills"
                                                      : index === 3
                                                      ? "#contact"
                                                      : "#home"
                                          }>
                                          {index}. {item}
                                    </a>
                                    <div id="underline"></div>
                              </li>
                        ))}
                  </ul>
            </nav>
      );
}
