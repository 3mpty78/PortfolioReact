const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

// Route pour envoyer le formulaire de contact
app.post("/envoyer-email", async (req, res) => {
      try {
            const { email, message } = req.body;

            // Création du transporter nodemailer
            const transporter = nodemailer.createTransport({
                  service: "Gmail",
                  auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD,
                  },
            });

            // Options du mail
            const mailOptions = {
                  from: "Portfolio contact",
                  to: process.env.EMAIL, // Ton adresse e-mail spécifiée dans .env
                  subject: `Formulaire de contact du Portfolio`,
                  text: `
                        Email : ${email}
                        Message : ${message}
                  `,
            };

            // Envoie du mail
            await transporter.sendMail(mailOptions);

            res.status(200).json({
                  message: "Formulaire de contact envoyé avec succès",
            });
      } catch (error) {
            console.error(
                  "Erreur lors de l'envoi du formulaire de contact :",
                  error
            );
            res.status(500).json({
                  message: "Une erreur est survenue lors de l'envoi du formulaire de contact",
            });
      }
});

app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
});
