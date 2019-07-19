const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('hello som')
})

app.listen(port, () => { console.log(`The application is listening on port: ${port}`)})