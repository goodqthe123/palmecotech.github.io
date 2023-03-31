const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'palmecotechhk@gmail.com', // your email address
        pass: '2A336DDB64AD10CF47C9600C6F613A747B2D' // your email password
    }
});

// handle POST requests to the form submission endpoint
app.post('/submit-form', function (req, res) {
  // extract the form data
  const name = req.body.names;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  
  // create the email message
  let mailOptions = {
    from: 'palmecotechhk@gmail.com', // sender address
    to: 'james.kwong@palmeco.com', // list of receivers
    subject: subject, // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // plain text body
  };

  // send the email
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.status(500).send('Unable to send email');
      }else{
          console.log('Email sent: ' + info.response);
          res.status(200).send('Email sent successfully');
      }
  });
});