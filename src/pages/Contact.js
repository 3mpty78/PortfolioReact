import React from "react";
import Form from "../components/Form";
import Socials from "../components/Socials";

export default function Contact() {
      return (
            <div id="contact">
                  <h2>
                        Me <span>contacter</span>
                  </h2>
                  <div id="underline"></div>
                  <div className="contactContainer">
                        <Form />
                        <Socials />
                  </div>
            </div>
      );
}
