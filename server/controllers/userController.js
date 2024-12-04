import userModel from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import razorpay  from 'razorpay'
import transactionModel from "../models/transactionModel.js";


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

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


const paymentRazorpay = async (req,res)=>{
    try {

        const {userId, planId} = req.body
        const userData = await userModel.findById(userId) 

        if(!userId || !planId){
            return res.status(401).json({ success: false, message: "Missing details!" });
        }
        

        let credits, plan, amount, date
        switch (planId) {
            case 'Basic':
                plan = 'Basic'
                credits = 100
                amount = 10
                break;
        
            case 'Advanced':
                plan = 'Advanced'
                credits = 500
                amount = 50
                break;
        
            case 'Business':
                plan = 'Business'
                credits = 5000
                amount = 250
                break;
        
            default:
                return res.json({success: false, message: 'Plan not found!'})
        }


        date = Date.now();

        const transactionData = {
            userId,
            plan,
            amount,
            credits,
            date,
        }

        const newTransaction = await transactionModel.create(transactionData);

        const options = {
            amount: amount*100,
            currency: process.env.CURRENCY,
            receipt: newTransaction._id,
        }
        await razorpayInstance.orders.create(options, (error,order)=>{

            if(error){
                console.log(error);
                return res.status(500).json({ success: false, message: error });
                
            }
            res.status(200).json({ success: true, order });
        })


    } catch (error) {
        console.log(error.message);
		res.status(500).json({ success: false, message: error.message });
    
    }
}

const verifyRazorpay = async (req,res)=>{
    try {
        const{razorpay_order_id} = req.body;

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

        if(orderInfo.status === 'paid'){
            const transactionData = await transactionModel.findById(orderInfo.receipt)
            if(transactionData.payment){
                return res.status(500).json({ success: false, message: 'Payment Failed!' });
            }

            const userData = await userModel.findById(transactionData.userId)
            const creditBalance = userData.creditBalance + transactionData.credits
            await userModel.findByIdAndUpdate(userData._id, {creditBalance})

            await transactionModel.findByIdAndUpdate(transactionData._id, {payment: true})
            res.status(300).json({ success: true, message: "Credits Added!" });

        }
        else{
            res.status(500).json({ success: false, message: 'Payment Failed!' });
        }
    } catch (error) {
        console.log(error.message);
		res.status(500).json({ success: false, message: error.message });
    }
}

export {registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay}

