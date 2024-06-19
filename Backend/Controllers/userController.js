const express = require('express')
const User = require("../Models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = 'thisisasecretkey'

const createUser= async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10)
    let securePassword =  await bcrypt.hash(req.body.password,salt)

    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password:securePassword,
            location: req.body.location
        })
        res.json({success:true})
    } catch (error) {
        console.log('Error in creating User', error);
        res.json({success:false})
    }

}



const login = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        const email = req.body.email
        const password = req.body.password
        const userData = await User.findOne({email})

        if(!userData){
            return res.status(400).json({ error:"Failed to Login"}); 
        }

        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
        if(!pwdCompare){
            return res.status(400).json({ error:"Failed to Login"}); 
        }

        const data = {
            user:{
                id:userData.id
            }
        }

        const authToken = jwt.sign(data,jwtSecret)
        res.json({success: true,authToken:authToken})

    }catch(error){
        console.log('Login ERROR', error)
        res.status(500).json({ success: false, message: 'error in logging in' });
    }
}

module.exports ={
    createUser,
    login
}