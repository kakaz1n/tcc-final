'use strict';
const functions  = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

let url = "smtps://pedro.hn.barros%40gmail.com:"+encodeURIComponent('Tamuaew,123') + "@smtp.gmail.com:465";
let transporter = nodemailer.createTransport(url);

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let remetente = '"Pedrao" <pedrohnbarros@gmail.com>';

    let assunto = req.body['assunto'];
    let destinatarios = req.body['destinatarios']; // lista de e-mails destinatarios separados por ,
    let corpo = req.body['corpo'];
    let corpoHtml = req.body['corpoHtml'];

    let email = {
        from: remetente,
        to: destinatarios,
        subject: assunto,
        text: corpo,
        html: corpoHtml
    };

    transporter.sendMail(email, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Mensagem %s enviada: %s', info.messageId, info.response);
    });
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
