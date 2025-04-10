const mongoose = require("mongoose")
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "customer"
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("customer", customerSchema)