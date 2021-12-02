const express = require("express");
const bp = require('body-parser')

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.post("/scene2", (request, response) => {
    console.log(request.body);
    response.send('ok');
});

app.post("/scene1", (request, response) => {
    console.log(request.body);
    response.send('ok');
});

app.listen(2599, () => console.log("Server running..."));