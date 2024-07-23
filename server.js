import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'skjastrow@gmail.com',
    pass: 'RRLPamapro20!'
  }
});

app.post('/send', (req, res) => {
  const mailOptions = {
    from: req.body.email,
    to: 'skjastrow@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
