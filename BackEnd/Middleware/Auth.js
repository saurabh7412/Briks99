
const jwt = require('jsonwebtoken');
const Users = require('../Models/userModel');
const BL = require('../Models/BlackListed');

const Auth = async(req,res,next)=>{

    const token = req.headers.authorization;

    if(!token) {
        return res.status(400).send('Login First !');
    }

    const checkBL = await BL.findOne({ token });

    if(checkBL){
       return res.status(400).send("Token Expired !");
    }

    const decoded =  jwt.verify(token,'abc123');

    if(!decoded){
        return res.status(400).send('User not Authorized !'); 
    }else{
        const result = await Users.findById(decoded.userID);

        if(result){
            req.body.userID = decoded.userID;
            req.body.user = decoded.email
            next()
        }else{
            return res.status(200).send(`User doesn't Exist !`)
        }
    }

}

module.exports = Auth; 