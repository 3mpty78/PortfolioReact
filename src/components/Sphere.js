// CursorSphere.js
import React, { useState, useEffect } from "react";

const CursorSphere = () => {
      const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

      useEffect(() => {
            // Récupération de la position de la souris pour ajuster la position du dot et cercle
            const handleMouseMove = (e) => {
                  setDotPosition({ x: e.clientX - 2.5, y: e.clientY - 15 });
            };

            // Création des events
            window.addEventListener("mousemove", handleMouseMove);

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
