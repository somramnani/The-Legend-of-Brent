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

app.post('/addUser', (req, res) => {
    
    const user = new UserProfile({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    user.save((err, user) => {
        if(err) return console.error(err);
        console.log(`${user} was added to the DB`);
    })

})

app.get('/', (req, res) => {
    res.send({test: 'if you can see this, things are working.'})
})

app.listen(port, () => {
    console.log(`The app is now listening on port ${port}`)
});