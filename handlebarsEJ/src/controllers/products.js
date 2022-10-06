class ApiProd {
    constructor(products){
        this.products = products
    }

    getProducts = (req, res) => {
        res.json(this.products)
    }

    getById(id){
        let resultId = this.products.find(prod => prod.id == id)
        return resultId
    }

    addProduct = (req, res) => {
        const product = req.body
        product.id = this.products.length + 1
        this.products.push(product)
        res.send(product)
    }

    getProductById = (req, res) => {
        const id = req.params.id
        if(this.getById(id) != (undefined || null)){
            res.send({productoEncontrado: this.getById(id)})
        }else{res.send(`producto no encontrado`)}

    }

    changeProduct = (req, res) =>{
        const { id } = req.params
        const product = req.body
        product.id = id
        this.products.splice(parseInt(id - 1), 1, product)
        res.send({ productoModificado: product })
    }

    deleteProduct = (req, res) => {
        const { id } = req.params
        const product = this.products.splice(parseInt(id - 1), 1)
        res.send({ productoEliminado: product })
    }
}

module.exports = ApiProd