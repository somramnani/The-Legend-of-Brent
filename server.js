const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const path = require("path");
const config = require('config')

app.use(express.json());
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// app.use(express.static(path.join(__dirname, 'client/build')));

const db = config.get('mongoURI');

mongoose.connect(db, {
  useNewUrlParser: true, useCreateIndex: true
})
.then(() => console.log('Legend of Brent DB is successfully connected!'))
.catch(err => console.log(err));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`The app is now listening on port ${port}`);
});
