const {getProduct, addProduct, updateProduct, deleteProduct} = require("../controller/productController")
const isAdmin = require("../middleware/admin")
const auth = require("../middleware/auth")

const route = require("express").Router()

route.get("/", getProduct)
route.post("/", [auth, isAdmin], addProduct)
route.put("/:id", updateProduct)
route.delete("/:id", deleteProduct)

module.exports = route