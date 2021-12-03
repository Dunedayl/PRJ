const express = require("express");
const bp = require('body-parser')
var db = require("./database.js")
const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.post("/scenes", (req, res) => {
    console.log(req.body);
    var data = {
        scene: req.body.player.scene,
        name: req.body.player.name,
        q1: req.body.player.q1,
        q2: req.body.player.q2,
        q3: req.body.player.q3,
        q4: req.body.player.q4, 
    }
    var sql = 'INSERT INTO scenes (scene, name, q1, q2, q3, q4 ) VALUES (?,?,?,?,?,?)'
    var params = [scene, data.name, data.q1, data.q2, data.q3, data.q4]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": data,
        })
    });
});

app.get("/scenes/:sceneId", (req, res) => {
    var sql = `select * from scenes where scene = ${req.params['sceneId']}`
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        
        res.json({
            "message": "success",
            "data": rows
        })
    });
});


app.listen(2599, () => console.log("Server running..."));
