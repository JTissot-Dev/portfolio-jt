var express = require('express');
const transporter = require('../mail/mail.js');
var mailRouter = express.Router();

mailRouter.post('/email', async (req, res) => {

  const { name, email, message } = req.body;

  let mailOptions = {
    from: email,
    to: 'jerome.tissot.dev@gmail.com',
    subject: `Message de ${name} - ${email}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('E-mail envoyé avec succès.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
  }

});

module.exports = mailRouter;