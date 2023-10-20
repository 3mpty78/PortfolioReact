import React from "react";

// Import des icons
import github from "../assets/icons/socials/signe-github.png";
import insta from "../assets/icons/socials/instagram (1).png";
import linkedin from "../assets/icons/socials/logo-linkedin.png";

export default function Socials() {
      return (
            <div id="socials">
                  <article className="insta">
                        <a
                              href="https://www.instagram.com/cursed_aure/"
                              target="_blank"
                              rel="noreferrer">
                              <img src={insta} alt="Instagram icon" />
                        </a>
                  </article>
                  <article className="github">
                        <a
                              href="https://github.com/3mpty78"
                              target="_blank"
                              rel="noreferrer">
                              <img src={github} alt="Github icon" />
                        </a>
                  </article>
                  <article className="linkedin">
                        <a
                              href="https://www.linkedin.com/in/aurelien-corre-a229461b3/"
                              target="_blank"
                              rel="noreferrer">
                              <img src={linkedin} alt="Linkedin icon" />
                        </a>
                  </article>
            </div>
      );
}
