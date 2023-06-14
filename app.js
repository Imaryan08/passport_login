const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");

const app = express();

//Passport configuration
require("./config/passport")(passport);

// DB Config
const db = require("./config/keys").MongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlparser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// BodyParser
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

//Globals variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Routes

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
