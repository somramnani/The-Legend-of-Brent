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
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('client/build'));

const jwtMW = exjwt({
  secret: 'som may be a vampire'
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
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
app.post('/user/signup', async (req, res) => {
  try { 
    req.body.password = bcrypt.hashSync(req.body.password, 10)
      const newUser = new UserProfile({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      })
        const result = await newUser.save();
        res.send(result)
} catch(error) {
    res.status(500).send(error)
  }
})

//our route for logging in
app.post('/user/login', async (req, res) => {
try {
 const user = await UserProfile.findOne({ username: req.body.username }).exec()
    if(!user) {
      return res.status(400).send({ message: 'That username does not exist.'})
    }
    if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).send({ message: 'That password is incorrect.'})
    }
    let token = jwt.sign({ username: user.username }, 'som may be a vampire', { expiresIn: 129600 }); // Signing the token
      res.json({
        success: true,
        err: null,
        token
      });
    alert('You are now logged in as username: ' + user.username + '.')
 } catch (error) {
    res.status(500).send(error);
 }
});

// app.get('/', jwtMW, (req, res) => {
//   console.log("Web Token Checked.")
//   alert('You are authenticated');
// });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

app.listen(port, () => {
  console.log(`The app is now listening on port ${port}`)
});