const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({test: 'if you can see this, things are working.'})
})

app.listen(port, () => {
    console.log(`The app is now listening on port ${port}`)
});