const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const UserProfile = require('./Models/userProfile')
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const jwtMW = exjwt({
  secret: 'som may be a vampire'
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

mongoose.connect('mongodb://localhost:27017/rpg', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('The RPG User Profile DB is connected')
});

//our route for signing up
app.post('/user/signup', (req, res) => {

  const newUser = new UserProfile({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })

  const saltRounds = 10;
  bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
    newUser.save({
      username: newUser.username,
      password: hash,
      email: newUser.email
    }).then((result) => {
      console.log("User created: ", result);
      res.json("user created!");
    })
  });
})

//our route for logging in
app.post('/user/login', (req, res) => {
  const { username, password } = req.body;

  UserProfile.findOne({ username: username })
    .then((user) => {
      console.log("User Found: ", user);
      if (user === null) {
        res.json(false);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          console.log("Authenticated!");
          let token = jwt.sign({ username: user.username }, 'som may be a vampire', { expiresIn: 129600 });
          res.json({
            sucess: true,
            err: null,
            token
          });
        }
        else {
          console.log("Password and Hash are a mismatch!");
          res.status(401).json({
            sucess: false,
            token: null,
            err: 'Password and Hash are a mismatch!'
          });
        }
      });
    })
});

app.get('/', jwtMW, (req, res) => {
  console.log("Web Token Checked.")
  alert('You are authenticated');
});

app.listen(port, () => {
  console.log(`The app is now listening on port ${port}`)
});