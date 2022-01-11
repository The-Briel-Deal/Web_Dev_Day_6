const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<p>Contact me at: gabe@fordltc.net</p>");
});

app.get("/about", (req, res) => {
    res.send("<p>This site was made by Gabriel Ford</p>");
});

app.get("/hobbies", (req, res) => {
    res.send("<p>My hobbies are <ul><li>Servers</li><li>Switches</li><li>Bitches</li></ul></p>");
});



app.listen(port, () => {
    console.log("App listening at http://127.0.0.1:" + port);
});