const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")
const productRoutes = require("./routes/productroutes")
const categoryRoutes = require("./routes/categoryRoutes")
const customerRoute = require("./routes/customerRoutes")

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("home")
})

app.get("/about",(req, res)=>{
    res.send("about")
})

app.use("/api/product", productRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/customer", customerRoute)

app.listen(process.env.PORT)

async function dB() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

dB();
