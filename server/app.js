const express        = require("express");
const path           = require("path");
const favicon        = require("serve-favicon");
const logger         = require("morgan");
const cookieParser   = require("cookie-parser");
const bodyParser     = require("body-parser");
const cors           = require("cors");
// añadir rutas
const profile = require("./routes/api/profile");
const authController = require("./routes/authController");

const session        = require("express-session");
const passport       = require("passport");

const app            = express();


// Mongoose configuration
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/la-neta-news")
  .then(console.log("Connected to DB!!"))

// Session


var corsOptions = {
  origin: true,
  credentials: true
};
app.use(cors(corsOptions));


app.use(express.static(path.join(__dirname, 'public')));

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "lab-angular-authentication",
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 }
}));

// Passport configuration
require("./config/passport")(passport,app);


app.use('/api', authController);
app.use('/profile', profile);
app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;
