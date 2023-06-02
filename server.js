const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/src/ContactMe', (req, res) => {
    const { name, email, message } = req.body;
    
  const autoResponse = 'Thank you for contacting me. I will get back to you as soon as I can.';
  const status = 'success'

     // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    // Configure the email transport settings (e.g., SMTP)
        host: "smtp.example.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: "username",
            pass: "password",
        },
  });

    // Create the email message
    const mailOptions = {
        from: 'your-email@example.com',
        to: 'recipient-email@example.com',
        subject: 'New Contact Form Submission',
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      };

      //send the email

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('Error sending email', err);
            res.status(500).json({ error: 'Error sending email' });
            } else {
                console.log('Email sent: ', info.response);
                res.status(200).json({ autoResponse });
                }

      })
    

return res.send(autoResponse)

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})