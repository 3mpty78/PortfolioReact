import React from "react";

// Import des images
import taxis from "../assets/img/taxi.webp";
import bot from "../assets/img/robot.webp";
import tattoo from "../assets/img/tattoo.webp";

// Import des icons
import html from "../assets/icons/tech/html.svg";
import css from "../assets/icons/tech/css.svg";
import js from "../assets/icons/tech/js.svg";
import node from "../assets/icons/tech/node.svg";
import discord from "../assets/icons/tech/discord.svg";
import mongo from "../assets/icons/tech/mongo.svg";
import react from "../assets/icons/tech/react.svg";

const projects = [
      {
            title: "Baudic Taxis",
            description:
                  "Site vitrine pour une compagnie de taxis basée à Plouzane en Bretagne.",
            link: "https://3mpty78.github.io/Baudic-taxis/",
            linkName: "Visiter le site",
            imageURL: taxis,
            technos: [
                  {
                        name: "html",
                        icon: html,
                  },
                  {
                        name: "css",
                        icon: css,
                  },
                  {
                        name: "javascript",
                        icon: js,
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
            linkName: "En construction",
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
                        Quelques-uns de mes <span>projets</span>
                  </h2>
                  {projects.map((item, index) => (
                        <article key={index}>
                              <div className="text-container">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <a
                                          href={item.link}
                                          target="_blank"
                                          rel="noreferrer">
                                          {item.linkName}
                                    </a>
                              </div>
                              <div className="image-container">
                                    <a
                                          href={item.link}
                                          target="_blank"
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
