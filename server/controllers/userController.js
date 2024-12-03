import userModel from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({ success: false, message: "Missing Details" });
		}

		// Check if user already exists
		const existingUser = await userModel.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}


		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const userData = {
			name,
			email,
			password: hashedPassword,
		};
        
		const newUser = new userModel(userData);
		const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
		res.status(201).json({ success: true, token, user: { name: user.name,  } });


	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: error });
	}
};


const loginUser = async(req,res)=>{
    try {
        const {email, password} = req.body

        // Validate input
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(400).json({success:false, message: "Invalid credentials"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch)
        {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

            res.status(200).json({ success: true, token, user: { name: user.name } });
        }
        else{
            return res.status(400).json({success: false, message : "Invalid credentials"})
        }

      
        
    } catch (error) {
        console.log(error);
		res.status(500).json({ success: false, message: error });
    }
};

const userCredits = async (req,res) =>{


    try {
        
        const {userId} = req.body;


        const user = await userModel.findById(userId)
        res.status(200).json({success: true, credits: user.creditBalance, user:{name: user.name}})


    } catch (error) {
        console.log(error.message);
		res.status(500).json({ success: false, message: error.message });
    }
}

export {registerUser, loginUser, userCredits}

