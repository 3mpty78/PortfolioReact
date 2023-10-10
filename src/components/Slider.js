import React, { useState } from "react";
import taxis from "../assets/img/taxi.webp";
import robot from "../assets/img/robot.webp";
import tattoo from "../assets/img/tattoo.webp";

import arrow from "../assets/icons/arrow.png";

const projects = [
      {
            name: "BAUDIC Taxis",
            description: "Site vitrine pour une compagnie de taxis.",
            technos: ["HTML", "CSS", "Javascript"],
            image: taxis,
      },
      {
            name: "Blindtester",
            description:
                  "Bot discord pour jouer au blindtest avec des paroles de chansons.",
            technos: ["Javascript", "Discord.js", "Node.js", "MongoDB"],
            image: robot,
      },
      {
            name: "Tattoo Roulette",
            description:
                  "Application pour générer aléatoirement un motif de tatouage en fonction d'un style choisi.",
            technos: [
                  "Javascript",
                  "React",
                  "React Native",
                  "Node.js",
                  "MongoDB",
            ],
            image: tattoo,
      },
];

export default function Slider() {
      const [activeSlide, setActiveSlide] = useState(0);

      const navigateLeft = () => {
            if (activeSlide > 0) {
                  setActiveSlide(activeSlide - 1);
            } else if (activeSlide === 0) {
                  setActiveSlide(2);
            }
      };

      const navigateRight = () => {
            if (activeSlide < projects.length - 1) {
                  setActiveSlide(activeSlide + 1);
            } else if (activeSlide === 2) {
                  setActiveSlide(0);
            }
      };

      return (
            <>
                  <div className="projects_container">
                        <div
                              className="carousel"
                              style={{
                                    transform: `translateX(-${
                                          activeSlide * 33.33
                                    }%)`,
                              }}>
                              {projects.map((project, index) => (
                                    <div
                                          className={`slide ${
                                                index === activeSlide
                                                      ? "active"
                                                      : ""
                                          }`}
                                          key={index}>
                                          <div className="text_container">
                                                <h3>{project.name}</h3>
                                                <p>{project.description}</p>
                                                <p>
                                                      {project.technos.join(
                                                            " | "
                                                      )}
                                                </p>
                                          </div>
                                          <img
                                                src={project.image}
                                                alt="Project illustration"
                                          />
                                    </div>
                              ))}
                        </div>
                  </div>
                  <div className="navigation_buttons">
                        <img
                              onClick={navigateLeft}
                              src={arrow}
                              alt=""
                              className={`left ${
                                    activeSlide === 0 ? "disabled" : ""
                              }`}
                        />
                        <img
                              onClick={navigateRight}
                              src={arrow}
                              alt=""
                              className={`right ${
                                    activeSlide === projects.length - 1
                                          ? "disabled"
                                          : ""
                              }`}
                        />
                  </div>
            </>
      );
}
