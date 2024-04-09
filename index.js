/*
localhost:8080 should take users to index.html
localhost:8080/about should take users to about.html
localhost:8080/contact-me should take users to contact-me.html
404.html should display any time the user tries to go to a page not listed above.
*/

const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
});

app.get("/about", (req, res) => {
    res.sendFile("about.html", {root: __dirname});
});

app.get("/contact-me", (req, res) => {
    res.sendFile("contact-me.html", {root: __dirname});
});

app.all("/*", (req, res) => {
    res.status(404).sendFile("404.html", {root: __dirname});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
