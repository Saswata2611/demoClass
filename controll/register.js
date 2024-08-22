const model = require('../models/models');

const registerUser = async(req, res) => {
  try {
    const userData = {
        username:req.query.username,
        email:req.query.email,
        password:req.query.password,
    }
    const newData = new model(userData);
    const saveData = await newData.save();
    if(saveData){
        res.status(200).json('user is registered');
    }else{
        res.status(400).json("Something went wrong at our server please try again later");
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = { registerUser };