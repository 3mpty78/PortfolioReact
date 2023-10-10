import React, { useEffect, useState } from "react";
import memoji from "../assets/img/memoji.PNG";

export default function About() {
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
            // Fonction de gestionnaire de défilement
            const handleScroll = () => {
                  const element = document.getElementById("about");
                  const elementPosition = element.getBoundingClientRect().top;
                  const isVisible = elementPosition < window.innerHeight;
                  setIsVisible(isVisible);
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll();
            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      return (
            <div id="about">
                  <h2>
                        <span>Qui</span> suis-je ?
                  </h2>
                  <div className="about_container">
                        <img
                              src={memoji}
                              alt="Apple memoji"
                              className={`${isVisible ? "visible" : ""}`}
                        />
                        <p className={`${isVisible ? "visible" : ""}`}>
                              Salut !👋
                              <br />
                              Je m'appelle Aurélien, j'ai 27 ans et suis
                              passionné <span>d'informatique </span> et de{" "}
                              <span>développement web</span>. Je suis
                              actuellement en formation{" "}
                              <span>Intégrateur Web</span> et je compte me
                              spécialiser en développement web{" "}
                              <span>front-end</span>.
                        </p>
                  </div>
            </div>
      );
}
