import React, { useEffect, useState } from "react";
import memoji from "../assets/img/memoji_2.png";
import contact_text from "../assets/icons/contact_icon.svg";

export default function Home() {
      const [scrollY, setScrollY] = useState(0);

      useEffect(() => {
            const handleScroll = () => {
                  setScrollY(window.scrollY);
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      const textPositionX = -scrollY;

      return (
            <div id="home">
                  <a href="#contact">
                        <img
                              src={contact_text}
                              alt="me contacter"
                              className="contact-text"
                              style={{
                                    transform: `rotate(${
                                          textPositionX / 15
                                    }deg)`,
                              }}
                        />
                  </a>
                  <h1 style={{ transform: `translateX(${textPositionX}px)` }}>
                        corre <span>aurélien</span>
                  </h1>
                  <img
                        className="tronche"
                        src={memoji}
                        alt="memoji"
                        width={350}
                  />
            </div>
      );
}
