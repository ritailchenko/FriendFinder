var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(require("./app/routing/apiRoutes.js"));
app.use(require("./app/routing/htmlRoutes.js"));

app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
});

