import React, { useState } from "react";
import axios from "axios"; // Importe Axios

export default function Form() {
      const [formData, setFormData] = useState({
            email: "",
            message: "",
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            // Envoi des données
            axios.post("/envoyer-email", formData)
                  .then((response) => {
                        console.log(response.data);
                  })
                  .catch((error) => {
                        console.error(error);
                  });

            // Clear les champs
            setFormData({
                  email: "",
                  message: "",
            });

            console.log(formData);

            alert("Mail envoyé !");
      };

      return (
            <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                  />

                  <label htmlFor="message">Message</label>
                  <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                  />

                  <button type="submit">Envoyer</button>
            </form>
      );
}
