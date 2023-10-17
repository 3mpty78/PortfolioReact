const express = require("express");
const transporter = require("./nodemailer-config");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/envoyer-email", (req, res) => {
      const { email, message } = req.body;

      const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL, // Ton e-mail personnel
            subject: "Nouveau message de contact depuis le Portfolio !",
            text: `Email: ${email}\nMessage: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                  console.error(
                        "Erreur lors de l'envoi de l'e-mail : " + error
                  );
                  res.status(500).json({
                        message: "Erreur lors de l'envoi de l'e-mail",
                  });
            } else {
                  console.log("E-mail envoyé avec succès !", info);
                  res.json({ message: "E-mail envoyé avec succès !" });
            }
      });
});

app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
});
