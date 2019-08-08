const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config');
const jwt = require('jsonwebtoken')
const User = require('../../Models/userProfile');
const auth = require('../../middleware/auth')

router.post('/', (req, res) => {
  const { email, password } = req.body; 

  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enta all fields' })
  }

  User.findOne({ email })
    .then(user => {
      if(!user) {
        res.status(400).json({ msg: 'user does not exist...'})
        
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg: 'Invalid Creds'})
            jwt.sign(
              { id: user.id },
              config.get('jwtSecret'),
              { expiresIn: 3600 },
              (err, token) => {
                if(err) throw err;
                res.json({
                  token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }
                })
              }
            )
          })
       }
    })
})

router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})


module.exports = router;