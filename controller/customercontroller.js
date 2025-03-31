const Customer = require("../model/customer")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.getCustomer = async (req,res) => {
    try {
       const data = await Customer.find() 
       return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(500).json({errors: true, message: error.message})
    }
}

exports.addCustomer = async (req, res) => {
    try {
        const userExists = await Customer.findOne({email: req.body.email})
        if(userExists) return res.status(500).json({errors:true, message: "Customer already exists!"})
        
        req.body.password = await bcrypt.hash(req.body.password, 10)

        const data = await Customer.create(req.body)
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(500).json({errors: true, message: error.message})
    }
}

exports.loginCustomer = async (req, res) => {
    try {
        const userExists = await Customer.findOne({email: req.body.email})
        if(!userExists) return res.status(500).json({errors: true, message: "e-mail or password is invalid"})
        
        const comparePass = await bcrypt.compare(req.body.password, userExists.password)
        if(!comparePass) return res.status(500).json({errors: true, message: "e-mail or password is invalid"})
        
        const token = await jwt.sign({id: userExists._id, role: userExists.role}, process.env.SEC)

        return res.json({errors: false, data: {token: token, user: userExists}})
    } catch (error) {
        return res.status(500).json({errors: true, message: error.message})
    }
}