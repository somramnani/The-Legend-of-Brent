const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const UserProfile = require('./client/src/Models/userProfile')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/rpg', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('The RPG User Profile DB is connected')
  });

const user = new UserProfile({ 
    username: 'DirkDiggler696969', 
    password: 'fellatio', 
    email: 'chickslayer69@420lol.com' 
})

app.get('/', (req, res) => {
    res.send({test: 'if you can see this, things are working.'})
})

app.listen(port, () => {
    console.log(`The app is now listening on port ${port}`)
});