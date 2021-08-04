const express = require('express');
const cors = require('cors');

var app = express();
const port = process.env.PORT || 8000

app.use(cors());

app.get('/', function(req, res) {
    res.send("Request Header Parser");
})

app.get('/api/whoami', function(req, res) {
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    })
})

app.listen(port, () => {
    console.log("Server running. Listening on port %d", port)
})