const User = require('../Models/user')
module.exports = {
    getUser: async (req, res) => {
        try {
            const data = await User.find()
            res.json(data)
        } catch (error) {
            console.log(error, '==err')
        }
    },

    createUser: async (req, res) => {
        try {
            const data = await User.findOne({ email: req.body.email })
            if (data) return res.json({ "msg": "this email already exist" })
            const userCreate = await User.create(req.body)
            return res.json(userCreate)
        } catch (error) {
            console.log(error)
            return res.json(error.message)
        }
    },

    LoginUsers :async(req, res)=>{
        try {
            const data = await User.findOne({ email: req.body.email })
            if (!data) return res.json({ "msg": "this email Not exist Please signup first" })
            if(data.password != req.body.password) return res.json({ "msg": "Password do not match" })
            return res.json( {msg:"login success",data})
            
        } catch (error) {
            console.log(error)
            return res.json(error.message)
        }
    }



}

