const { Router } = require("express")
const {postCategory, getCategory, deleteCategory, updateCategory} = require("../controller/categoryController")

const route = require("express").Router()

route.get("/", getCategory)
route.post("/", postCategory)
route.put("/:id", updateCategory)
route.delete("/:id", deleteCategory)

module.exports = route