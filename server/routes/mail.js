const express = require('express');

const nodemailer = require('nodemailer');


const app = express();


app.get('/mail/:email/:asunto/:msj', (req, res)=>{


    let email = req.params.email;
    let asunto = req.params.asunto;
    let msj = req.params.msj;

    let body = req.body;


  //Objeto que se va a actualizar
  let enviarMensaje = {
    email: body.email,
    asunto: body.asunto,
    msj: body.msj
   }


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 25,
      secure: false, // true for 465, false for other ports
      auth: {
          user: '', // generated ethereal user
          pass: '' // generated ethereal password
      },
      tls: { rejectUnauthorized: false }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'lalymania.manualidades@gmail.com', // sender address
      to: 'lalymania.manualidades@gmail.com', // list of receivers
      subject: asunto, // Subject line
      text: email , // plain text body
      html: msj // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', info );

      return res.json({
             mail: info
      });

  });

  transporter.close();

});


module.exports = app;



