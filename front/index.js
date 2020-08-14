const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

const app = express();
const router = express.Router();

const port = process.env.SERVICE_PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/', function (req, res) {
    request.post({
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        // url: `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}`,
        url: `http://10.60.80.4:8080/`,
        body: JSON.stringify(req.body),
        timeout: 1000
    }, (err, result) => {
        if (!err) {
            console.log(`OK`, result.body) 
            res.redirect("/");
        } else {
            res.status(500).send({ error: `Error ${err}` });
        }
    });    
});

app.use('/', router);
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
  })