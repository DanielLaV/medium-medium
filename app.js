const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize } = require("./db/models");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const profileRouter = require("./routes/profile");
const storiesRouter = require("./routes/stories");
const { sessionSecret } = require("./config");
const { restoreUser } = require("./auth");
const { profile } = require("console");
const apiRouter = require('./routes/api');
const likeRouter = require('./routes/like');

const app = express();

// view engine setup
app.set("view engine", "pug");

app.use(likeRouter)
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(
  session({
    name: "medium.sid",
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(restoreUser);
app.use(express.static(path.join(__dirname, "public")));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: "f1f079b1-68fe-4324-8010-0a5cff63a288",
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();
console.log('1')
app.use("/users", usersRouter);
console.log('2')
app.use("/stories", storiesRouter);
console.log('3')

app.use("/profiles", profileRouter);
console.log('4')

app.use("/api", apiRouter);
console.log('5')

app.use("/", indexRouter);
console.log('6')


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
