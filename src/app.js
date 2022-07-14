const express = require("express");
const app = express();
const path = require("path");

const indexRoute = require("./route/indexRoute");
app.use(express.urlencoded({ extended: false }));

app.set('views', path.resolve(__dirname, './views'))
app.set('view engine', 'ejs')

app.listen(3001, console.log("funciona"));

app.get("/", indexRoute);
