import React from "react";

const menu = ["Mes projets", "Me contacter"];

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
