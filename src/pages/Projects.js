import React from "react";

// Import des images
import jeunepauvre from "../assets/img/jeunepauvre.png";
import bot from "../assets/img/robot.webp";
import tattoo from "../assets/img/tattoo.webp";

// Import des icons
import css from "../assets/icons/tech/css.svg";
import node from "../assets/icons/tech/node.svg";
import discord from "../assets/icons/tech/discord.svg";
import mongo from "../assets/icons/tech/mongo.svg";
import react from "../assets/icons/tech/react.svg";
import sass from "../assets/icons/tech/sass.svg";

const projects = [
      {
            title: "Yung Poor Alo",
            description:
                  "Site affichant l'actualité du rappeur YUNG POOR ALO. Ce site n'est pas le site officiel de l'artiste.",
            link: "https://jeunepauvre.vercel.app",
            linkName: "Visiter le site",
            imageURL: jeunepauvre,
            technos: [
                  {
                        name: "React JS",
                        icon: react,
                  },
                  {
                        name: "sass",
                        icon: sass,
                  },
            ],
      },
      {
            title: "Blindtester",
            description:
                  "Bot Discord utilisé pour jouer au blindtest avec des paroles de chansons. J'ai codé ce bot avec la librairie discord.js de Node.js pour les serveurs Discord de deux rappeurs Français.",
            link: "https://github.com/3mpty78/Blindtester",
            linkName: "Voir le code source",
            imageURL: bot,
            technos: [
                  {
                        name: "Node.js",
                        icon: node,
                  },
                  {
                        name: "Discord.js",
                        icon: discord,
                  },
                  {
                        name: "MongoDB",
                        icon: mongo,
                  },
            ],
      },
      {
            title: "Tattoo Roulette",
            description:
                  " Tattoo Roulette sera une application web et une application mobile regroupant des conseils sur le tatouage et où il sera possible de générer un motif aléatoire en fonction d'un style choisi. Cette application sera créée en collaboration avec des artistes tatoueurs.",
            link: "",
            linkName: "En cours de développement",
            imageURL: tattoo,
            technos: [
                  {
                        name: "React JS",
                        icon: react,
                  },
                  {
                        name: "React Native",
                        icon: react,
                  },
                  {
                        name: "Node.js",
                        icon: node,
                  },
            ],
      },
];

export default function Projects() {
      return (
            <div id="projects">
                  <h2>
                        Quelques <span>projets</span>
                  </h2>
                  <div id="underline"></div>
                  {projects.map((item, index) => (
                        <article key={index}>
                              <div className="text-container">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <button
                                          onClick={() => {
                                                window.open(
                                                      item.link,
                                                      "_blank"
                                                );
                                          }}
                                          disabled={index !== 2 ? false : true}>
                                          {item.linkName}
                                    </button>
                              </div>
                              <div className="image-container">
                                    <a
                                          href={index !== 2 ? item.link : ""}
                                          target={index !== 2 ? "_blank" : ""}
                                          rel="noreferrer">
                                          <img src={item.imageURL} alt="" />
                                          <div className="technos-container">
                                                {item.technos.map(
                                                      (tech, index) => (
                                                            <span
                                                                  key={index}
                                                                  className="tech">
                                                                  <img
                                                                        src={
                                                                              tech.icon
                                                                        }
                                                                        alt=""
                                                                  />
                                                                  <p>
                                                                        {
                                                                              tech.name
                                                                        }
                                                                  </p>
                                                            </span>
                                                      )
                                                )}
                                          </div>
                                    </a>
                              </div>
                        </article>
                  ))}
            </div>
      );
}
