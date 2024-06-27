import User from "../models/User.models.js";
import bycrypt from "bcryptjs";

export const signUp = async (req, res) => {
    
    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bycrypt.hash(password, 10);
        const newUser = new User({
            name: name, 
            email: email, 
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({message: "User created successfully",
            user:{
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email
            }}
        );
    } catch (error) {
        console.log("Error while creating user " + error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

export const signIn = async (req, res) => {

    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const isMatch = await bycrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(404).json({message:"Incorrect Password"});
        }
        else{
            res.status(200).json({
                message: "User login succesful",
                user:{
                    _id : user._id,
                    name : user.name,
                    email : user.email
                },
            });
        }
    } catch (error) {
        console.log("Error while signin the user " + error.message);
        res.status(500).json({message: "Internal server error"});
    }
};