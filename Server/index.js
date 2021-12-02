const express = require("express");
const bp = require('body-parser')

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!')
});

app.post("/", (request, response) => {
    console.log(request.body);
    response.send(request.body);
});

app.listen(1488, () => console.log("Server running..."));