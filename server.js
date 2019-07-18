const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
  res.send({express: 'hello from express'})
})

// router.get('/getUser', (req, res) => {
//   UserProfile.find((err, user) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: user });
//   });
// });

// router.post('/updateUser', (req, res) => {
//   const { id, update } = req.body;
//   UserProfile.findByIdAndUpdate(id, update, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// router.delete('/deleteUser', (req, res) => {
//   const { id } = req.body;
//   UserProfile.findByIdAndRemove(id, (err) => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// router.post('/addUser', (req, res) => {
//   let user = new UserProfile();

//   const { id, username, password, email, userCreated } = req.body;

//   if ((!id && id !== 0) || !username || !password || !email) {
//     return res.json({
//       success: false,
//       error: 'Bad Input',
//     });
//   } // this is where a new user profile will be created... see my slack comments about the values..
//   user.id = id;
//   user.username = username;
//   user.password = password;
//   user.email = email;
//   user.userCreated = userCreated
//   user.save((err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
