
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const UserProfile = require('../models/UserProfile')

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
//const dbRoute = ('mongodb://localhost:27017/rpg', {useNewUrlParser: true});

// connects our back end code with the database
mongoose.connect('mongodb://localhost:27017/rpg', { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getUser', (req, res) => {
  UserProfile.find((err, user) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: user });
  });
});

router.post('/updateUser', (req, res) => {
  const { id, update } = req.body;
  UserProfile.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete('/deleteUser', (req, res) => {
  const { id } = req.body;
  UserProfile.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.post('/addUser', (req, res) => {
  let user = new UserProfile();

  const { id, username, password, email, userCreated } = req.body;

  if ((!id && id !== 0) || !username || !password || !email) {
    return res.json({
      success: false,
      error: 'Bad Input',
    });
  }
  user.id = id;
  user.username = username;
  user.password = password;
  user.email = email;
  user.userCreated = userCreated
  user.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
