const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv/config");

const app = express();

app.use(cors());
app.use(express.json());

app.options("/envoyer-email", (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "http://192.168.1.15:3000");
      res.setHeader("Access-Control-Allow-Methods", "POST");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.status(200).end();
});

app.post("/envoyer-email", (req, res) => {
      try {
            const { email, message } = req.body;

            // Création du transporter nodemailer
            const transporter = nodemailer.createTransport({
                  service: "Outlook",
                  auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD,
                  },
            });

            // Options du mail
            const mailOptions = {
                  from: "Portfolio contact",
                  to: process.env.EMAIL,
                  subject: `Formulaire de contact du Portfolio`,
                  text: `
        Email : ${email}
        Message : ${message}
      `,
            };

            // Envoie du mail
            transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                        console.error(
                              "Erreur lors de l'envoi du formulaire de contact :",
                              error
                        );
                        res.status(500).json({
                              message: "Une erreur est survenue lors de l'envoi du formulaire de contact",
                        });
                  } else {
                        console.log(
                              "Formulaire de contact envoyé avec succès",
                              info.response
                        );
                        res.status(200).json({
                              message: "Formulaire de contact envoyé avec succès",
                        });
                  }
            });
      } catch (error) {
            console.error("Erreur lors de la gestion de la requête :", error);
            res.status(500).json({
                  message: "Une erreur est survenue lors de la gestion de la requête",
            });
      }
});

const port = process.env.PORT || 8080; // Port de secours au cas où PORT ne serait pas défini
app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
});
