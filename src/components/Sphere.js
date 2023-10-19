// CursorSphere.js
import React, { useState, useEffect } from "react";

const CursorSphere = () => {
      const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

      useEffect(() => {
            // Récupération de la position de la souris pour ajuster la position du dot et cercle
            const handleMouseMove = (e) => {
                  setDotPosition({ x: e.clientX - 2.5, y: e.clientY - 15 });
            };

            // Récupération des cartes
            const card1 = document.getElementById("card 0");
            const card2 = document.getElementById("card 1");
            const card3 = document.getElementById("card 2");

            // Création des events
            window.addEventListener("mousemove", handleMouseMove);

            // Effet pour la 1ere carte
            card1.addEventListener("mouseenter", () => {
                  card1.style.boxShadow = "0 0 20px hsla(300, 100%, 50%, 0.25)";
            });
            card1.addEventListener("mouseleave", () => {
                  card1.style.boxShadow = "none";
            });

            // Effet pour la 2eme carte
            card2.addEventListener("mouseenter", () => {
                  card2.style.boxShadow = "0 0 20px hsla(16, 100%, 50%, 0.25)";
            });
            card2.addEventListener("mouseleave", () => {
                  card2.style.boxShadow = "none";
            });

            // Effet pour la 3eme carte
            card3.addEventListener("mouseenter", () => {
                  card3.style.boxShadow = "0 0 20px hsla(0, 0%, 50%, 0.25)";
            });
            card3.addEventListener("mouseleave", () => {
                  card3.style.boxShadow = "none";
            });

            return () => {
                  window.removeEventListener("mousemove", handleMouseMove);
            };
      }, []);

      return (
            <div
                  id="dot"
                  style={{
                        transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
                  }}></div>
      );
};

export default CursorSphere;
