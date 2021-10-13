/*
server.js
Jason Miles

Express server to serve react files
*/

const path = require("path");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config()
const { google } = require("googleapis");

// set up main server
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8000;

// router middleware
app.use(express.static(path.join(__dirname, "..", "build")));
// public
app.use(express.static(path.join(__dirname, "..", "public")));
// default page - if else fails
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log("sent public/index.html");
})


// change mode 
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../build/index.html"));
    })
} else {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}


/*
email functionality

The following set of code creates a google api client in order 
to authenticate my personal account for use in a messaging feature.

It will not work in this example until you create your own .env file with the 
referenced information.
*/

// create authentication client for google oauth
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.REACT_APP_CLIENTID,
    process.env.REACT_APP_PRIVATE_KEY,
    process.env.REACT_APP_REDIRECT_URI
)

oauth2Client.setCredentials({
    refresh_token: process.env.REACT_APP_REFRESH_TOK
});

console.log(oauth2Client);

const accessToken = oauth2Client.getAccessToken().catch((error) => {
    console.log("catching error while getting access token")
    console.log(error);
})

// node.js nodemailer
const contactEmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.REACT_APP_EMAIL,
        clientId: process.env.REACT_APP_CLIENTID,
        clientSecret: process.env.REACT_APP_PRIVATE_KEY,
        refreshToken: process.env.REACT_APP_REFRESH_TOK,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
});
contactEmail.verify((error) => {
    if (error) {
        console.log("error while verifying");
        console.log(error);
    } else {
        console.log("ready to send");
    }
});

// 
app.post("/contact", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    console.log(process.env);

    var mail = {
        from: process.env.REACT_APP_EMAIL,
        to: process.env.REACT_APP_EMAIL,
        subject: "Website contact",
        html:  `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message:\n${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log(error);
            res.json({status: 'fail'});
        } else {
            res.json({ status: 'success'});
        }
    });
})


// listen
app.listen(port, () => console.log("running.."));




