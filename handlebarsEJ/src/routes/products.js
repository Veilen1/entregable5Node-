const { Router } = require("express")
const routerProducts = Router()
const routerMain = Router()
const ApiProd = require("../controllers/products")

let products = []

let api = new ApiProd(products) // instanciando clase product

//llamando enrutamientos


routerProducts.get("/", (req, res) => {
    res.render("products", {products})
})
routerProducts.post("/", (req, res) => {
    api.addProduct(req, res)
})





module.exports = routerProducts