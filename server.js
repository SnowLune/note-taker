const express = require("express");
const routes_api = require("./routes/routes_api.js");
const routes_html = require("./routes/routes_html.js");

// start
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/api", routes_api);
app.use("/", routes_html);

app.listen(3000)
