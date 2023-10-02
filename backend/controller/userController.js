const User= require('../Models/user')
module.exports ={
    getUser : async(req, res)=>{
        try {
            const data = await User.find()
            res.json(data) 
        } catch (error) {
            console.log(error,'==err')
        }
    },



}

