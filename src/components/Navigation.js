import React from "react";

const menu = ["Mes projets", "Skills", "Me contacter"];

export default function Navigation() {
      return (
            <nav id="nav">
                  <ul>
                        {menu.map((item, index) => (
                              <li key={index}>
                                    <a
                                          href={
                                                index === 0
                                                      ? "#projects"
                                                      : index === 1
                                                      ? "#skills"
                                                      : index === 2
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
