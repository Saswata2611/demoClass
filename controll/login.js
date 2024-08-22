const model = require('../models/models');

const loginUser = async(req, res)=>{
    try {
        const userData = {
            username:req.query.username,
            password:req.query.password,
        }
        const findData = await model.findOne({username:userData.username});
        if(findData){
           if(findData.password == userData.password){
            res.status(200).json("Loggedin");
           }else{
            res.status(400).json("Password is wrong");
           }
        }else{
            res.status(400).json("Username does not exist in our Database");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { loginUser };