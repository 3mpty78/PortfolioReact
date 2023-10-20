import React from "react";
import Socials from "../components/Socials";

const email = "aurelien.corre@outlook.fr";

export default function Contact() {
      return (
            <div id="contact">
                  <h2>
                        Me <span>contacter</span>
                  </h2>
                  <div id="underline"></div>
                  <button
                        onClick={() => {
                              window.location.href = `mailto:${email}`;
                        }}>
                        email
                  </button>
                  <div className="contactContainer">
                        <Socials />
                  </div>
            </div>
      );
}
