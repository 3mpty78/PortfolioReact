// CursorSphere.js
import React, { useState, useEffect } from "react";

const CursorSphere = () => {
      const [position, setPosition] = useState({ x: 0, y: 0 });

      useEffect(() => {
            const handleMouseMove = (e) => {
                  setPosition({ x: e.clientX - 250, y: e.clientY - 250 });
            };
            const card0 = document.getElementById("card 0");
            const card1 = document.getElementById("card 1");
            const card2 = document.getElementById("card 2");
            const sphere = document.getElementById("sphere");

            window.addEventListener("mousemove", handleMouseMove);
            card0.addEventListener("mouseenter", () => {
                  sphere.classList.add("purple");
            });
            card1.addEventListener("mouseenter", () => {
                  sphere.classList.add("orange");
            });
            card2.addEventListener("mouseenter", () => {
                  sphere.classList.add("grey");
            });
            card0.addEventListener("mouseleave", () => {
                  sphere.classList.remove("purple");
            });
            card1.addEventListener("mouseleave", () => {
                  sphere.classList.remove("orange");
            });
            card2.addEventListener("mouseleave", () => {
                  sphere.classList.remove("grey");
            });

            return () => {
                  window.removeEventListener("mousemove", handleMouseMove);
            };
      }, []);

      return (
            <div
                  className="cursor-sphere"
                  id="sphere"
                  style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                  }}></div>
      );
};

export default CursorSphere;
