const express = require('express');
const app = express()
const routerProducts = require('./src/routes/products');
const { engine } = require('express-handlebars');


//  Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", routerProducts)
app.use(express.static("./src/public"))

// vinculando maquetacion y estableciendo motor de plantillas
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

// Server Running
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log("server running");
})
server.on("error", error => console.log(error))
