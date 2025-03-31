const {getCustomer, addCustomer, loginCustomer} = require("../controller/customercontroller")

const route = require("express").Router()

route.get("/", getCustomer)
route.post("/", addCustomer)
route.post("/login", loginCustomer)

module.exports = route
