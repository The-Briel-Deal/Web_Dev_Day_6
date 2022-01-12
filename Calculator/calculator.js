const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const ip = "192.168.0.8";

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var num1 = req.body.num1;
    var num2 = req.body.num2;

    var result = calcBMI(num1, num2);


    res.send("The result of the calculation is " + result);
});

app.listen(port, ip, () => {
    console.log("Listening on http://" + ip + ":" + port);
});

function calcBMI(height, weight) {
    return ((weight / height / height) * 10000);
}